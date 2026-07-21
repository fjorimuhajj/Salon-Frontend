"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "./siteData";

const Logo = () => (
	<Link
		href="/"
		className="flex items-center gap-3"
	>
		<div className="flex h-[52px] w-[52px] items-center justify-center border border-[color:var(--site-gold)] text-[1.9rem] font-spacial text-[color:var(--site-gold)]">
			KB
		</div>
		<div>
			<div className="font-spacial text-[1.55rem] leading-[0.8] text-[color:var(--site-ink)]">
				Kitchen & Bath
			</div>
			<div className="font-spacial text-[1.55rem] leading-[0.8] text-[color:var(--site-ink)]">
				Salon
			</div>
			<div className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[color:var(--site-gold)]">
				Design & Build
			</div>
		</div>
	</Link>
);

export default function SiteHeader() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 border-b border-[color:var(--site-line)] bg-[rgba(255,253,250,0.98)] backdrop-blur">
			<div className="site-shell-wide flex min-h-[78px] items-center justify-between gap-6 px-6 py-3 lg:px-12 xl:px-14">
				<Logo />

				<button
					type="button"
					className="flex h-11 w-11 items-center justify-center border border-[color:var(--site-line)] text-[color:var(--site-ink)] lg:hidden"
					onClick={() => setOpen((value) => !value)}
					aria-label="Toggle menu"
				>
					<div className="flex flex-col gap-1.5">
						<span className="block h-0.5 w-5 bg-[color:var(--site-ink)]" />
						<span className="block h-0.5 w-5 bg-[color:var(--site-ink)]" />
						<span className="block h-0.5 w-5 bg-[color:var(--site-ink)]" />
					</div>
				</button>

				<nav className="hidden items-center gap-10 lg:flex">
					{navItems.map((item) => {
						const active =
							item.href === "/"
								? pathname === "/"
								: pathname?.startsWith(item.href);

						return (
							<Link
								key={item.href}
								href={item.href}
								className={`border-b pb-[10px] text-[12px] font-semibold uppercase tracking-[0.08em] transition ${
									active
										? "border-[color:var(--site-gold)] text-[color:var(--site-gold)]"
										: "border-transparent text-[color:var(--site-ink)] hover:text-[color:var(--site-gold)]"
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

				<Link
					href="/book-consultation"
					className="hidden border border-[color:var(--site-gold)] bg-[color:var(--site-gold)] px-8 py-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-[color:var(--site-gold-strong)] lg:inline-flex"
				>
					Book a consultation
				</Link>
			</div>

			{open ? (
				<div className="border-t border-[color:var(--site-line)] bg-[rgba(255,253,250,0.99)] lg:hidden">
					<div className="site-shell flex flex-col gap-4 py-6">
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								onClick={() => setOpen(false)}
								className={`text-base ${
									pathname === item.href || pathname?.startsWith(item.href)
										? "text-[color:var(--site-gold)]"
										: "text-[color:var(--site-ink)]"
								}`}
							>
								{item.label}
							</Link>
						))}
						<Link
							href="/book-consultation"
							onClick={() => setOpen(false)}
							className="site-button-primary mt-2 w-full"
						>
							Book a consultation
						</Link>
					</div>
				</div>
			) : null}
		</header>
	);
}
