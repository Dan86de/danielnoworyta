import { motion, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";

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
			className="relative gap-4 text-xl font-normal"
		>
			<motion.div
				className="flex gap-4 "
				style={{
					opacity: useTransform(scrollYBoundedProgress, [0, 1], [1, 1]),
				}}
			>
				<Link
					href={"/"}
					className="text-foreground/70 hover:text-foreground dark:text-foreground/50 dark:hover:text-foreground"
				>
					Home
				</Link>
				<Link
					href={"/blog"}
					className="text-foreground/70 hover:text-foreground dark:text-foreground/50 dark:hover:text-foreground"
				>
					Blog
				</Link>
				<Link
					href={"/video"}
					className="text-foreground/70 hover:text-foreground dark:text-foreground/50 dark:hover:text-foreground"
				>
					Video
				</Link>
				<Link
					href={"/about"}
					className="text-foreground/70 hover:text-foreground dark:text-foreground/50 dark:hover:text-foreground"
				>
					O mnie
				</Link>
			</motion.div>
		</motion.nav>
	);
};
