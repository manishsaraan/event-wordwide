import { EventoEvent } from "@/lib/types";
import React from "react";
import EventsList from "./EventsList";

export default async function CityEventList({ slug }: { slug: string }) {
  const resp = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=" +
      slug,
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const events: EventoEvent[] = await resp.json();

  return <EventsList events={events} />;
}
