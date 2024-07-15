"use client";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function SearchForm() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search === "") {
      return;
    }

    router.push("/events/" + search);
  };
  return (
    <form onSubmit={handleSubmit} className="w-full lg:w-[580px]">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full focus:ring-2 focus:bg-white/10 h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent transition"
        spellCheck={false}
        placeholder="search events in the city..."
      />
    </form>
  );
}
