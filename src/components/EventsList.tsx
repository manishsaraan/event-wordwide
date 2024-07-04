import { EventoEvent } from "@prisma/client";
import React from "react";
import EventCard from "./event-card";
import PaginationControls from "./pagination-controls";
type EventListProp = {
  events: EventoEvent[];
  children: React.ReactNode;
};

export default function EventsList({ events, children }: EventListProp) {
  return (
    <section
      className="flex flex-wrap gap-10 justify-center max-w-[1100px] px-20px
    "
    >
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
      {children}
    </section>
  );
}
