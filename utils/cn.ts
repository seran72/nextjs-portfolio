import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cn_typewriter(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

 
export function cn_bg(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}