import { EventoEvent } from "@prisma/client";
import { capitalize } from "./util";
import prisma from "./db";
export async function getEvents(
  city: string,
  page = 1
): Promise<{
  events: EventoEvent[];
  totalCount: number;
}> {
  const skip = (page - 1) * 6;
  console.log(city, "city", capitalize(city));
  let totalEvent = 0;

  if (city !== "all") {
    totalEvent = await prisma.eventoEvent.count({
      where: {
        city: capitalize(city),
      },
    });
  } else {
    totalEvent = await prisma.eventoEvent.count();
  }

  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
    take: 6,
    skip,
  });

  return { events, totalCount: totalEvent };
}

export async function getEvent(slug: string): Promise<EventoEvent | null> {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug,
    },
  });

  return event;
}
