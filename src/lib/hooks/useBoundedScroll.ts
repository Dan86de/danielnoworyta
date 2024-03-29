import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

import { clamp } from "@/lib/utils";

export const useBoundedScroll = (bounds: number) => {
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
};
