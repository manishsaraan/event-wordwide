import EventsList from "@/components/EventsList";
import H1 from "@/components/H1";
import { capitalize, sleeper } from "@/lib/util";
import React, { Suspense } from "react";
import Loading from "./loading";
import CityEventList from "@/components/CityEventList";
import { Metadata } from "next";
import { describe } from "node:test";
import PaginationControls from "@/components/pagination-controls";

type Props = {
  params: {
    slug: string;
  };
};

type EventPageProps = Props & {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  const { slug: city } = params;

  return {
    title: city === "all" ? "All Events" : "events in " + capitalize(city),
    description: "Events in " + city,
  };
}

export default async function page({ params, searchParams }: EventPageProps) {
  const { slug } = params;
  const page = searchParams.page || "0";

  const headline =
    slug === "all" ? "All Events" : `Events in ${capitalize(slug)}`;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">{headline}</H1>
      <Suspense key={slug + page} fallback={<Loading />}>
        <CityEventList page={+page} slug={slug} />
      </Suspense>
    </main>
  );
}
