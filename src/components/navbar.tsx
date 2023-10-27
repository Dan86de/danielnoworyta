import { type UrlObject } from "url";

import { motion, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";

export type Link = {
	title: string;
	url: UrlObject;
};

export const links: Link[] = [
	{
		title: "Home",
		url: { href: "/" },
	},
	{
		title: "Blog",
		url: { href: "/blog" },
	},
	{
		title: "Video",
		url: { href: "/video" },
	},
	{
		title: "About",
		url: { href: "/about" },
	},
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
				className="flex gap-4 "
				style={{
					opacity: useTransform(scrollYBoundedProgress, [0, 1], [1, 1]),
				}}
			>
				{links.map((link) => (
					<Link
						key={link.title}
						href={link.url}
						className="text-foreground/70 hover:text-foreground dark:text-foreground/50 dark:hover:text-foreground"
					>
						{link.title}
					</Link>
				))}
			</motion.div>
		</motion.nav>
	);
};
