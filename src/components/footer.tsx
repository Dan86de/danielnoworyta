export const Footer = () => {
	return (
		<div className="pt-8">
			<div className="relative bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)] py-32 lg:px-24 lg:py-32">
				<div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-foreground/30 to-transparent"></div>

				<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-background p-1.5">
					<div className="h-1.5 w-8 rounded-lg bg-foreground"></div>
				</div>
				<footer>
					<p>© 2023 Daniel Noworyta. Wszelkie prawa zastrzeżone.</p>
				</footer>
			</div>
		</div>
	);
};
