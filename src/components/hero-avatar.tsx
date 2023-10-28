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
		<>
			<SpotlightCard
				mode="after"
				from="rgba(255,255,255,0.20)"
				size={400}
				className="group hidden w-full rounded-2xl border border-foreground/10 bg-foreground/5 p-2 pb-4 dark:block"
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
						<div className="font-medium text-foreground">{item.name}</div>

						<div className="text-foreground/75">{item.title}</div>
					</div>
				</div>
			</SpotlightCard>
			<div className="group relative dark:hidden">
				<div
					className="border-0.5 absolute inset-0 h-64 w-64 scale-110 rounded-xl border-foreground object-cover transition-all duration-300 group-hover:grayscale-0"
					style={{
						width: "100%",
						height: "auto",
					}}
				/>

				<Image
					className="relative h-64 w-64 rounded-xl object-cover grayscale transition-all duration-300 hover:grayscale-0"
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
					<div className="font-medium text-foreground">{item.name}</div>
					<div className="text-foreground/75">{item.title}</div>
				</div>
			</div>
		</>
	);
};
