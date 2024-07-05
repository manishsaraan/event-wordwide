import H1 from "@/components/H1";
import { getEvent } from "@/lib/api";
import { capitalize, sleeper } from "@/lib/util";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  // top 100 popular events
  return [
    {
      slug: "science-space-expo",
    },
    {
      slug: "global-food-festival",
    },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const event = await getEvent(slug);
  return {
    title: "Event: " + event?.name,
    description: "Events in " + slug,
  };
}

export default async function EventPage({ params }: Props) {
  const { slug } = params;
  const event = await getEvent(slug);

  if (!event) {
    notFound();
  }

  return (
    <main>
      <section className="relative h-[360px] flex justify-center items-center py-14 md:py-20">
        <Image
          quality={50}
          src={event.imageUrl}
          className="object-cover z-0 blur-3xl overflow-hidden"
          fill
          sizes="(max-width:1280px) 100vw, 1280px"
          alt="bg"
        />
        <div className="z-1 relative flex flex-col items-center gap-6 lg:gap-16 lg:flex-row">
          <Image
            alt={event.name}
            width={300}
            height={200}
            src={event.imageUrl}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1
              className="mb-2 mt-1 whitespace-nowrap
             lg:text-5xl"
            >
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl text-white/75">
              Orgnised by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="state-effects bg-white/20 border-white/10 mt-5 border-2 text-lg capitalize lg:mt-auto w-[95vw] sm:w-full rounded-md py-2">
              Get Ticket
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>

          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>

          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12"> {children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl"> {children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl m-auto text-lg leading-8 text-white/75">
      {" "}
      {children}
    </p>
  );
}
