"use client";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import { Logo } from "@/components/logo";

const clamp = (number: number, min: number, max: number) => Math.min(Math.max(number, min), max);

function useBoundedScroll(bounds: number) {
	const { scrollY } = useScroll();
	const scrollYBounded = useMotionValue(0);
	const scrollYBoundedProgress = useTransform(scrollYBounded, [0, bounds], [0, 1]);

	useEffect(() => {
		return scrollY.on("change", (current) => {
			const previous = scrollY.getPrevious();
			const diff = current - previous;
			const newScrollYBounded = scrollYBounded.get() + diff;

			scrollYBounded.set(clamp(newScrollYBounded, 0, bounds));
		});
	}, [bounds, scrollY, scrollYBounded]);

	return { scrollYBounded, scrollYBoundedProgress };
}

export const Header = () => {
	const { scrollYBoundedProgress } = useBoundedScroll(200);

	return (
		<motion.header
			style={{ height: useTransform(scrollYBoundedProgress, [0, 1], [80, 50]) }}
			className="fixed inset-x-0 z-10 flex items-center shadow"
		>
			<div className="container flex items-center justify-between gap-4">
				<Link
					href={"/"}
					className="flex items-center gap-4 rounded-md p-2 outline-offset-2 transition-all hover:bg-neutral-200 focus:ring-primary focus-visible:outline-primary dark:hover:bg-neutral-800"
				>
					<motion.div
						style={{
							scale: useTransform(scrollYBoundedProgress, [0, 1], [1.5, 1]),
						}}
					>
						<Logo className="sca h-7 w-7" />
					</motion.div>
				</Link>
				<motion.nav
					style={{ opacity: useTransform(scrollYBoundedProgress, [0, 1], [1, 0]) }}
					className="hidden gap-4 font-normal text-foreground md:flex"
				>
					<Link href={"/"}>Home</Link>
					<Link href={"/"}>Blog</Link>
					<Link href={"/"}>Sklep</Link>
					<Link href={"/"}>O mnie</Link>
				</motion.nav>
				<ModeToggle />
			</div>
		</motion.header>
	);
};
