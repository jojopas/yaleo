export interface CalendarEvent {
  id: string;
  title: string;
  start: Date;
  end: Date;
  location?: string;
  description?: string;
}

// ============================================
// MANUAL EVENTS LIST - Update this when you have new shows!
// ============================================
const STATIC_EVENTS: CalendarEvent[] = [
  {
    id: "1",
    title: "Finley's Irish Pub St. Patty's Day (Largo, FL)",
    start: new Date("2026-03-17T19:00:00"),
    end: new Date("2026-03-17T22:00:00"),
    location: "13477 S Belcher Rd, Largo, FL 33771, USA",
    description: "Yaleo 7-10pm",
  },
  {
    id: "2",
    title: "Twisted Fork - (Port Charlotte)",
    start: new Date("2026-04-25T18:00:00"),
    end: new Date("2026-04-25T23:00:00"),
    location: "The Twisted Fork, 2208 El Jobean Rd, Port Charlotte, FL 33948, USA",
    description: "https://www.freshtix.com/events/yaleo-2026",
  },
  {
    id: "3",
    title: "The Acorn Center (North Carolina)",
    start: new Date("2026-05-15T19:30:00"),
    end: new Date("2026-05-15T23:00:00"),
    location: "411 Mosby Ave, Littleton, NC 27850, USA",
    description: "https://www.etix.com/ticket/p/99678040",
  },
  {
    id: "5",
    title: "Davenport, Florida (Private Show)",
    start: new Date("2026-05-30T18:00:00"),
    end: new Date("2026-05-30T22:00:00"),
    location: "Davenport, FL",
    description: "Private Show",
  },
  {
    id: "4",
    title: "Edward A. Kenley Centennial Amphitheater (Layton, UT)",
    start: new Date("2026-08-29T19:00:00"),
    end: new Date("2026-08-29T23:00:00"),
    location: "Edward A. Kenley Centennial Amphitheater, Layton, UT",
    description: "Doors open 7 PM",
  },
  {
    id: "6",
    title: "The Dixon Historic Theatre (Dixon, IL)",
    start: new Date("2027-02-27T19:30:00"),
    end: new Date("2027-02-27T22:00:00"),
    location: "114 S. Galena Ave, Dixon, IL 61021, USA",
    description: "Doors open 6:30 PM https://www.freshtix.com/events/yaleo-2026",
  },
];

export function useCalendarEvents() {
  // Filter out past events and sort by date
  const now = new Date();
  const events = STATIC_EVENTS
    .filter((event) => event.end >= now)
    .sort((a, b) => a.start.getTime() - b.start.getTime());

  return { events, loading: false, error: null };
}
