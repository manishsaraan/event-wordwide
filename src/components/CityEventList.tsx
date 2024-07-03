import { EventoEvent } from "@/lib/types";
import React from "react";
import EventsList from "./EventsList";
import { getEvents } from "@/lib/api";

export default async function CityEventList({ slug }: { slug: string }) {
  const events = await getEvents(slug);
  return <EventsList events={events} />;
}
