import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Templates } from './components/Templates';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Templates />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
}