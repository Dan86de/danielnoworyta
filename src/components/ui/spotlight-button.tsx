import { cn } from "@/lib/utils";

interface SpotlightButtonProps {
	children: React.ReactElement;
	className?: string;
}

export const SpotlightButton = ({ children, className }: SpotlightButtonProps) => {
	return (
		<div
			className={cn(
				className,
				"group relative inline-flex items-center overflow-hidden rounded-full bg-brand px-6 py-3 outline-none ring-brand ring-offset-1 transition focus:ring-1 dark:bg-zinc-800 md:px-8 md:py-4",
			)}
		>
			<div className="absolute inset-0 flex items-center rounded-r-full [container-type:inline-size]">
				<div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(9,9,11,1)_0deg,transparent_60deg,transparent_300deg,rgba(9,9,11,1)_360deg)] opacity-0 transition duration-300 [animation-duration:3s] group-hover:opacity-100 dark:bg-[conic-gradient(from_0_at_50%_50%,rgba(242,81,24,0.8)_0deg,transparent_60deg,transparent_300deg,rgba(242,81,24,0.8)_360deg)]"></div>
			</div>

			<div className="absolute inset-0.5 rounded-full bg-zinc-50 dark:bg-zinc-950/95"></div>

			<div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-brand/10 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100 dark:bg-zinc-50/10"></div>
			{children}
		</div>
	);
};
