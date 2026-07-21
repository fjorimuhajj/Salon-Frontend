import { HeroSplit, PricingGrid } from "@/components/site/SiteSections";
import Link from "next/link";

export default function PricingPage() {
	return (
		<>
			<HeroSplit
				eyebrow="Pricing & packages"
				title="Transparent Pricing."
				accent="Exceptional Value."
				description="Custom solutions for every home and every vision, with clear guidance and premium execution from start to finish."
				primaryCta={{ href: "/book-consultation", label: "Book a consultation" }}
				image="/site/kitchen-dark.svg"
			/>
			<PricingGrid />
			<section className="site-cream">
				<div className="site-shell flex flex-col gap-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-20">
					<div>
						<p className="site-eyebrow">Ready to transform your space?</p>
						<h2 className="mt-4 font-spacial text-6xl leading-[0.95]">
							Let&apos;s Create Something Beautiful Together.
						</h2>
						<p className="mt-4 text-base leading-8 text-[color:var(--site-muted)]">
							Schedule a consultation and let&apos;s bring your dream
							home to life.
						</p>
					</div>
					<Link
						href="/book-consultation"
						className="site-button-primary"
					>
						Book a consultation
					</Link>
				</div>
			</section>
		</>
	);
}
