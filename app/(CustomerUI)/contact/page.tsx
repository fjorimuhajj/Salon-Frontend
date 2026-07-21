import {
	ContactCards,
	ContactShowroom,
	HeroSplit,
} from "@/components/site/SiteSections";

export default function ContactPage() {
	return (
		<>
			<HeroSplit
				eyebrow="Contact us"
				title="Let&apos;s Create"
				accent="Something Beautiful Together."
				description="Have a project in mind? We'd love to hear from you. Get in touch with our team and let's start transforming your space."
				primaryCta={{ href: "/book-consultation", label: "Send a message" }}
				image="/site/kitchen-dark.svg"
			/>
			<ContactCards />
			<ContactShowroom />
		</>
	);
}
