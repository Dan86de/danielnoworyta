"use client";

import Link from "next/link";

import { GridPattern } from "./grid-pattern";
import { SectionWrapper } from "./section";
import { SpotlightButton } from "./ui/spotlight-button";

export const HeroSection = () => {
	return (
		<div className="relative inset-0 h-screen overflow-hidden bg-background">
			<GridPattern
				offsetX={0}
				offsetY={0}
				size={48}
				className={`absolute -inset-px h-full w-full stroke-zinc-950/10 stroke-[4] [mask-image:radial-gradient(#070A0D,transparent_70%)] [stroke-dasharray:5_6] [stroke-dashoffset:10] dark:stroke-zinc-50/10 dark:[mask-image:radial-gradient(#E5E7EB,transparent_70%)]`}
			/>

			<div className="flex h-full items-center justify-start">
				<SectionWrapper>
					<div className="flex flex-col">
						<h1 className="mb-4 -translate-x-1 text-left text-4xl font-medium md:text-6xl">
							Daniel Noworyta
						</h1>
						<p className="max-w-[36ch] text-left md:max-w-[62ch] md:text-lg 2xl:text-2xl">
							Zamieniłem lukratywną karierę w branży samochodowej na ekscytującą przygodę
							programisty. Pomogę Ci spełnić Twoje marzenie o pierwszej pracy w branży IT.
						</p>
						<div className="mt-4 max-w-[229px] rounded-full outline-none has-[:focus]:ring has-[:focus]:ring-brand has-[:focus]:ring-offset-2 md:mt-12 md:max-w-[245px] xl:max-w-[297px]">
							<Link href={"#newsletterFormSection"} className="outline-none">
								<SpotlightButton>
									<span className="md:text-md relative mt-px select-none bg-gradient-to-b from-zinc-500/25 to-zinc-500 bg-clip-text font-mono text-sm font-medium text-brand transition-all duration-200 dark:from-zinc-50/25 dark:to-zinc-50 dark:text-transparent xl:text-lg ">
										Zapis na newsletter
									</span>
								</SpotlightButton>
							</Link>
						</div>
					</div>
				</SectionWrapper>
			</div>
		</div>
	);
};
