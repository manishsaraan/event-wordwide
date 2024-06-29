import H1 from "@/components/H1";
import SearchForm from "@/components/SearchForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-36  px-3">
      <H1>Find events around you</H1>
      <p className="mt-7 mb-12 text-2xl opacity-75 lg:text-3xl">
        Browse more than{" "}
        <span className="font-bold italic underline text-accent"> 10,000</span>{" "}
        events
      </p>
      <SearchForm />
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <p>Popular:</p>
        <div className="space-x-2 font-semibold">
          <Link href={"/event/austin"}>Austin</Link>
          <Link href={"/event/seatle"}>Seatle</Link>
        </div>
      </section>
    </main>
  );
}
