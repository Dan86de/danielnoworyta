import Image from "next/image";

import { SpotlightCard } from "./spotlight-card";

const item = {
	name: "Daniel Noworyta",
	title: "Full Stack Developer",
	alt: "Daniel Noworyta - picture",
	image: "/hero.webp",
};

export const HeroAvatar = () => {
	return (
		<SpotlightCard
			mode="after"
			from="rgba(255,255,255,0.20)"
			size={400}
			className="group w-full rounded-2xl border border-white/10 bg-white/5 p-2 pb-4"
		>
			<div className="relative">
				<Image
					className="absolute inset-0 h-64 w-64 scale-110 rounded-xl object-cover blur-xl grayscale saturate-200 transition-all duration-300 group-hover:blur-[32px] group-hover:grayscale-0"
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

				<Image
					className="relative h-64 w-64 rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
					src={item.image}
					alt={item.alt}
					sizes="100vw"
					style={{
						width: "100%",
						height: "auto",
					}}
					width={1000}
					height={1000}
				/>

				<div className="mt-4 px-2">
					<div className="font-medium text-white">{item.name}</div>

					<div className="text-white/75">{item.title}</div>
				</div>
			</div>
		</SpotlightCard>
	);
};
