import { EventoEvent } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type EventCardProps = {
  event: EventoEvent;
};
export default function EventCard({ event }: EventCardProps) {
  const eventDay = new Date(event.date).toLocaleDateString("en-US", {
    day: "2-digit",
  });

  const eventMonth = new Date(event.date).toLocaleDateString("en-US", {
    month: "short",
  });

  return (
    <Link
      className="flex-1 basis-80 flex-col max-h-[380px] max-w-[500px]"
      href={`/${event.slug}`}
    >
      <section
        className="hover:scale-105 flex flex-col w-full h-full active:scale-[1.02] transition 
      relative  bg-white/[3%] 
      rounded-xl overflow-hidden"
      >
        <Image
          className="h-[60%] object-cover"
          src={event.imageUrl}
          alt={event.name}
          height={280}
          width={500}
        />
        <div className="flex flex-col flex-1 justify-center items-center">
          <h2 className="text-2xl font-semibold">{event.name}</h2>
          <p className="italic text-white/75">By: {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section className="absolute flex justify-center items-center flex-col left-[12px] top-[12px] h-[45px] w-[45px] bg-black/30 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">{eventDay}</p>
          <p className="text-xs uppercase text-accent ">{eventMonth}</p>
        </section>
      </section>
    </Link>
  );
}
