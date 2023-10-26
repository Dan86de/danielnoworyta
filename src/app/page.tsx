"use client";

import { GridPattern } from "@/components/grid-pattern";
import { SpotlightButton } from "@/components/ui/spotlight-button";

export default function Home() {
	return (
		<div className="mx-auto flex h-screen w-screen items-center">
			<div className="bg-zinc/5 relative flex h-screen w-full items-center justify-center overflow-hidden rounded-2xl ">
				<GridPattern
					offsetX={0}
					offsetY={0}
					size={64}
					className={`absolute -inset-px h-full w-full stroke-zinc-50/10 stroke-[4] [mask-image:radial-gradient(#E5E7EB,transparent_70%)] [stroke-dasharray:5_6] [stroke-dashoffset:10]`}
				>
					{}
				</GridPattern>

				{/* <div className="font-display relative text-4xl font-bold">
					<div className="absolute inset-0 rounded-full bg-brand/25 blur-2xl"></div>

					<span className="relative bg-gradient-to-b from-white/50 to-brand bg-clip-text text-transparent">
						Daniel Noworyta
					</span>
				</div> */}
				<SpotlightButton as={"span"} className="cursor-pointer" props={{}}>
					<span className="relative mt-px select-none bg-gradient-to-b from-zinc-50/25 to-zinc-50 bg-clip-text font-mono text-lg font-medium text-transparent transition-all duration-200">
						Zapis na newsletter
					</span>
				</SpotlightButton>
			</div>
		</div>
	);
}
