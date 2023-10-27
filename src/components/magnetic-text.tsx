/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";

/* eslint-disable @typescript-eslint/no-unsafe-call */
import { useSpring, type MotionValue } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState, type PropsWithChildren } from "react";
import useMouse from "react-use/lib/useMouse";
import { cn } from "@/lib/utils";

interface GroupProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	children: any;
	className: string;
	body: string;
	props: PropsWithChildren;
}

function Group({ children, className, body, ...props }: GroupProps) {
	const tokens = useMemo(() => {
		return body.split("");
	}, [body]);

	return (
		<div className={className} {...props}>
			{children(tokens)}
		</div>
	);
}

export interface TokenProps {
	min?: number;
	max?: number;
	threshold?: number;
	body: string;
	className: string;
	props: PropsWithChildren;
}

export function Token({
	min = 100,
	max = 100,
	threshold = 300,
	body,
	className,
	...props
}: TokenProps) {
	const container = useRef<HTMLDivElement>(null);

	const { elX, elY, elW, elH } = useMouse(container);

	const [ready, setReady] = useState(false);
	useEffect(() => setReady(true), [elX]);

	const [previous, setPrevious] = useState(min);
	const [transitioning, setTransitioning] = useState(false);

	const fontWeight: MotionValue<number> = useSpring(min, { duration: 2000 });

	const animate = useCallback(
		(value: number) => {
			setTransitioning(true);

			fontWeight.set(value);

			setTimeout(() => setTransitioning(false), 100);
		},
		[fontWeight],
	);

	useEffect(() => {
		let targetValue = min;

		if (!ready || !container.current || elY < 0 || elY > elH) {
			targetValue = min;
		} else {
			const lambda = Math.abs(elX - elW / 2);

			const value = (threshold - lambda) / threshold;

			targetValue = Math.round(Math.min(Math.max(value * max, min), max));
		}

		if (previous == min && targetValue > min) {
			animate(targetValue);
		} else if (previous > min && targetValue == min) {
			animate(targetValue);
		} else if (!transitioning) {
			fontWeight.jump(targetValue);
		}

		setPrevious(targetValue);
	}, [
		elX,
		elY,
		elW,
		elH,
		min,
		ready,
		previous,
		transitioning,
		threshold,
		max,
		animate,
		fontWeight,
	]);

	return (
		<div
			ref={container}
			className={cn(className)}
			style={{ fontWeight: fontWeight.get() ?? 100 }}
			{...props}
		>
			{body}
		</div>
	);
}

export const MagneticText = Object.assign(Group, { Token });
