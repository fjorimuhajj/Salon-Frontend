import SiteFooter from "@/components/site/SiteFooter";
import SiteHeader from "@/components/site/SiteHeader";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-screen bg-[color:var(--site-bg)]">
			<SiteHeader />
			<main>{children}</main>
			<SiteFooter />
		</div>
	);
};

export default MainLayout;
