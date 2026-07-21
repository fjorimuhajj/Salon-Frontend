export type NavItem = {
	label: string;
	href: string;
};

export const navItems: NavItem[] = [
	{ label: "Home", href: "/" },
	{ label: "About us", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Portfolio", href: "/projects" },
	{ label: "Process", href: "/services" },
	{ label: "Testimonials", href: "/blogs" },
	{ label: "Contact", href: "/contact" },
];

export const serviceItems = [
	{
		title: "Kitchen Design & Build",
		description:
			"Custom kitchens designed for beauty, function and the way you live, from concept to installation.",
		image: "/site/kitchen-light.svg",
	},
	{
		title: "Bathroom Design & Build",
		description:
			"Elegant, spa-like bathrooms tailored to your style with premium finishes and expert installation.",
		image: "/site/bathroom.svg",
	},
	{
		title: "Interior Design",
		description:
			"Cohesive, sophisticated interiors that reflect your personality and elevate everyday living.",
		image: "/site/living-room.svg",
	},
	{
		title: "Custom Woodwork",
		description:
			"Bespoke cabinetry, closets, built-ins and architectural millwork crafted with precision.",
		image: "/site/woodwork.svg",
	},
	{
		title: "Full Home Transformations",
		description:
			"End-to-end renovations that reimagine your entire home with seamless execution.",
		image: "/site/exterior.svg",
	},
	{
		title: "Material Selection",
		description:
			"Curated selections of premium materials, fixtures and finishes that bring your vision to life.",
		image: "/site/materials.svg",
	},
];

export const projectItems = [
	{
		tag: "Modern luxury",
		title: "Warm Minimalist Kitchen",
		description:
			"A timeless kitchen that blends warmth, elegance and everyday functionality.",
		image: "/site/kitchen-light.svg",
	},
	{
		tag: "Spa retreat",
		title: "Serene Primary Bathroom",
		description:
			"A spa-inspired bathroom designed for relaxation and rejuvenation.",
		image: "/site/bathroom.svg",
	},
	{
		tag: "Modern comfort",
		title: "Open Concept Living Room",
		description:
			"A seamless blend of comfort and style with custom built-ins and refined finishes.",
		image: "/site/living-room.svg",
	},
	{
		tag: "Custom woodwork",
		title: "Bespoke Walk-In Closet",
		description:
			"Thoughtfully crafted storage with luxurious materials and fine detailing.",
		image: "/site/woodwork.svg",
	},
	{
		tag: "Whole home transformation",
		title: "Complete Home Renovation",
		description:
			"A full-scale transformation inside and out for a cohesive elevated experience.",
		image: "/site/exterior.svg",
	},
	{
		tag: "Contemporary elegance",
		title: "Black & Brass Kitchen",
		description:
			"A bold yet timeless kitchen with striking contrasts and premium finishes.",
		image: "/site/kitchen-dark.svg",
	},
];

export const pricingItems = [
	{
		title: "Design Consultation",
		subtitle: "The perfect first step.",
		price: "€150",
		unit: "One-time fee",
		featured: true,
		points: [
			"1-on-1 consultation up to 90 min",
			"Space assessment and ideas",
			"Preliminary layout suggestions",
			"Material and finish guidance",
			"Investment planning overview",
		],
		cta: "Book Consultation",
	},
	{
		title: "Kitchen Design & Build",
		subtitle: "Beautiful. Functional. Made for you.",
		price: "€12,000",
		unit: "Starting at",
		points: [
			"Custom kitchen design",
			"3D renderings and detailed plans",
			"Premium materials and finishes",
			"Professional project management",
			"Installation and final styling",
		],
		cta: "Get Started",
	},
	{
		title: "Bathroom Design & Build",
		subtitle: "Relaxing. Elegant. Timeless.",
		price: "€8,500",
		unit: "Starting at",
		points: [
			"Custom bathroom design",
			"3D renderings and detailed plans",
			"High-end materials and fixtures",
			"Expert installation",
			"Quality assurance and final styling",
		],
		cta: "Get Started",
	},
	{
		title: "Whole Home Transformation",
		subtitle: "One vision. One seamless experience.",
		price: "€45,000",
		unit: "Starting at",
		featured: true,
		points: [
			"Complete home renovation",
			"Interior design and space planning",
			"Custom kitchens, baths and more",
			"Premium materials and finishes",
			"Full project management",
		],
		cta: "Let's Build Together",
	},
];

export const blogItems = [
	{
		category: "Kitchens",
		date: "May 15, 2024",
		readTime: "5 min read",
		title: "Top 10 Kitchen Design Trends in 2024",
		description:
			"Discover the latest kitchen trends that combine beauty, functionality and timeless style.",
		image: "/site/kitchen-light.svg",
	},
	{
		category: "Bathrooms",
		date: "May 2, 2024",
		readTime: "4 min read",
		title: "Spa-Inspired Bathrooms: Your Daily Escape",
		description:
			"Create a relaxing retreat at home with these spa-inspired bathroom ideas and expert tips.",
		image: "/site/bathroom.svg",
	},
	{
		category: "Interior Design",
		date: "April 20, 2024",
		readTime: "6 min read",
		title: "The Art of Layering Textures in Interior Design",
		description:
			"Learn how to mix materials, colors and textures to create rich inviting spaces.",
		image: "/site/living-room.svg",
	},
	{
		category: "Custom Woodwork",
		date: "April 8, 2024",
		readTime: "5 min read",
		title: "Custom Woodwork: Details That Define Luxury",
		description:
			"From cabinetry to built-ins, discover how custom woodwork brings character and lasting value.",
		image: "/site/woodwork.svg",
	},
];

export const categoryCounts = [
	["Kitchens", 12],
	["Bathrooms", 10],
	["Interior Design", 14],
	["Whole Home", 9],
	["Custom Woodwork", 8],
	["Design Tips", 11],
	["Trends", 10],
] as const;

export const processSteps = [
	["Consult", "We listen, understand your needs and discuss your vision."],
	["Design", "We create a custom design tailored to your style and space."],
	["Plan", "We finalize details, materials and provide a clear plan."],
	["Build", "Our skilled team brings the design to life with precision."],
	["Deliver", "We complete every detail and ensure your satisfaction."],
] as const;

export const stats = [
	["150+", "Projects completed with excellence"],
	["10+", "Years of experience in design & build"],
	["100%", "Commitment to quality and craftsmanship"],
	["5-Star", "Client satisfaction and trust"],
] as const;

export const contactDetails = [
	["Phone", "+355 69 123 4567", "Mon - Fri: 9:00 AM - 6:00 PM"],
	["Email", "info@kitchenbathsalon.com", "We reply within 24h"],
	["Address", "Rruga e Kavajës, Nd. 123", "Tirana, Albania"],
	["Hours", "Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
] as const;

export const footerServices = [
	"Kitchen Design & Build",
	"Bathroom Design & Build",
	"Interior Design",
	"Custom Woodwork",
	"Whole Home Transformations",
];

export const consultationTypes = [
	["In-Person Consultation", "Meet with our team at our showroom.", "60 - 90 min"],
	["Virtual Consultation", "Video call with our design experts.", "60 min"],
	["Phone Consultation", "Speak with our team over the phone.", "30 min"],
] as const;
