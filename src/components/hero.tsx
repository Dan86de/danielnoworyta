"use client";

import Link from "next/link";

import { GridPattern } from "./grid-pattern";
import { SectionWrapper } from "./section";
import { SpotlightButton } from "./ui/spotlight-button";

export const HeroSection = () => {
	return (
		<div className="bg-zinc/5 relative inset-0 flex h-screen w-screen items-center justify-center overflow-hidden rounded-2xl">
			<GridPattern
				offsetX={0}
				offsetY={0}
				size={48}
				className={`absolute -inset-px h-full w-full stroke-zinc-950/10 stroke-[4] [mask-image:radial-gradient(#070A0D,transparent_70%)] [stroke-dasharray:5_6] [stroke-dashoffset:10] dark:stroke-zinc-50/10 dark:[mask-image:radial-gradient(#E5E7EB,transparent_70%)]`}
			/>

			<SectionWrapper>
				<div className="container flex h-80 w-full max-w-7xl flex-col">
					<h1 className="text-left text-4xl md:text-6xl">Daniel Noworyta</h1>
					<p className="top-8 max-w-2xl pt-4 text-left">
						Zostawiłem karierę w branży samochodowej.
						<br className="hidden md:block" />
						Nauczyłem się programować. <br className="md:hidden" />
						Uczę się i buduję publicznie.
						<br className="hidden md:block" />
						Pomagam innym w nauce programowania.
					</p>
					<SpotlightButton className="mt-10 w-[300px]">
						<Link href={"https://programistafrontend.pl"}>
							<span className="relative mt-px select-none bg-gradient-to-b from-zinc-500/25 to-zinc-500 bg-clip-text font-mono text-lg font-medium text-brand transition-all duration-200 dark:from-zinc-50/25 dark:to-zinc-50 dark:text-transparent ">
								Zapis na newsletter
							</span>
						</Link>
					</SpotlightButton>
				</div>
			</SectionWrapper>
		</div>
	);
};
