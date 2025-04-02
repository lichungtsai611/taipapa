import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import NewsSection from './components/NewsSection';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FeatureSection />
      <NewsSection />
      <CTASection />
    </div>
  );
}
