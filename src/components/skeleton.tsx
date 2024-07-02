import { cn } from "@/lib/util";
import React from "react";

export default function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "animate-pulse h-2 rounded-md w-[550px] bg-white/5",
        className
      )}
    />
  );
}
