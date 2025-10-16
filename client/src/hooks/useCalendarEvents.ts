import { useEffect, useState } from 'react';
import ICAL from 'ical.js';

export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  location?: string;
  description?: string;
}

const CALENDAR_ID = 'yaleosantana@gmail.com';
const CALENDAR_URL = `https://calendar.google.com/calendar/ical/${encodeURIComponent(CALENDAR_ID)}/public/basic.ics`;

export function useCalendarEvents() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        // Only show loading on initial fetch, not on auto-refresh
        if (events.length === 0) {
          setLoading(true);
        }
        setError(null);

        // Use a CORS proxy for development
        const proxyUrl = 'https://corsproxy.io/?';
        const response = await fetch(proxyUrl + encodeURIComponent(CALENDAR_URL));
        
        if (!response.ok) {
          throw new Error('Failed to fetch calendar');
        }

        const icsData = await response.text();
        const jcalData = ICAL.parse(icsData);
        const comp = new ICAL.Component(jcalData);
        const vevents = comp.getAllSubcomponents('vevent');

        const now = new Date();
        const parsedEvents: CalendarEvent[] = vevents
          .map((vevent) => {
            const event = new ICAL.Event(vevent);
            const startDate = event.startDate.toJSDate();
            const endDate = event.endDate.toJSDate();
            
            return {
              id: event.uid,
              title: event.summary,
              start: startDate,
              end: endDate,
              location: event.location || undefined,
              description: event.description || undefined,
            };
          })
          .filter((event) => {
            // Filter out past events and rehearsals
            const isPast = event.end < now;
            const isRehearsal = event.title.toLowerCase().includes('rehearsal');
            return !isPast && !isRehearsal;
          })
          .sort((a, b) => a.start.getTime() - b.start.getTime());

        setEvents(parsedEvents);
      } catch (err) {
        console.error('Error fetching calendar:', err);
        setError(err instanceof Error ? err.message : 'Failed to load events');
      } finally {
        setLoading(false);
      }
    }

    // Fetch events immediately on mount
    fetchEvents();

    // Set up auto-refresh every 10 minutes (600000ms)
    const refreshInterval = setInterval(() => {
      console.log('Auto-refreshing calendar events...');
      fetchEvents();
    }, 10 * 60 * 1000); // 10 minutes

    // Cleanup interval on unmount
    return () => clearInterval(refreshInterval);
  }, []);

  return { events, loading, error };
}

