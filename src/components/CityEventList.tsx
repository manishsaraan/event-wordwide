import { EventoEvent } from "@/lib/types";
import React from "react";
import EventsList from "./EventsList";
import { getEvents } from "@/lib/api";
import PaginationControls from "./pagination-controls";

export default async function CityEventList({
  slug,
  page = 1,
}: {
  slug: string;
  page?: number;
}) {
  const { events, totalCount } = await getEvents(slug, page);
  const prevPath = page > 1 ? `/events/${slug}?page=${page - 1}` : "";
  const nextPath =
    totalCount > 6 * page ? `/events/${slug}?page=${page + 1}` : "";

  return (
    <EventsList events={events}>
      <PaginationControls prevPath={prevPath} nextPath={nextPath} />
    </EventsList>
  );
}
