import { HeroSplit, ProcessStrip, ServicesGrid } from "@/components/site/SiteSections";

export default function ServicesPage() {
	return (
		<>
			<HeroSplit
				eyebrow="Our services"
				title="Complete Solutions."
				accent="Tailored for You."
				description="From inspired design to flawless execution, we provide end-to-end services to transform your home with quality, precision and timeless style."
				primaryCta={{ href: "/book-consultation", label: "Book a Consultation" }}
				image="/site/kitchen-dark.svg"
			/>
			<ServicesGrid />
			<ProcessStrip />
		</>
	);
}
