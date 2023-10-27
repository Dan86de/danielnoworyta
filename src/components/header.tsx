"use client";

import { motion, useTransform } from "framer-motion";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Logo } from "@/components/logo";
import { Navbar } from "@/components/navbar";
import { useBoundedScroll } from "@/lib/hooks/useBoundedScroll";

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
				<Navbar scrollYBoundedProgress={scrollYBoundedProgress} />
				<motion.div
					style={{
						scale: useTransform(scrollYBoundedProgress, [0, 1], [1, 0.8]),
					}}
				>
					<ModeToggle />
				</motion.div>
			</div>
			<motion.div
				className="absolute inset-0 -z-10 bg-background/30 backdrop-blur-lg [container-type:inline-size]"
				style={{
					opacity: useTransform(scrollYBoundedProgress, [0, 1], [1, 1]),
					height: useTransform(scrollYBoundedProgress, [0, 1], [80, 50]),
				}}
			></motion.div>
		</motion.header>
	);
};
