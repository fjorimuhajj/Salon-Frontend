import {
	ConsultationSection,
} from "@/components/site/SiteSections";
import Image from "next/image";

export default function BookConsultationPage() {
	return (
		<>
			<section className="site-dark-marble overflow-hidden">
				<div className="site-shell grid gap-0 lg:grid-cols-[1fr_0.84fr]">
					<div className="relative min-h-[420px] lg:min-h-[760px]">
						<Image
							src="/site/kitchen-dark.svg"
							alt="Book a consultation"
							fill
							className="object-cover"
							priority
						/>
					</div>
					<div className="flex items-center py-16 text-white lg:px-10">
						<div className="max-w-[500px]">
							<p className="site-eyebrow">Book a consultation</p>
							<h1 className="mt-6 font-spacial text-7xl leading-[0.94]">
								Let&apos;s Design
								<span className="text-[color:var(--site-gold)]">
									{" "}
									Something Extraordinary
								</span>
								<br />
								Together.
							</h1>
							<div className="mt-8 h-px w-20 bg-[color:var(--site-gold)]" />
							<p className="mt-8 text-lg leading-9 text-white/76">
								Schedule a personalized consultation with our
								design experts and take the first step toward your
								dream space.
							</p>
							<div className="mt-10 grid gap-5 sm:grid-cols-3">
								{[
									"Personalized Consultation",
									"Expert Design Guidance",
									"Tailored to Your Lifestyle & Budget",
								].map((item) => (
									<div
										key={item}
										className="border-l border-[color:var(--site-line)] pl-4 text-sm leading-7 text-white/78"
									>
										{item}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>
			<ConsultationSection />
			<section className="site-dark-strip">
				<div className="site-shell grid gap-8 py-12 md:grid-cols-2">
					<div className="border-l border-[color:var(--site-line)] pl-6 text-white">
						<p className="site-eyebrow">Prefer to talk now?</p>
						<p className="mt-4 text-xl leading-8">
							Call us directly or send us an email.
						</p>
						<p className="mt-4 text-lg text-white/74">
							+355 69 123 4567 | info@kitchenbathsalon.com
						</p>
					</div>
					<div className="border-l border-[color:var(--site-line)] pl-6 text-white">
						<p className="site-eyebrow">We can&apos;t wait to meet you</p>
						<p className="mt-4 text-xl leading-8 text-white/74">
							Our team is ready to bring your dream space to life.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
