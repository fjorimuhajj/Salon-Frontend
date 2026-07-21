import {
	AboutPreview,
	FeatureStrip,
	HeroSplit,
	ProcessStrip,
	ServicesGrid,
} from "@/components/site/SiteSections";

export default function Home() {
	return (
		<>
			<HeroSplit
				eyebrow="Design & Build"
				title="Transforming Spaces."
				accent="Elevating Everyday Living."
				description="We specialize in full home transformations, luxury kitchens, elegant bathrooms, interior design and custom woodwork tailored to your lifestyle."
				primaryCta={{ href: "/services", label: "Our Services" }}
				secondaryCta={{ href: "/projects", label: "View Portfolio" }}
				image="/site/home-hero.jpg"
				fullBleed
			/>
			<FeatureStrip />
			<AboutPreview />
			<ServicesGrid />
			<ProcessStrip />
		</>
	);
}
