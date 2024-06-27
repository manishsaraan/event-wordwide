import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/event/all",
  },
];
export default function Header() {
  return (
    <header className="flex sm:px-9 px-3 items-center border-b border-white/10 h-14 justify-between">
      <Logo />
      <nav>
        <ul className="flex text-sm gap-x-6">
          {routes.map((link) => (
            <li className="text-white/10 hover:text-white" key={link.path}>
              <Link href={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
