import Image from "next/image";
import Link from "next/link";
import bathIcon from "../../icons/bath.png";
import kitchenIcon from "../../icons/kkitchen.png";
import sofaIcon from "../../icons/sofa.png";
import wordrobeIcon from "../../icons/wordrobe.png";
import {
	blogItems,
	categoryCounts,
	consultationTypes,
	contactDetails,
	pricingItems,
	processSteps,
	projectItems,
	serviceItems,
	stats,
} from "./siteData";

export function HeroSplit({
	eyebrow,
	title,
	accent,
	description,
	primaryCta,
	secondaryCta,
	image = "/site/kitchen-dark.svg",
	overlay = true,
	fullBleed = false,
}: {
	eyebrow: string;
	title: string;
	accent: string;
	description: string;
	primaryCta: { href: string; label: string };
	secondaryCta?: { href: string; label: string };
	image?: string;
	overlay?: boolean;
	fullBleed?: boolean;
}) {
	if (fullBleed) {
		return (
			<section className="site-dark-strip overflow-hidden border-b border-white/10">
				<div className="site-shell-wide py-0">
					<div className="relative min-h-[560px] overflow-hidden border-b border-white/10 lg:min-h-[770px]">
						<Image
							src={image}
							alt={title}
							fill
							className="object-cover brightness-[0.78] sepia-[0.12] saturate-[0.86]"
							priority
						/>
						<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,22,19,0.84)_0%,rgba(26,22,19,0.78)_17%,rgba(26,22,19,0.46)_29%,rgba(26,22,19,0.12)_49%,rgba(26,22,19,0.02)_70%)]" />
						<div className="relative z-10 flex min-h-[560px] items-end lg:min-h-[770px]">
							<div className="mb-0 w-full max-w-[360px] bg-[rgba(17,14,12,0.52)] px-8 py-10 sm:max-w-[390px] lg:mb-0 lg:ml-0 lg:max-w-[432px] lg:px-12 lg:py-12">
								<p className="site-eyebrow">{eyebrow}</p>
								<h1 className="mt-5 font-spacial text-[3.35rem] leading-[0.9] text-white sm:text-[4rem] lg:text-[4.9rem]">
									{title}
									<span className="text-[color:var(--site-gold)]">
										{" "}
										{accent}
									</span>
								</h1>
								<div className="mt-7 h-px w-20 bg-[color:var(--site-gold)]" />
								<p className="mt-7 max-w-[360px] text-[15px] leading-10 text-white/92 drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
									{description}
								</p>
								<div className="mt-8 flex flex-wrap gap-4">
									<Link
										href={primaryCta.href}
										className="inline-flex min-w-[214px] items-center justify-center gap-3 border border-[color:var(--site-gold)] bg-[color:var(--site-gold)] px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:bg-[color:var(--site-gold-strong)]"
									>
										{primaryCta.label}
										<span aria-hidden="true">→</span>
									</Link>
									{secondaryCta ? (
										<Link
											href={secondaryCta.href}
											className="inline-flex min-w-[214px] items-center justify-center gap-3 border border-white/52 bg-transparent px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-white transition duration-300 hover:border-[color:var(--site-gold)] hover:text-[color:var(--site-gold)]"
										>
											{secondaryCta.label}
										</Link>
									) : null}
								</div>
							</div>
						</div>
						<div className="absolute right-7 top-1/2 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
							<span className="h-[14px] w-[14px] rounded-full bg-white" />
							<span className="h-[14px] w-[14px] rounded-full border-2 border-white/85" />
							<span className="h-[14px] w-[14px] rounded-full border-2 border-white/85" />
							<span className="h-[14px] w-[14px] rounded-full border-2 border-white/85" />
							<span className="h-[14px] w-[14px] rounded-full border-2 border-white/85" />
						</div>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="overflow-hidden site-dark-marble">
			<div className="site-shell grid items-stretch gap-8 py-0 lg:grid-cols-[0.92fr_1.08fr]">
				<div className="flex items-center py-16 lg:py-24">
					<div className="max-w-[620px]">
						<p className="site-eyebrow">{eyebrow}</p>
						<h1 className="site-title-light mt-8">
							{title}
							<span className="text-[color:var(--site-gold)]">
								{" "}
								{accent}
							</span>
						</h1>
						<div className="mt-8 h-px w-20 bg-[color:var(--site-gold)]" />
						<p className="mt-8 max-w-xl text-lg leading-9 text-white/92 drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)]">
							{description}
						</p>
						<div className="mt-10 flex flex-wrap gap-4">
							<Link
								href={primaryCta.href}
								className="site-button-primary"
							>
								{primaryCta.label}
							</Link>
							{secondaryCta ? (
								<Link
									href={secondaryCta.href}
									className="site-button-secondary"
								>
									{secondaryCta.label}
								</Link>
							) : null}
						</div>
					</div>
				</div>

				<div className="relative min-h-[420px] lg:min-h-[700px]">
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover"
						priority
					/>
					{overlay ? (
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10" />
					) : null}
				</div>
			</div>
		</section>
	);
}

