import { cn } from "@/lib/utils";

interface SectionWrapper {
	children: JSX.Element;
	className: string;
}

export const SectionWrapper = ({ children, className }: SectionWrapper) => {
	return (
		<div className={cn("relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
			{children}
		</div>
	);
};
