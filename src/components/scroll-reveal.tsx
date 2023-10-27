"use client";

import {
	useEffect,
	useMemo,
	useRef,
	useState,
	type Component,
	type PropsWithChildren,
} from "react";
import useIntersection from "react-use/lib/useIntersection";
import useWindowScroll from "react-use/lib/useWindowScroll";
import useWindowSize from "react-use/lib/useWindowSize";

interface ScrollReveal {
	as?: Component | string;
	offset?: number;
	trigger?: string;
	once?: boolean;
	className?: string;
	props: PropsWithChildren;
	children?: React.FC;
}

export function ScrollReveal({
	className,
	once = false,
	trigger = "visible",
	offset = 0,
	children,
	...props
}: ScrollReveal) {
	const container = useRef<HTMLDivElement>(null);

	const { y: windowScroll } = useWindowScroll();
	const { height: windowHeight } = useWindowSize();

	const intersection = useIntersection(container, {
		threshold: 0,
	});

	const isIntersecting = useMemo(() => {
		if (container.current) {
			const y = container.current.getBoundingClientRect().top;
			const height = container.current.getBoundingClientRect().height;

			if (trigger == "top") {
				return intersection?.isIntersecting && y <= 0;
			} else if (trigger == "middle") {
				return y > windowHeight / 2 - height && y <= windowHeight / 2;
			}

			return intersection?.isIntersecting && y <= windowHeight - offset;
		}

		return false;
	}, [windowScroll]);

	const [isActive, setActive] = useState(false);

	useEffect(() => {
		if (once && isIntersecting) {
			setActive(true);
		} else if (!once) {
			setActive(!!isIntersecting);
		}
	}, [isIntersecting, once]);

	return (
		<div ref={container} className={className} {...props}>
			{children!(isActive)}
		</div>
	);
}
