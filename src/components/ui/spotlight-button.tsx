import { cn } from "@/lib/utils";

interface SpotlightButtonProps {
	children: React.ReactElement;
	className?: string;
}

export const SpotlightButton = ({ children, className }: SpotlightButtonProps) => {
	return (
		<button
			className={cn(
				className,
				"group relative inline-flex items-center overflow-hidden rounded-full bg-zinc-950 px-8 py-3 transition dark:bg-zinc-800",
			)}
		>
			<div className="absolute inset-0 flex items-center [container-type:inline-size]">
				<div className="absolute h-[100cqw] w-[100cqw] animate-spin bg-[conic-gradient(from_0_at_50%_50%,rgba(242,81,24,0.8)_0deg,transparent_60deg,transparent_300deg,rgba(242,81,24,0.8)_360deg)] opacity-0 transition duration-300 [animation-duration:3s] group-hover:opacity-100 dark:bg-[conic-gradient(from_0_at_50%_50%,rgba(242,81,24,0.8)_0deg,transparent_60deg,transparent_300deg,rgba(242,81,24,0.8)_360deg)]"></div>
			</div>

			<div className="absolute inset-0.5 rounded-full bg-zinc-50 group-hover:bg-zinc-100 dark:bg-zinc-900 dark:group-hover:bg-zinc-900"></div>

			<div className="absolute bottom-0 left-1/2 h-1/3 w-4/5 -translate-x-1/2 rounded-full bg-zinc-400/0 opacity-50 blur-md transition-all duration-500 group-hover:h-2/3 group-hover:opacity-100 dark:bg-zinc-50/10"></div>
			{children}
		</button>
	);
};
