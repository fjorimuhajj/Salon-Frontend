import Link from "next/link";

const sections = [
	{
		title: "Website Use",
		text: "This website is provided for informational purposes about Kitchen & Bath Salon, our services and our consultation process. You agree to use the site lawfully and not interfere with its normal operation.",
	},
	{
		title: "Project Information",
		text: "Any pricing, timelines, package examples or service descriptions shown on the site are general informational guidance only. Final project scope, cost and delivery schedule are confirmed separately in written proposals or agreements.",
	},
	{
		title: "Consultation Requests",
		text: "Submitting a contact form or consultation request does not create a binding service agreement. We may follow up to confirm availability, project fit and next steps before any work begins.",
	},
	{
		title: "Intellectual Property",
		text: "All website content, branding, layouts, imagery, copy and design elements are owned by or used with permission by Kitchen & Bath Salon and may not be copied or reused without permission.",
	},
	{
		title: "Limitation Of Liability",
		text: "We aim to keep the information on this website accurate and up to date, but we do not guarantee that all content will always be complete or error-free. Use of the website is at your own discretion.",
	},
];

export default function TermsOfServicePage() {
	return (
		<section className="site-cream">
			<div className="site-shell py-16 lg:py-24">
				<div className="site-panel mx-auto max-w-[980px] p-8 md:p-12">
					<p className="site-eyebrow">Legal</p>
					<h1 className="mt-5 font-spacial text-6xl leading-[0.95]">
						Terms of Service
					</h1>
					<p className="mt-6 text-base leading-8 text-[color:var(--site-muted)]">
						These Terms of Service govern your use of the Kitchen
						& Bath Salon website and the information provided
						through our online forms and public pages.
					</p>

					<div className="mt-10 space-y-8">
						{sections.map((section) => (
							<div
								key={section.title}
								className="border-b border-[color:var(--site-line)] pb-7"
							>
								<h2 className="text-2xl font-semibold text-[color:var(--site-ink)]">
									{section.title}
								</h2>
								<p className="mt-3 text-base leading-8 text-[color:var(--site-muted)]">
									{section.text}
								</p>
							</div>
						))}
					</div>

					<div className="mt-10 flex flex-wrap gap-4">
						<Link
							href="/contact"
							className="site-button-primary"
						>
							Contact us
						</Link>
						<Link
							href="/privacy-policy"
							className="site-button-secondary !border-[color:var(--site-line)] !text-[color:var(--site-ink)] hover:!border-[color:var(--site-gold)] hover:!text-[color:var(--site-gold)]"
						>
							View privacy policy
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
