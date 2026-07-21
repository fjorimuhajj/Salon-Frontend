import Link from "next/link";
import { footerServices, navItems } from "./siteData";

export default function SiteFooter() {
	return (
		<footer className="site-dark-strip mt-0 border-t border-white/10 text-white">
			<div className="site-shell grid gap-8 py-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
				<div className="space-y-5">
					<div className="flex items-center gap-4">
						<div className="flex h-14 w-14 items-center justify-center border border-[color:var(--site-gold)] text-[2rem] font-spacial text-[color:var(--site-gold)]">
							KB
						</div>
						<div>
							<div className="font-spacial text-[1.9rem] leading-[0.84]">
								Kitchen & Bath
							</div>
							<div className="font-spacial text-[1.9rem] leading-[0.84]">
								Salon
							</div>
							<div className="mt-1 text-xs uppercase tracking-[0.28em] text-[color:var(--site-gold)]">
								Design & Build
							</div>
						</div>
					</div>

					<p className="max-w-md text-sm leading-7 text-white/72">
						We design and build beautiful functional spaces that
						reflect your lifestyle and stand the test of time.
					</p>

					<div className="flex items-center gap-6 text-[color:var(--site-gold)]">
						<SocialIcon label="Instagram">
							<svg
								viewBox="0 0 24 24"
								className="h-6 w-6"
								fill="none"
								stroke="currentColor"
								strokeWidth="1.9"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<rect
									x="3"
									y="3"
									width="18"
									height="18"
									rx="5"
								/>
								<circle
									cx="12"
									cy="12"
									r="4.2"
								/>
								<circle
									cx="17.4"
									cy="6.6"
									r="1"
									fill="currentColor"
									stroke="none"
								/>
							</svg>
						</SocialIcon>
						<SocialIcon label="Facebook">
							<svg
								viewBox="0 0 24 24"
								className="h-6 w-6"
								fill="currentColor"
							>
								<path d="M13.35 21V12.8h2.76l.42-3.2h-3.18V7.56c0-.93.25-1.56 1.6-1.56h1.7V3.14c-.3-.04-1.32-.14-2.5-.14-2.48 0-4.17 1.5-4.17 4.3V9.6H7.2v3.2h2.78V21h3.37Z" />
							</svg>
						</SocialIcon>
						<SocialIcon label="Pinterest">
							<svg
								viewBox="0 0 24 24"
								className="h-6 w-6"
								fill="currentColor"
							>
								<path d="M12.34 2C6.92 2 4 5.88 4 10.12c0 2.35.9 4.45 2.82 5.24.31.13.59.01.67-.34.06-.24.21-.83.28-1.08.09-.34.06-.45-.2-.76-.58-.69-.95-1.59-.95-2.86 0-3.69 2.76-7 7.18-7 3.91 0 6.05 2.39 6.05 5.58 0 4.2-1.86 7.74-4.62 7.74-1.52 0-2.67-1.26-2.3-2.8.44-1.84 1.3-3.83 1.3-5.16 0-1.19-.64-2.18-1.96-2.18-1.56 0-2.81 1.61-2.81 3.78 0 1.38.47 2.31.47 2.31l-1.88 7.96c-.56 2.38-.08 5.29-.04 5.58.02.17.24.21.34.08.14-.19 1.97-2.45 2.58-4.71.17-.64.98-3.95.98-3.95.48.92 1.89 1.72 3.39 1.72 4.46 0 7.48-4.06 7.48-9.49C22 5.83 18.11 2 12.34 2Z" />
							</svg>
						</SocialIcon>
						<SocialIcon label="LinkedIn">
							<svg
								viewBox="0 0 24 24"
								className="h-6 w-6"
								fill="currentColor"
							>
								<path d="M5.3 8.36a1.93 1.93 0 1 1 0-3.86 1.93 1.93 0 0 1 0 3.86ZM3.62 20.5h3.37V9.74H3.62V20.5ZM9.1 9.74h3.23v1.47h.05c.45-.85 1.55-1.75 3.19-1.75 3.41 0 4.04 2.24 4.04 5.16v5.88h-3.37v-5.21c0-1.24-.02-2.83-1.73-2.83-1.73 0-1.99 1.35-1.99 2.74v5.3H9.1V9.74Z" />
							</svg>
						</SocialIcon>
					</div>
				</div>

				<div>
					<h3 className="mb-4 text-sm uppercase tracking-[0.24em] text-[color:var(--site-gold)]">
						Quick links
					</h3>
					<div className="space-y-3 text-sm text-white/78">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className="block hover:text-[color:var(--site-gold)]"
							>
								{item.label}
							</Link>
						))}
					</div>
				</div>

				<div>
					<h3 className="mb-4 text-sm uppercase tracking-[0.24em] text-[color:var(--site-gold)]">
						Services
					</h3>
					<div className="space-y-3 text-sm text-white/78">
						{footerServices.map((item) => (
							<p key={item}>{item}</p>
						))}
					</div>
				</div>

				<div className="space-y-4">
					<h3 className="text-sm uppercase tracking-[0.24em] text-[color:var(--site-gold)]">
						Newsletter
					</h3>
					<p className="text-sm leading-7 text-white/72">
						Stay inspired with design tips, trends and new
						project stories.
					</p>
					<div className="overflow-hidden rounded-sm border border-[color:var(--site-line)]">
						<div className="flex items-center">
							<input
								type="email"
								placeholder="Your email address"
								className="h-14 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/48"
							/>
							<button
								type="button"
								className="h-14 bg-[color:var(--site-gold)] px-5 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--site-dark)]"
							>
								Go
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="border-t border-white/10">
				<div className="site-shell flex flex-col gap-3 py-5 text-sm text-white/58 md:flex-row md:items-center md:justify-between">
					<p>© 2026 Kitchen & Bath Salon. All rights reserved.</p>
					<div className="flex gap-6">
						<Link href="/privacy-policy">Privacy Policy</Link>
						<Link href="/terms-of-service">Terms of Service</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}

function SocialIcon({
	children,
	label,
}: {
	children: React.ReactNode;
	label: string;
}) {
	return (
		<Link
			href="/contact"
			aria-label={label}
			className="transition hover:text-white"
		>
			{children}
		</Link>
	);
}
