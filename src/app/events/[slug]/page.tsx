import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { capitalize, sleeper } from "@/lib/util";
import React, { Suspense } from "react";
import Loading from "./loading";
import CityEventList from "@/components/CityEventList";
import { Metadata } from "next";
import { describe } from "node:test";

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const { slug: city } = params;

  return {
    title: city === "all" ? "All Events" : "events in " + capitalize(city),
    description: "Events in " + city,
  };
}

export default async function page({ params }: Props) {
  const { slug } = params;

  const headline =
    slug === "all" ? "All Events" : `Events in ${capitalize(slug)}`;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">{headline}</H1>
      <Suspense fallback={<Loading />}>
        <CityEventList slug={slug} />
      </Suspense>
    </main>
  );
}
