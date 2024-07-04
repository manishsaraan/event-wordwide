import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const btnStyles =
  "text-white items-center hover:opacity-100 transition text-sm gap-x-2 flex px-5 py-3 bg-white/5 rounded-md opacity-75";

type PaginationControlsProps = {
  nextPath: string;
  prevPath: string;
};
export default function PaginationControls({
  nextPath,
  prevPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {prevPath !== "" ? (
        <Link className={btnStyles} href={prevPath}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath !== "" && (
        <Link className={btnStyles} href={nextPath}>
          <ArrowRightIcon />
          Next
        </Link>
      )}
    </section>
  );
}
