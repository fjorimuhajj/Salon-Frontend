import Link from "next/link";

const sections = [
	{
		title: "Information We Collect",
		text: "When you contact us, request a consultation or subscribe to updates, we may collect your name, email address, phone number, project details and any other information you choose to share.",
	},
	{
		title: "How We Use Your Information",
		text: "We use your information to respond to inquiries, schedule consultations, prepare project recommendations, improve our services and communicate important updates about your request.",
	},
	{
		title: "Sharing Of Information",
		text: "We do not sell your personal information. We may share limited information with trusted service providers only when needed to operate the website, manage communications or support your project request.",
	},
	{
		title: "Data Security",
		text: "We take reasonable technical and organizational steps to protect your information from unauthorized access, misuse or disclosure. No online system can be guaranteed fully secure, but we work to keep your data protected.",
	},
	{
		title: "Your Choices",
		text: "You may request access, correction or deletion of your personal information by contacting us directly. You may also unsubscribe from promotional communications at any time.",
	},
];

export default function PrivacyPolicyPage() {
	return (
		<section className="site-cream">
			<div className="site-shell py-16 lg:py-24">
				<div className="site-panel mx-auto max-w-[980px] p-8 md:p-12">
					<p className="site-eyebrow">Legal</p>
					<h1 className="mt-5 font-spacial text-6xl leading-[0.95]">
						Privacy Policy
					</h1>
					<p className="mt-6 text-base leading-8 text-[color:var(--site-muted)]">
						This Privacy Policy explains how Kitchen & Bath
						Salon collects, uses and protects information shared
						through this website and our consultation forms.
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
							href="/terms-of-service"
							className="site-button-secondary !border-[color:var(--site-line)] !text-[color:var(--site-ink)] hover:!border-[color:var(--site-gold)] hover:!text-[color:var(--site-gold)]"
						>
							View terms
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
