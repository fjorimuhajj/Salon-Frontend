import { BlogGrid, FeatureStrip, HeroSplit } from "@/components/site/SiteSections";

export default function BlogsPage() {
	return (
		<>
			<HeroSplit
				eyebrow="Our blog"
				title="Ideas. Inspiration."
				accent="Expertise."
				description="Tips, trends and timeless advice to help you create beautiful, functional spaces you'll love for years to come."
				primaryCta={{ href: "/book-consultation", label: "Book a consultation" }}
				image="/site/kitchen-dark.svg"
			/>
			<BlogGrid />
			<FeatureStrip />
		</>
	);
}
