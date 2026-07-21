import Link from "next/link";

export default function NotFound() {
	return (
		<section className="site-dark-marble">
			<div className="site-shell flex min-h-[70vh] flex-col items-center justify-center py-20 text-center text-white">
				<p className="site-eyebrow">404</p>
				<h1 className="mt-6 font-spacial text-7xl leading-none">
					Page not found
				</h1>
				<p className="mt-6 max-w-xl text-lg leading-9 text-white/72">
					The page you&apos;re looking for doesn&apos;t exist or has been
					moved. Return to the main showroom and continue browsing.
				</p>
				<Link
					href="/"
					className="site-button-primary mt-10"
				>
					Go to home
				</Link>
			</div>
		</section>
	);
}
