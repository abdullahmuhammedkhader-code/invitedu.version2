import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorks } from './components/HowItWorks';
import { SamplePreview } from './components/SamplePreview';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { TrustSection } from './components/TrustSection';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { StickyWhatsApp } from './components/StickyWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <SamplePreview />
      <Features />
      <Pricing />
      <Testimonials />
      <TrustSection />
      <FAQ />
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}