"use client";

import Image from "next/image";

import { GridPattern } from "./grid-pattern";
import { SectionWrapper } from "./section";

const item = {
	name: "Daniel Noworyta",
	title: "Full Stack Developer",
	alt: "Daniel Noworyta - picture",
	image: "/hero.webp",
};

export const HeroSection = () => {
	return (
		<div className="relative inset-0 min-h-screen overflow-hidden bg-background md:h-full">
			<GridPattern
				offsetX={0}
				offsetY={0}
				size={48}
				className={`absolute -inset-px h-full w-full stroke-zinc-950/10 stroke-[4] [mask-image:radial-gradient(#070A0D,transparent_70%)] [stroke-dasharray:5_6] [stroke-dashoffset:10] dark:stroke-zinc-50/10 dark:[mask-image:radial-gradient(#E5E7EB,transparent_70%)]`}
			/>

			<SectionWrapper className={"flex items-center justify-center md:h-full portrait:pt-32"}>
				<div className="grid w-full gap-10 lg:grid-cols-2">
					<div className="text-lg">
						<h2 className="pb-4 text-2xl font-bold md:text-4xl">
							Programista samouk z pasją do dzielenia się wiedzą i doświadczeniem.
						</h2>
					</div>
					<Image
						className="relative h-64 w-64 rounded-xl object-cover transition-all duration-300 group-hover:grayscale-0 dark:grayscale"
						src={item.image}
						alt={item.alt}
						sizes="100vw"
						style={{
							width: "100%",
							height: "auto",
						}}
						width={400}
						height={400}
					/>
				</div>
			</SectionWrapper>
		</div>
	);
};
