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
			className="group w-full rounded-2xl border border-foreground/20 bg-foreground/5 p-2 pb-4 dark:block dark:border-foreground/10"
		>
			<div className="relative">
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

				<div className="mt-4 px-2">
					<div className="font-medium text-foreground">{item.name}</div>
					<div className="text-foreground/75">{item.title}</div>
				</div>
			</div>
		</SpotlightCard>
	);
};
