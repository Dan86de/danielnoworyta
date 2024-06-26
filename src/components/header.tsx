"use client";

import { motion, useTransform } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/components/logo";
import { MobileMenu } from "@/components/mobile-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { Navbar, links } from "@/components/navbar";
import { useBoundedScroll } from "@/lib/hooks/useBoundedScroll";

import { SectionWrapper } from "./section";
import { Button } from "./ui/button";

export const Header = () => {
	const { scrollYBoundedProgress } = useBoundedScroll(200);
	const [showMenu, setShowMenu] = useState(false);

	const closeMenu = () => setShowMenu(false);

	return (
		<motion.header
			style={{ height: useTransform(scrollYBoundedProgress, [0, 1], [80, 50]) }}
			className="fixed inset-x-0 z-10 flex w-screen flex-1 items-center shadow dark:shadow-zinc-800"
		>
			<SectionWrapper className="container relative flex items-center justify-between">
				<motion.div
					style={{
						scale: useTransform(scrollYBoundedProgress, [0, 1], [1.5, 1]),
					}}
				>
					<Link
						href={"/"}
						className="ring-text-primary flex h-7 w-7 items-center justify-center rounded-md bg-transparent outline-none ring-ring ring-offset-2 transition-all focus:ring-[1.5px]"
					>
						<Logo className="sca h-7 w-7" />
					</Link>
				</motion.div>
				<Navbar scrollYBoundedProgress={scrollYBoundedProgress} />
				<motion.div
					style={{
						scale: useTransform(scrollYBoundedProgress, [0, 1], [1, 0.8]),
					}}
				>
					<ModeToggle className="hidden lg:inline-flex" />
					<Button
						onClick={() => setShowMenu(!showMenu)}
						size={"icon"}
						className="relative ml-auto inline-flex lg:hidden"
					>
						<MenuIcon
							className={`h-6 w-6 transition duration-500 ${
								showMenu ? "rotate-180 opacity-0" : ""
							}`}
						/>
						<XIcon
							className={`absolute top-2 h-6 w-6 transition duration-500 ${
								showMenu ? "" : "-rotate-180 opacity-0"
							}`}
						/>
					</Button>
				</motion.div>
				<MobileMenu
					closeMenu={closeMenu}
					showMenu={showMenu}
					links={links}
					scrollYBoundedProgress={scrollYBoundedProgress}
				/>
			</SectionWrapper>
			<motion.div
				className="absolute inset-0 -z-10 bg-background [container-type:inline-size]"
				style={{
					opacity: useTransform(scrollYBoundedProgress, [0, 1], [1, 1]),
					height: useTransform(scrollYBoundedProgress, [0, 1], [80, 50]),
				}}
			></motion.div>
		</motion.header>
	);
};
