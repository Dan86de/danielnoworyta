import { format, parseISO } from "date-fns";
import pl from "date-fns/locale/pl/index";
import Link from "next/link";
import { Suspense } from "react";

import { getAllMoviesFromChannel } from "@/api/youtube";
import { MovieCard } from "@/components/movie-card";
import { NewsletterLanding } from "@/components/newsletter-landing";
import { SectionWrapper, SectionWrapperRounded } from "@/components/section";

export default async function TutorialsPage() {
	const movies = await getAllMoviesFromChannel();
	const last4Movies = movies.slice(0, 4);
	const restMovies = movies.slice(3);

	return (
		<SectionWrapper className="pt-32">
			<h2 className="text-3xl font-semibold">Ostatnio na kanale programistafrontend:</h2>
			<p>Tutaj znajdziesz ostatnie filmy, które miałem okazję nagrać.</p>
			<SectionWrapperRounded>
				<div className="gap-x-6 space-y-6 md:columns-2xs lg:columns-lg">
					{last4Movies.map((movie) => (
						<MovieCard key={movie.id} movie={movie} />
					))}
				</div>
			</SectionWrapperRounded>
			<Suspense fallback={<>{"Ładuję filmy..."}</>}>
				<div>
					<h2 className="pt-10 text-3xl font-semibold">Pozostałe filmy:</h2>
					<div className="grid grid-cols-1 gap-2 space-y-4 pt-10 md:grid-cols-2 md:space-y-0">
						{restMovies.map((movie) => (
							<Link
								key={movie.id}
								href={`https://www.youtube.com/watch?v=${movie.contentDetails.videoId}`}
								className="group block"
							>
								<div>
									<h2 className="text-xl group-hover:text-brand">{movie.snippet.title}</h2>
									<time
										dateTime={movie.snippet.publishedAt}
										className="mb-2 block text-xs text-gray-600"
									>
										{format(parseISO(movie.snippet.publishedAt), "dd MMMM yyyy", { locale: pl })}
									</time>
									<p className="line-clamp-3 whitespace-normal text-sm font-light md:mb-4">
										{movie.snippet.description}
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</Suspense>
			<NewsletterLanding />
		</SectionWrapper>
	);
}
