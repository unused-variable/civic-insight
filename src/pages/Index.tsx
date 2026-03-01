import { HeroSection } from "@/components/home/HeroSection";
import { MetricsStrip } from "@/components/home/MetricsStrip";
import { TrendingSection } from "@/components/home/TrendingSection";
import { TrustSection } from "@/components/home/TrustSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <MetricsStrip />
      <TrendingSection />
      <TrustSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
