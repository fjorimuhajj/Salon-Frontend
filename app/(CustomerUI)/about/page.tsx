import { HeroSplit, StatsStrip } from "@/components/site/SiteSections";
import Image from "next/image";

export default function AboutPage() {
	return (
		<>
			<HeroSplit
				eyebrow="About us"
				title="Designing Spaces. Building Relationships."
				accent="Delivering Excellence."
				description="At Kitchen & Bath Salon, we believe your home should reflect your lifestyle, your taste and your dreams. From concept to completion, we manage every detail with precision, passion and a commitment to exceptional quality."
				primaryCta={{ href: "/services", label: "Our Services" }}
				image="/site/kitchen-dark.svg"
			/>
			<section className="site-cream">
				<div className="site-shell grid gap-10 py-16 lg:grid-cols-[0.74fr_0.96fr_0.8fr] lg:py-24">
					<div>
						<p className="site-eyebrow">Our story</p>
						<h2 className="mt-5 font-spacial text-6xl leading-[0.95]">
							Built on Passion.
							<br />
							Focused on You.
						</h2>
						<p className="mt-6 text-base leading-8 text-[color:var(--site-muted)]">
							Our journey started with a simple belief: great
							design has the power to transform everyday living.
							With years of experience and a dedicated team of
							designers, craftsmen and project managers, we bring
							vision, creativity and craftsmanship together to
							create spaces that are as functional as they are
							beautiful.
						</p>
						<p className="mt-6 font-art text-5xl text-[color:var(--site-gold)]">
							The Kitchen & Bath Salon Team
						</p>
					</div>
					<div className="relative min-h-[420px] overflow-hidden rounded-[28px]">
						<Image
							src="/site/living-room.svg"
							alt="Our story"
							fill
							className="object-cover"
						/>
					</div>
					<div className="site-panel p-8">
						<p className="site-eyebrow">Our approach</p>
						<div className="mt-6 space-y-6">
							{[
								[
									"Listen",
									"We start by understanding your needs, style and goals.",
									<svg
										key="listen"
										viewBox="0 0 24 24"
										className="h-8 w-8"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M14 17c3 0 5-2.4 5-5.4V10a5 5 0 0 0-10 0v1.6" />
										<path d="M9 17a3 3 0 0 0 3 3h1" />
										<path d="M5 12v3a3 3 0 0 0 3 3h2" />
										<path d="M15 8h4a2 2 0 0 1 2 2v4" />
									</svg>,
								],
								[
									"Design",
									"We create personalized designs that blend beauty and function.",
									<svg
										key="design"
										viewBox="0 0 24 24"
										className="h-8 w-8"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M3 21l3.8-1 10-10a2.2 2.2 0 0 0-3.1-3.1l-10 10L3 21Z" />
										<path d="M13 6l5 5" />
										<path d="M7 3v4" />
										<path d="M3 7h4" />
									</svg>,
								],
								[
									"Build",
									"Our expert team brings the design to life with precision.",
									<svg
										key="build"
										viewBox="0 0 24 24"
										className="h-8 w-8"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M3 10h18" />
										<path d="M5 10V8a7 7 0 0 1 14 0v2" />
										<path d="M6 10v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8" />
										<path d="M12 13v4" />
									</svg>,
								],
								[
									"Deliver",
									"We ensure every detail exceeds your expectations.",
									<svg
										key="deliver"
										viewBox="0 0 24 24"
										className="h-8 w-8"
										fill="none"
										stroke="currentColor"
										strokeWidth="1.7"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<circle cx="12" cy="12" r="9" />
										<path d="m8.5 12 2.3 2.3 4.7-4.8" />
									</svg>,
								],
							].map(([title, description, icon]) => (
								<div
									key={title}
									className="border-b border-[color:var(--site-line)] pb-5"
								>
									<div className="flex items-center gap-4 text-[color:var(--site-gold)]">
										<div className="shrink-0">{icon}</div>
										<p className="text-xl font-semibold uppercase tracking-[0.06em] text-[color:var(--site-ink)]">
											{title}
										</p>
									</div>
									<p className="mt-2 text-base leading-8 text-[color:var(--site-muted)]">
										{description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<StatsStrip />
		</>
	);
}