export function FeatureStrip() {
	const items = [
		["Tailored Design", "Custom designs that reflect your vision and lifestyle."],
		["Design & Build", "Seamless from concept to completion."],
		["Premium Quality", "High-end materials and exceptional craftsmanship."],
		["Client Focused", "Personalized service and clear communication every step."],
	];

	return (
		<section className="site-dark-strip border-b border-white/10">
			<div className="site-shell grid gap-5 py-5 md:grid-cols-2 xl:grid-cols-4">
				{items.map(([title, description], index) => (
					<div
						key={title}
						className="flex items-start gap-4 border-white/10 text-white xl:border-r xl:pr-6 last:xl:border-r-0"
					>
						<div className="pt-1 text-[color:var(--site-gold)]">
							<FeatureIcon index={index} />
						</div>
						<div>
							<p className="text-[14px] font-semibold uppercase tracking-[0.08em]">
								{title}
							</p>
							<p className="mt-1 max-w-[190px] text-[11px] leading-5 text-white/70">
								{description}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

function FeatureIcon({ index }: { index: number }) {
	const commonProps = {
		className: "h-9 w-9",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round" as const,
		strokeLinejoin: "round" as const,
	};

	switch (index) {
		case 0:
			return (
				<svg {...commonProps}>
					<path d="M4 20 20 4" />
					<path d="M8 4h4v4" />
					<path d="M12 20H8v-4" />
					<path d="M20 12v4h-4" />
					<path d="M4 8V4h4" />
				</svg>
			);
		case 1:
			return (
				<svg {...commonProps}>
					<path d="M3 11.5 12 4l9 7.5" />
					<path d="M5 10.5V20h14v-9.5" />
					<path d="M9 20v-5h6v5" />
				</svg>
			);
		case 2:
			return (
				<svg {...commonProps}>
					<path d="m12 3 7.2 6.2L16.6 19H7.4L4.8 9.2 12 3Z" />
					<path d="M7.4 19 12 9.2 16.6 19" />
					<path d="M4.8 9.2h14.4" />
				</svg>
			);
		default:
			return (
				<svg {...commonProps}>
					<circle cx="12" cy="7.5" r="3.5" />
					<path d="M5 20c1.6-3.5 4.2-5.2 7-5.2S17.4 16.5 19 20" />
				</svg>
			);
	}
}

export function AboutPreview() {
	return (
		<section className="site-cream">
			<div className="site-shell grid gap-8 py-16 lg:grid-cols-[0.66fr_1.34fr] lg:items-start lg:py-24">
				<div className="max-w-[355px] pt-2">
					<p className="site-eyebrow">About us</p>
					<h2 className="mt-4 font-spacial text-[3.35rem] leading-[0.94] text-[color:var(--site-ink)] lg:text-[3.95rem]">
						Crafting Spaces
						<br />
						That Inspire
					</h2>
					<div className="mt-5 h-px w-16 bg-[color:var(--site-gold)]" />
					<p className="mt-5 max-w-[330px] text-[15px] leading-9 text-[color:var(--site-muted)]">
						We believe every space has the potential to be
						extraordinary. Our passion is to create beautiful,
						functional and timeless environments that enhance the
						way you live.
					</p>
					<Link
						href="/about"
						className="mt-8 inline-flex items-center gap-3 border border-[color:var(--site-line)] px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-[color:var(--site-ink)] transition hover:border-[color:var(--site-gold)] hover:text-[color:var(--site-gold)]"
					>
						Learn more about us
						<span aria-hidden="true">→</span>
					</Link>
				</div>

				<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
					{[
						serviceItems[0],
						serviceItems[1],
						serviceItems[2],
						serviceItems[3],
					].map((item) => (
						<ServiceCategoryCard
							key={item.title}
							title={item.title}
							description={item.description}
							image={item.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export function ServiceCategoryCard({
	title,
	description,
	image,
}: {
	title: string;
	description: string;
	image: string;
}) {
	const shortTitle = title
		.replace(" Design & Build", "s")
		.replace("Interior Design", "Interior Design")
		.replace("Custom Woodwork", "Custom Woodwork");

	const shortDescription = (() => {
		switch (title) {
			case "Kitchen Design & Build":
				return "Stylish. Functional. Timeless.";
			case "Bathroom Design & Build":
				return "Relaxing. Elegant. Personal.";
			case "Interior Design":
				return "Beautiful spaces designed around you.";
			default:
				return "Bespoke woodwork crafted to perfection.";
		}
	})();

	return (
		<div className="relative h-[350px] overflow-hidden bg-black xl:h-[390px]">
			<Image
				src={image}
				alt={title}
				fill
				className="object-cover"
			/>
			<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.1)_38%,rgba(0,0,0,0.62)_72%,rgba(0,0,0,0.94)_100%)]" />
			<div className="absolute inset-x-0 top-[118px] flex justify-center xl:top-[128px]">
				<div className="flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[color:rgba(197,157,92,0.48)] bg-[rgba(11,9,8,0.95)] text-[color:var(--site-gold)] shadow-[0_12px_28px_rgba(0,0,0,0.35)] xl:h-[96px] xl:w-[96px]">
					<CardIcon title={title} />
				</div>
			</div>
			<div className="absolute inset-x-0 top-[220px] px-4 text-center text-white xl:top-[236px] xl:px-5">
				<h3 className="px-2 text-[1.08rem] font-medium uppercase tracking-[0.035em] text-white xl:text-[1.22rem]">
					{shortTitle}
				</h3>
				<p className="mx-auto mt-2 max-w-[220px] text-[12px] leading-7 text-white/80 xl:max-w-[250px] xl:text-[13px]">
					{shortDescription}
				</p>
			</div>
			<div className="absolute inset-x-0 bottom-6 text-center text-[28px] leading-none text-[color:var(--site-gold)] xl:bottom-7">
				→
			</div>
		</div>
	);
}

function CardIcon({ title }: { title: string }) {
	const iconMap = {
		"Kitchen Design & Build": kitchenIcon,
		"Bathroom Design & Build": bathIcon,
		"Interior Design": sofaIcon,
		"Custom Woodwork": wordrobeIcon,
	} as const;

	const src = iconMap[title as keyof typeof iconMap];
	if (!src) {
		return null;
	}

	return (
		<div className="relative h-10 w-10 xl:h-12 xl:w-12">
			<Image
				src={src}
				alt={title}
				fill
				className="object-contain"
			/>
		</div>
	);
}

function _unusedLegacyCardIcon({ title }: { title: string }) {
	const commonProps = {
		viewBox: "0 0 24 24",
		className: "h-8 w-8",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.4",
		strokeLinecap: "round" as const,
		strokeLinejoin: "round" as const,
	};

	switch (title) {
		case "Kitchen Design & Build":
			return (
				<svg {...commonProps}>
					<rect x="4.5" y="6" width="15" height="12" rx="1.5" />
					<path d="M9.5 6v12" />
					<path d="M14.5 6v12" />
					<path d="M4.5 12h15" />
				</svg>
			);
		case "Bathroom Design & Build":
			return (
				<svg {...commonProps}>
					<path d="M5.5 12.5h13a0 0 0 0 1 0 0v.8a5.3 5.3 0 0 1-5.3 5.3h-2.4a5.3 5.3 0 0 1-5.3-5.3v-.8a0 0 0 0 1 0 0Z" />
					<path d="M7.8 12.4V9.6a4.2 4.2 0 0 1 8.4 0" />
					<path d="M15.2 7.4H17a1.9 1.9 0 0 1 0 3.8h-1" />
					<path d="M7.2 18.2 6.4 20" />
					<path d="M17.6 18.2 16.8 20" />
				</svg>
			);
		case "Interior Design":
			return (
				<svg {...commonProps}>
					<path d="M7.2 18.2v-5.3a2.2 2.2 0 0 1 2.2-2.2h5.2a2.2 2.2 0 0 1 2.2 2.2v5.3" />
					<path d="M8.2 18.2h7.6" />
					<path d="M8.7 10.7V8.4a3.3 3.3 0 1 1 6.6 0v2.3" />
					<path d="M7.2 14.4H5.8" />
					<path d="M18.2 14.4h-1.4" />
				</svg>
			);
		default:
			return (
				<svg {...commonProps}>
					<rect x="7" y="5" width="10" height="14" rx="1" />
					<path d="M10 5v14" />
					<path d="M14 5v14" />
					<path d="M7 9h10" opacity="0.5" />
					<path d="M7 15h10" opacity="0.5" />
				</svg>
			);
	}
}

export function ServicesGrid() {
	return (
		<section className="site-cream">
			<div className="site-shell py-16 lg:py-24">
				<div className="mx-auto max-w-[780px] text-center">
					<p className="site-eyebrow">What we do</p>
					<h2 className="mt-5 font-spacial text-6xl leading-[0.95]">
						Our Design & Build Services
					</h2>
					<div className="mx-auto mt-8 h-px w-24 bg-[color:var(--site-gold)]" />
				</div>

				<div className="mt-12 grid gap-6 lg:grid-cols-3">
					{serviceItems.map((item) => (
						<div
							key={item.title}
							className="site-panel overflow-hidden"
						>
							<div className="relative h-[240px]">
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover"
								/>
							</div>
							<div className="space-y-4 p-7">
								<h3 className="text-[1.95rem] font-medium uppercase tracking-[0.04em] text-[color:var(--site-ink)]">
									{item.title}
								</h3>
								<p className="text-base leading-8 text-[color:var(--site-muted)]">
									{item.description}
								</p>
								<Link
									href="/book-consultation"
									className="inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--site-gold)]"
								>
									Learn more
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export function ProcessStrip() {
	return (
		<section className="site-dark-strip overflow-hidden">
			<div className="site-shell grid gap-10 py-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
				<div className="text-white">
					<p className="site-eyebrow">Our process</p>
					<h2 className="mt-5 font-spacial text-5xl leading-[0.95]">
						A Seamless Experience
						<br />
						From Start to Finish
					</h2>
					<p className="mt-6 max-w-md text-base leading-8 text-white/72">
						Our proven design & build process ensures clarity,
						communication and exceptional results at every step.
					</p>
					<Link
						href="/book-consultation"
						className="site-button-secondary mt-8"
					>
						Learn more about our process
					</Link>
				</div>
				<div className="grid gap-6 md:grid-cols-5">
					{processSteps.map(([title, description], index) => (
						<div
							key={title}
							className="border-l border-white/10 pl-5 text-white"
						>
							<p className="font-spacial text-5xl text-[color:var(--site-gold)]">
								{String(index + 1).padStart(2, "0")}
							</p>
							<p className="mt-4 text-xl font-semibold uppercase tracking-[0.08em]">
								{title}
							</p>
							<p className="mt-3 text-sm leading-7 text-white/70">
								{description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export function ProjectsGrid() {
	return (
		<section className="site-cream">
			<div className="site-shell py-16 lg:py-24">
				<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<p className="site-eyebrow">All projects</p>
						<h2 className="mt-5 font-spacial text-6xl leading-[0.95]">
							Spaces We&apos;ve Designed.
							<br />
							Stories We&apos;ve Built.
						</h2>
					</div>
					<div className="flex flex-wrap gap-6 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--site-ink)]">
						{["All projects", "Kitchens", "Bathrooms", "Interiors", "Whole Home", "Custom Woodwork"].map((item) => (
							<span
								key={item}
								className={
									item === "All projects"
										? "text-[color:var(--site-gold)]"
										: "text-[color:var(--site-ink)]/80"
								}
							>
								{item}
							</span>
						))}
					</div>
				</div>
				<div className="mt-10 grid gap-6 lg:grid-cols-3">
					{projectItems.map((item) => (
						<div
							key={item.title}
							className="overflow-hidden bg-black"
						>
							<div className="relative h-[260px]">
								<Image
									src={item.image}
									alt={item.title}
									fill
									className="object-cover"
								/>
							</div>
							<div className="space-y-3 p-6 text-white">
								<p className="text-xs uppercase tracking-[0.24em] text-[color:var(--site-gold)]">
									{item.tag}
								</p>
								<h3 className="font-spacial text-[2.3rem] leading-[1.02]">
									{item.title}
								</h3>
								<p className="text-base leading-8 text-white/74">
									{item.description}
								</p>
								<Link
									href="/contact"
									className="inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--site-gold)]"
								>
									View project
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export function PricingGrid() {
	return (
		<section className="relative overflow-hidden site-dark-marble py-16 lg:py-24">
			<div className="site-shell">
				<div className="text-center text-white">
					<p className="site-eyebrow">Pricing & packages</p>
					<h2 className="mt-5 font-spacial text-6xl leading-[0.95]">
						Transparent Pricing.
						<br />
						Exceptional Value.
					</h2>
					<div className="mx-auto mt-8 h-px w-24 bg-[color:var(--site-gold)]" />
					<p className="mt-6 text-lg text-white/76">
						Custom solutions for every home and every vision.
					</p>
				</div>

				<div className="mt-12 grid gap-6 xl:grid-cols-4">
					{pricingItems.map((item) => (
						<div
							key={item.title}
							className={`rounded-[24px] border p-8 shadow-[0_20px_70px_rgba(0,0,0,0.22)] ${
								item.featured
									? "border-[color:var(--site-gold)] bg-[rgba(8,7,6,0.9)] text-white"
									: "border-[color:var(--site-line)] bg-[color:var(--site-surface)] text-[color:var(--site-ink)]"
							}`}
						>
							<h3 className="text-center text-[2rem] font-medium uppercase tracking-[0.05em]">
								{item.title}
							</h3>
							<p
								className={`mt-2 text-center text-base ${
									item.featured
										? "text-[color:var(--site-gold)]"
										: "text-[color:var(--site-gold)]"
								}`}
							>
								{item.subtitle}
							</p>
							<div className="mx-auto mt-6 h-px w-24 bg-[color:var(--site-line)]" />
							<p className="mt-7 text-center text-sm uppercase tracking-[0.16em]">
								{item.unit}
							</p>
							<p className="mt-2 text-center font-spacial text-6xl">
								{item.price}
							</p>
							<div className="mt-8 space-y-4">
								{item.points.map((point) => (
									<p
										key={point}
										className={`border-b pb-3 text-base leading-7 ${
											item.featured
												? "border-white/10 text-white/76"
												: "border-[color:var(--site-line)] text-[color:var(--site-muted)]"
										}`}
									>
										{point}
									</p>
								))}
							</div>
							<Link
								href="/book-consultation"
								className={`mt-8 inline-flex w-full items-center justify-center border px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] transition ${
									item.featured
										? "border-[color:var(--site-gold)] bg-transparent text-[color:var(--site-gold)] hover:bg-[color:var(--site-gold)] hover:text-[color:var(--site-dark)]"
										: "border-[color:var(--site-gold)] bg-[color:var(--site-gold)] text-[color:var(--site-dark)] hover:bg-[color:var(--site-gold-strong)]"
								}`}
							>
								{item.cta}
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export function StatsStrip() {
	return (
		<section className="site-dark-strip border-t border-white/10">
			<div className="site-shell grid gap-8 py-10 md:grid-cols-2 xl:grid-cols-4">
				{stats.map(([value, label]) => (
					<div
						key={value}
						className="border-white/10 text-white xl:border-r xl:pr-6 last:xl:border-r-0"
					>
						<p className="font-spacial text-6xl text-[color:var(--site-gold)]">
							{value}
						</p>
						<p className="mt-3 max-w-[240px] text-base leading-8 text-white/72">
							{label}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

export function BlogGrid() {
	return (
		<section className="site-cream">
			<div className="site-shell py-16 lg:py-24">
				<div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr]">
					<div>
						<p className="site-eyebrow">Latest articles</p>
						<div className="mt-8 grid gap-6 xl:grid-cols-2">
							{blogItems.map((item) => (
								<article
									key={item.title}
									className="site-panel overflow-hidden"
								>
									<div className="relative h-[240px]">
										<Image
											src={item.image}
											alt={item.title}
											fill
											className="object-cover"
										/>
										<div className="absolute left-4 top-4 bg-black px-3 py-2 text-xs uppercase tracking-[0.2em] text-white">
											{item.category}
										</div>
									</div>
									<div className="space-y-4 p-7">
										<p className="text-sm uppercase tracking-[0.12em] text-[color:var(--site-muted)]">
											{item.date} • {item.readTime}
										</p>
										<h3 className="font-spacial text-[2.4rem] leading-[1.02]">
											{item.title}
										</h3>
										<p className="text-base leading-8 text-[color:var(--site-muted)]">
											{item.description}
										</p>
										<Link
											href="/contact"
											className="inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--site-gold)]"
										>
											Read more
										</Link>
									</div>
								</article>
							))}
						</div>
					</div>

					<div className="space-y-6">
						<div className="site-panel p-8">
							<p className="site-eyebrow">Categories</p>
							<div className="mt-8 space-y-4">
								{categoryCounts.map(([label, count]) => (
									<div
										key={label}
										className="flex items-center justify-between border-b border-[color:var(--site-line)] pb-4"
									>
										<span className="text-lg">{label}</span>
										<span className="text-sm text-[color:var(--site-muted)]">
											({count})
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="overflow-hidden rounded-[24px] bg-black text-white">
							<div className="flex min-h-[340px] flex-col justify-between p-8">
								<div>
									<p className="site-eyebrow">Stay inspired</p>
									<h3 className="mt-4 font-spacial text-5xl">
										Newsletter
									</h3>
									<p className="mt-4 max-w-sm text-base leading-8 text-white/74">
										Subscribe for design ideas, projects and
										exclusive updates.
									</p>
								</div>
								<div className="space-y-4">
									<input
										type="email"
										placeholder="Your email address"
										className="h-14 w-full border border-white/10 bg-transparent px-4 text-sm outline-none placeholder:text-white/46"
									/>
									<button
										type="button"
										className="site-button-primary w-full"
									>
										Subscribe
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export function ContactCards() {
	return (
		<section className="site-cream">
			<div className="site-shell grid gap-8 py-14 md:grid-cols-2 xl:grid-cols-4">
				{contactDetails.map(([label, value, subvalue]) => (
					<div
						key={label}
						className="min-w-0 border-l border-[color:var(--site-line)] pl-6"
					>
						<p className="site-eyebrow">{label}</p>
						<p className="mt-5 break-words text-[1.9rem] font-semibold uppercase tracking-[0.03em] leading-tight xl:text-2xl">
							{value}
						</p>
						<p className="mt-3 text-base leading-8 text-[color:var(--site-muted)]">
							{subvalue}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

export function ContactShowroom() {
	return (
		<section className="overflow-hidden site-cream">
			<div className="site-shell grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
				<div className="grid md:grid-cols-[0.9fr_1.1fr]">
					<div className="relative min-h-[320px]">
						<Image
							src="/site/kitchen-light.svg"
							alt="Showroom"
							fill
							className="object-cover"
						/>
					</div>
					<div className="site-dark-strip flex items-center p-10 text-white">
						<div>
							<p className="site-eyebrow">Visit our showroom</p>
							<h2 className="mt-5 font-spacial text-5xl leading-[0.95]">
								See. Touch. Experience.
								<br />
								Design Comes to Life.
							</h2>
							<p className="mt-6 max-w-md text-base leading-8 text-white/72">
								Visit our showroom to explore premium materials,
								finishes and craftsmanship up close.
							</p>
							<Link
								href="/book-consultation"
								className="site-button-secondary mt-8"
							>
								Book a showroom visit
							</Link>
						</div>
					</div>
				</div>

				<div className="relative min-h-[420px]">
					<Image
						src="/site/map.svg"
						alt="Map"
						fill
						className="object-cover"
					/>
					<div className="absolute right-6 top-6 max-w-[320px] rounded-[24px] bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.08)]">
						<p className="site-eyebrow">Find us</p>
						<p className="mt-4 text-base leading-8 text-[color:var(--site-muted)]">
							Conveniently located in the heart of Tirana.
						</p>
						<Link
							href="https://www.google.com/maps/search/?api=1&query=Rruga+e+Kavaj%C3%ABs%2C+Tirana%2C+Albania"
							target="_blank"
							rel="noreferrer"
							className="mt-7 inline-flex border border-[color:var(--site-line)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--site-ink)] transition hover:border-[color:var(--site-gold)] hover:text-[color:var(--site-gold)]"
						>
							Get directions
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export function ConsultationSection() {
	return (
		<section className="site-cream">
			<div className="site-shell py-16 lg:py-24">
				<div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr]">
					<div className="site-panel p-8 md:p-10">
						<p className="site-eyebrow">Step 1 of 3</p>
						<h2 className="mt-5 font-spacial text-6xl leading-[0.95]">
							Tell Us About You
						</h2>
						<div className="mt-8 h-px w-20 bg-[color:var(--site-gold)]" />
						<p className="mt-6 max-w-lg text-base leading-8 text-[color:var(--site-muted)]">
							Fill out the form below and we&apos;ll get back to
							you to confirm your consultation.
						</p>
						<div className="mt-8 grid gap-4 md:grid-cols-2">
							<FormInput placeholder="First Name *" />
							<FormInput placeholder="Last Name *" />
							<FormInput placeholder="Email Address *" className="md:col-span-2" />
							<FormInput placeholder="Phone Number *" className="md:col-span-2" />
							<FormInput placeholder="Service of Interest *" className="md:col-span-2" />
							<FormInput placeholder="How did you hear about us?" className="md:col-span-2" />
							<textarea
								placeholder="Tell us about your project..."
								className="min-h-[140px] rounded-[18px] border border-[color:var(--site-line)] bg-white px-5 py-4 text-sm outline-none placeholder:text-[color:var(--site-muted)] md:col-span-2"
							/>
						</div>

						<p className="site-eyebrow mt-10">Step 2 of 3</p>
						<h3 className="mt-3 text-3xl font-medium">Choose Consultation Type</h3>
						<div className="mt-5 grid gap-4 md:grid-cols-3">
							{consultationTypes.map(([title, description, duration], index) => (
								<div
									key={title}
									className={`rounded-[20px] border p-5 ${
										index === 0
											? "border-[color:var(--site-gold)] shadow-[0_10px_34px_rgba(197,157,92,0.14)]"
											: "border-[color:var(--site-line)]"
									}`}
								>
									<p className="text-xl font-semibold">{title}</p>
									<p className="mt-3 text-sm leading-7 text-[color:var(--site-muted)]">
										{description}
									</p>
									<p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--site-gold)]">
										{duration}
									</p>
								</div>
							))}
						</div>

						<p className="site-eyebrow mt-10">Step 3 of 3</p>
						<h3 className="mt-3 text-3xl font-medium">Select Date & Time</h3>
						<div className="mt-5 grid gap-4 md:grid-cols-2">
							<FormInput placeholder="Select a date" />
							<FormInput placeholder="Select a time" />
						</div>

						<button
							type="button"
							className="site-button-primary mt-6 w-full"
						>
							Request consultation
						</button>
						<p className="mt-5 text-sm text-[color:var(--site-muted)]">
							Your information is secure and will never be shared.
						</p>
					</div>

					<div className="space-y-6">
						<div className="site-panel p-8 md:p-10">
							<p className="site-eyebrow">What to expect</p>
							<div className="mt-8 space-y-6">
								{[
									["Discuss your vision", "We’ll learn about your needs, style and goals for your space."],
									["Expert recommendations", "Get personalized ideas, layouts and design suggestions."],
									["Material & finish guidance", "Explore premium materials, finishes and custom options."],
									["Clear next steps", "Receive a tailored plan and transparent pricing guidance."],
								].map(([title, description]) => (
									<div
										key={title}
										className="flex gap-4 border-b border-[color:var(--site-line)] pb-5"
									>
										<div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-[color:var(--site-gold)]">
											<span className="font-spacial text-3xl">
												{title.charAt(0)}
											</span>
										</div>
										<div>
											<p className="text-xl font-semibold uppercase tracking-[0.05em]">
												{title}
											</p>
											<p className="mt-2 text-base leading-8 text-[color:var(--site-muted)]">
												{description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="overflow-hidden rounded-[24px] bg-black text-white">
							<div className="relative h-[280px]">
								<Image
									src="/site/bathroom.svg"
									alt="Visit our showroom"
									fill
									className="object-cover"
								/>
							</div>
							<div className="p-8">
								<p className="site-eyebrow">Visit our showroom</p>
								<p className="mt-4 max-w-sm text-base leading-8 text-white/74">
									Experience our quality, materials and craftsmanship up close.
								</p>
								<Link
									href="/contact"
									className="mt-6 inline-flex text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--site-gold)]"
								>
									Get directions
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function FormInput({
	placeholder,
	className = "",
}: {
	placeholder: string;
	className?: string;
}) {
	return (
		<input
			type="text"
			placeholder={placeholder}
			className={`h-14 rounded-[18px] border border-[color:var(--site-line)] bg-white px-5 text-sm outline-none placeholder:text-[color:var(--site-muted)] ${className}`}
		/>
	);
}
