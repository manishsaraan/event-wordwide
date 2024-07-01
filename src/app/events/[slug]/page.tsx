import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { EventoEvent } from "@/lib/types";
import React from "react";

type EventsPageParams = {
  params: {
    slug: string;
  };
};
export default async function page({ params }: EventsPageParams) {
  const { slug } = params;

  const resp = await fetch(
    "https://bytegrad.com/course-assets/projects/evento/api/events?city=" + slug
  );
  const events: EventoEvent[] = await resp.json();

  console.log("datat-----------", events);
  const headline =
    slug === "all"
      ? "All Events"
      : `Events in ${slug.charAt(0).toUpperCase() + slug.slice(1)}`;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">{headline}</H1>
      <EventsList events={events} />
    </main>
  );
}
