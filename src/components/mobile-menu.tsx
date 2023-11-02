import { motion, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";

import { type Link as ILink } from "@/components/navbar";

interface MobileMenuProps {
	showMenu: boolean;
	links: ILink[];
	scrollYBoundedProgress: MotionValue<number>;
	closeMenu: () => void;
}

export const MobileMenu = ({
	showMenu,
	links,
	scrollYBoundedProgress,
	closeMenu,
}: MobileMenuProps) => {
	const top = useTransform(scrollYBoundedProgress, [0, 1], [60, 45]);

	return (
		<>
			{showMenu && (
				<motion.div
					style={{ top }}
					className={`absolute inset-0 bottom-0 left-0 right-0 h-screen w-screen items-center justify-center overflow-hidden bg-background shadow-md xl:hidden`}
				>
					<ul className="flex w-screen flex-col items-center space-y-2 divide-y">
						{links.map((link, index) => (
							<li key={index}>
								<Link
									onClick={closeMenu}
									href={link.url}
									className="block w-screen px-8 pt-2 text-xl font-medium text-foreground/75 transition hover:text-zinc-300"
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
					{/* <div className="flex w-screen items-center justify-end pr-8 pt-2">
						<ModeToggle />
					</div> */}
				</motion.div>
			)}
		</>
	);
};
