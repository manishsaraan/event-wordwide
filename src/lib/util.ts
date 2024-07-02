import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export async function sleeper() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
