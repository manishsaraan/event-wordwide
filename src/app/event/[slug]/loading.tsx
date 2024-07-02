import Skeleton from "@/components/skeleton";
import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col h-[75vh] items-center gap-y-4 pt-28">
      <Skeleton className="h-4 w-[550px]" />
      <Skeleton className="h-4 w-[400px]" />
      <Skeleton className="h-4 w-[430px]" />
    </div>
  );
}
