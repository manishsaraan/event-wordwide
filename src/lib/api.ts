import { EventoEvent } from "@prisma/client";
import { capitalize } from "./util";
import prisma from "./db";
export async function getEvents(city: string): Promise<EventoEvent[]> {
  console.log(city, "city", capitalize(city));
  if (city === "all") {
    return await prisma.eventoEvent.findMany();
  }

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
  });

  return events;
}

export async function getEvent(slug: string): Promise<EventoEvent | null> {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  return event;
}
