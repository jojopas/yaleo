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
    description: "Doors open 6:00 PM https://www.freshtix.com/events/yaleo-2026",
  },
  {
    id: "3",
    title: "The Acorn Center (North Carolina)",
    start: new Date("2026-07-09T19:30:00"),
    end: new Date("2026-07-09T23:00:00"),
    location: "411 Mosby Ave, Littleton, NC 27850, USA",
    description: "Doors open 6:30 PM https://www.etix.com/ticket/p/99678040",
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
    description: "Doors open 7:00 PM https://www.davisarts.org/show/08292026/",
  },
  {
    id: "7",
    title: "Mars Music Hall (Huntsville, AL)",
    start: new Date("2026-06-06T19:30:00"),
    end: new Date("2026-06-06T23:00:00"),
    location: "700 Monroe St SW, Huntsville, AL 35801, USA",
    description: "https://bit.ly/YaleoVBC",
  },
  {
    id: "8",
    title: "The Merry Widow (Mobile, AL)",
    start: new Date("2026-06-05T20:00:00"),
    end: new Date("2026-06-05T23:00:00"),
    location: "The Merry Widow, Mobile, AL",
    description: "Doors open 7:00 PM https://www.ticketweb.com/event/yaleo-the-ultimate-santana-tribute-the-merry-widow-tickets/14905353",
  },
  {
    id: "10",
    title: "Encore Live (Sarasota, FL)",
    start: new Date("2026-08-20T19:00:00"),
    end: new Date("2026-08-20T23:00:00"),
    location: "8341 N Lockwood Ridge Rd, Sarasota, FL 34243, USA",
    description: "Tickets to be announced",
  },
  {
    id: "6",
    title: "The Dixon Historic Theatre (Dixon, IL)",
    start: new Date("2027-02-27T19:30:00"),
    end: new Date("2027-02-27T22:00:00"),
    location: "114 S. Galena Ave, Dixon, IL 61021, USA",
    description: "Doors open 6:30 PM https://dixontheatre.com/events-schedule/",
  },
  {
    id: "9",
    title: "The Gobbler Theatre (Johnson Creek, WI)",
    start: new Date("2027-02-26T19:30:00"),
    end: new Date("2027-02-26T22:00:00"),
    location: "350 N Watertown St, Johnson Creek, WI 53038, USA",
    description: "Ticket Sales Coming Soon",
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
