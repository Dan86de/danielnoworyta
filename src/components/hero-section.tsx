"use client";

import Link from "next/link";

import { GridPattern } from "./grid-pattern";
import { SpotlightButton } from "./ui/spotlight-button";

export const HeroSection = () => {
	return (
		<div className="bg-zinc/5 relative inset-0 h-screen overflow-hidden">
			<GridPattern
				offsetX={0}
				offsetY={0}
				size={48}
				className={`absolute -inset-px h-full w-full stroke-zinc-950/10 stroke-[4] [mask-image:radial-gradient(#070A0D,transparent_70%)] [stroke-dasharray:5_6] [stroke-dashoffset:10] dark:stroke-zinc-50/10 dark:[mask-image:radial-gradient(#E5E7EB,transparent_70%)]`}
			/>

			<div className="flex h-full w-full items-center justify-start">
				<div className="container flex h-80 w-full flex-col">
					<h1 className="text-left text-4xl md:text-6xl">Daniel Noworyta</h1>
					<p className="top-8 max-w-[36ch] pt-4 text-left md:max-w-[62ch] md:text-lg 2xl:text-2xl">
						Zostawiłem karierę w branży samochodowej i nauczyłem się programować.
						<br className="md:hidden" /> Uczę się i buduję publicznie.
						<br className="md:hidden" /> Pomagam w nauce programowania.
					</p>
					<Link
						href={"#newsletterFormSection"}
						className="mt-10 w-[297px] rounded-full bg-transparent outline-none ring-foreground ring-offset-0 focus:ring-1"
					>
						<SpotlightButton>
							<span className="md:text-md relative mt-px select-none bg-gradient-to-b from-zinc-500/25 to-zinc-500 bg-clip-text font-mono text-sm font-medium text-brand transition-all duration-200 dark:from-zinc-50/25 dark:to-zinc-50 dark:text-transparent xl:text-lg ">
								Zapis na newsletter
							</span>
						</SpotlightButton>
					</Link>
				</div>
			</div>
		</div>
	);
};
