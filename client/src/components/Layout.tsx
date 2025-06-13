import { ReactNode } from "react";
import { useLocation } from "wouter";
import Navigation from "./Navigation";
import Footer from "./Footer";
import RecommendationWidget from "./RecommendationWidget";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  
  const getCurrentPage = () => {
    if (location === "/") return "home";
    if (location.startsWith("/services")) return "services";
    if (location.startsWith("/about")) return "about";
    if (location.startsWith("/team")) return "team";
    if (location.startsWith("/contact")) return "contact";
    if (location.startsWith("/knowledge-pool")) return "knowledge-pool";
    if (location.startsWith("/recommendations")) return "recommendations";
    return "other";
  };

  const shouldShowWidget = getCurrentPage() !== "recommendations";

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
      {shouldShowWidget && (
        <RecommendationWidget currentPage={getCurrentPage()} />
      )}
    </div>
  );
}
