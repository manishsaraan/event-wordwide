import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center py-36  px-3">
      <h1
        className="text-3xl lg:text-6xl
       font-bold tracking-tight"
      >
        Find events around you
      </h1>
      <p className="mt-7 mb-12 text-2xl opacity-75 lg:text-3xl">
        Browse more than{" "}
        <span className="font-bold italic underline text-[#a4f839]">
          {" "}
          10,000
        </span>{" "}
        events
      </p>
      <form className="w-full lg:w-[580px]">
        <input
          className="w-full focus:ring-2 focus:bg-white/10 h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-[#a4f839] transition"
          spellCheck={false}
          placeholder="search events in the city..."
        />
      </form>
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
