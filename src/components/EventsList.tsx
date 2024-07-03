import { EventoEvent } from "@prisma/client";
import React from "react";
import EventCard from "./event-card";
type EventListProp = {
  events: EventoEvent[];
};

export default function EventsList({ events }: EventListProp) {
  return (
    <section
      className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-20px
    "
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </section>
  );
}
