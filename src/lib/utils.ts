import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const clamp = (number: number, min: number, max: number) =>
	Math.min(Math.max(number, min), max);
