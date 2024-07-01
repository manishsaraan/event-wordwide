"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { cn } from "@/lib/util";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Events",
    path: "/events/all",
  },
];
export default function Header() {
  const activePathName = usePathname();

  return (
    <header className="flex sm:px-9 px-3 items-center border-b border-white/10 h-14 justify-between">
      <Logo />
      <nav className="h-full">
        <ul className="flex h-full text-sm gap-x-6">
          {routes.map((link) => (
            <li
              className={cn(
                "hover:text-white flex items-center relative transition",
                {
                  "text-white": activePathName === link.path,
                  "text-white/50": activePathName !== link.path,
                }
              )}
              key={link.path}
            >
              <Link href={link.path}>{link.name}</Link>
              {activePathName === link.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
