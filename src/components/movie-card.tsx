import Image from "next/image";
import Link from "next/link";

import { type YTMovieData } from "@/lib/model/youtube";

import { SpotlightCard } from "./spotlight-card";

export const MovieCard = ({ movie }: { movie: YTMovieData }) => {
	const movieData = {
		title: movie.snippet.title,
		description: movie.snippet.description,
		alt: movie.snippet.title,
		image: {
			src: movie.snippet.thumbnails.high.url,
			width: movie.snippet.thumbnails.high.width,
			height: movie.snippet.thumbnails.high.height,
		},
	};

	return (
		<Link
			key={movie.id}
			href={`https://www.youtube.com/watch?v=${movie.contentDetails.videoId}`}
			target="_blank"
			className="block break-inside-avoid-column rounded-md"
		>
			<SpotlightCard
				mode="after"
				from="rgba(255,255,255,0.20)"
				size={300}
				className="group cursor-pointer rounded-2xl border border-foreground/10 bg-foreground/5 p-4 pb-4"
			>
				<div className="relative">
					<Image
						className="relative aspect-video h-full rounded-xl object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
						src={movieData.image}
						alt={movieData.alt}
						sizes="100vw"
						style={{
							width: "100%",
							height: "auto",
						}}
						width={movieData.image.width}
						height={movieData.image.height}
					/>
					<div className="mt-4 px-2">
						<div className="text-2xl font-medium text-foreground group-hover:text-brand ">
							{movieData.title}
						</div>

						<div className="mt-4 line-clamp-3 text-foreground/75">{movieData.description}</div>
					</div>
				</div>
			</SpotlightCard>
		</Link>
	);
};
