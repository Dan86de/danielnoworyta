"use client";

import clsx from "clsx";
import { useRef, type CSSProperties, type ReactElement } from "react";
import { useMouse } from "react-use";

interface SpotlightCardProps {
	from?: string;
	via?: string | null;
	to?: string;
	size?: number;
	mode?: "before" | "after";
	children: ReactElement | ReactElement[];
	className?: string;
}

interface CustomCSSProperties extends CSSProperties {
	"--x": string;
	"--y": string;
	"--spotlight-color-stops": string;
	"--spotlight-size": string;
}

export function SpotlightCard({
	from = "rgba(255,255,255,0.8)",
	via = null,
	to = "transparent",
	size = 350,
	mode = "before",
	children,
	className,
}: SpotlightCardProps) {
	const container = useRef(null);

	const { elX, elY } = useMouse(container);

	const spotlightColorStops = [from, via, to].filter((value) => !!value).join(",");

	console.log({ spotlightColorStops });

	const classes =
		mode === "before"
			? `before:absolute before:inset-0 before:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]`
			: `after:absolute after:inset-0 after:bg-[radial-gradient(var(--spotlight-size)_circle_at_var(--x)_var(--y),var(--spotlight-color-stops))]`;

	const style: CustomCSSProperties = {
		"--x": `${elX}px`,
		"--y": `${elY}px`,
		"--spotlight-color-stops": spotlightColorStops,
		"--spotlight-size": `${size}px`,
	};
	return (
		<div
			ref={container}
			className={clsx("relative transform-gpu overflow-hidden", classes, className)}
			style={style}
		>
			{children}
		</div>
	);
}
