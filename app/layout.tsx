import "./globals.css";
import type { Metadata } from "next";
import { Allura, Cormorant_Garamond, Manrope } from "next/font/google";

const bodyFont = Manrope({
	subsets: ["latin"],
	variable: "--main-font",
});

const displayFont = Cormorant_Garamond({
	subsets: ["latin"],
	variable: "--spacial-font",
	weight: ["400", "500", "600", "700"],
});

const scriptFont = Allura({
	subsets: ["latin"],
	variable: "--art-type-font",
	weight: ["400"],
});

export const metadata: Metadata = {
	title: {
		default: "Kitchen & Bath Salon",
		template: "%s | Kitchen & Bath Salon",
	},
	description:
		"Luxury kitchen, bath, interior design and build studio with premium design consultation, full-home transformation and custom woodwork services.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${bodyFont.variable} ${displayFont.variable} ${scriptFont.variable} min-h-screen bg-[color:var(--site-bg)] font-main text-[color:var(--site-ink)] antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
