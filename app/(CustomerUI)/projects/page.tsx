import { FeatureStrip, HeroSplit, ProjectsGrid } from "@/components/site/SiteSections";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
	return (
		<>
			<HeroSplit
				eyebrow="Our projects"
				title="Spaces We&apos;ve Designed."
				accent="Stories We&apos;ve Built."
				description="Explore a collection of our latest kitchen, bathroom and whole-home transformations. Every project is a reflection of our passion for design, craftsmanship and attention to detail."
				primaryCta={{ href: "/contact", label: "Start Your Project" }}
				image="/site/kitchen-dark.svg"
			/>
			<ProjectsGrid />
			<section className="site-dark-strip overflow-hidden">
				<div className="site-shell grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
					<div className="flex items-center py-16 text-white">
						<div className="max-w-[520px]">
							<p className="site-eyebrow">Ready to start your project?</p>
							<h2 className="mt-5 font-spacial text-6xl leading-[0.95]">
								Let&apos;s Design Something
								<span className="text-[color:var(--site-gold)]"> Extraordinary</span>
								<br />
								Together.
							</h2>
							<p className="mt-6 text-base leading-8 text-white/74">
								From concept to completion, we&apos;re here to bring
								your vision to life.
							</p>
							<Link
								href="/book-consultation"
								className="site-button-secondary mt-8"
							>
								Book a consultation
							</Link>
						</div>
					</div>
					<div className="relative min-h-[420px]">
						<Image
							src="/site/materials.svg"
							alt="Materials"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</section>
			<FeatureStrip />
		</>
	);
}
