import { type UrlObject } from "url";

import { motion, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";

export type Link = {
	title: string;
	url: UrlObject;
};

export const links: Link[] = [
	// {
	// 	title: "Home",
	// 	url: { pathname: "/" },
	// },
	// {
	// 	title: "YouTube",
	// 	url: { pathname: "/video" },
	// },
	// {
	// 	title: "Sklep",
	// 	url: { pathname: "/sklep" },
	// },
];

export const Navbar = ({
	scrollYBoundedProgress,
}: {
	scrollYBoundedProgress: MotionValue<number>;
}) => {
	return (
		<motion.nav
			style={{
				scale: useTransform(scrollYBoundedProgress, [0, 1], [1, 0.8]),
			}}
			className="relative hidden gap-4 text-xl font-normal lg:block"
		>
			<motion.div
				className="flex gap-2"
				style={{
					opacity: useTransform(scrollYBoundedProgress, [0, 1], [1, 1]),
				}}
			>
				{links.map((link) => (
					<Link
						key={link.title}
						href={link.url}
						className="rounded-md px-1 text-foreground/70 outline-none hover:text-foreground focus:ring focus:ring-[2px] focus:ring-brand dark:text-foreground/50 dark:hover:text-foreground"
					>
						{link.title}
					</Link>
				))}
			</motion.div>
		</motion.nav>
	);
};
