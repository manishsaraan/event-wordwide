import { EventoEvent } from "./types";

export async function getEvents(city: string): Promise<EventoEvent[]> {
  const resp = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=" +
      city,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const events: EventoEvent[] = await resp.json();

  return events;
}

export async function getEvent(slug: string): Promise<EventoEvent> {
  const resp = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event: EventoEvent = await resp.json();

  return event;
}
