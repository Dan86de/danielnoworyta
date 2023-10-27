"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

import { type Link } from "@/components/navbar";

interface MobileMenuProps {
	showMenu: boolean;
	links: Link[];
	scrollYBoundedProgress: MotionValue<number>;
}

export const MobileMenu = ({ showMenu, links, scrollYBoundedProgress }: MobileMenuProps) => {
	const top = useTransform(scrollYBoundedProgress, [0, 1], [62, 46]) as unknown as number;
	return (
		<>
			{showMenu && (
				<motion.div
					style={{ top }}
					className="absolute inset-0 flex h-40 w-screen items-center justify-center bg-background"
				>
					<ul className="flex flex-col items-center space-y-4">
						{links.map((link, index) => (
							<li key={index}>
								<a
									// TODO: check types here?
									href={link.url.href ?? ""}
									className="inline-block text-base font-medium text-foreground/75 transition hover:text-zinc-300"
								>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</motion.div>
			)}
		</>
	);
};
