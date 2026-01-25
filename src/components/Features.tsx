import { Wand2, Sparkles, Layout, Upload, Zap, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';

const features = [
  {
    icon: Wand2,
    title: 'AI Background Removal',
    description: 'Advanced AI instantly removes any background with pixel-perfect precision, preserving every detail of your vehicle.',
  },
  {
    icon: Sparkles,
    title: 'Professional Enhancement',
    description: 'Auto-enhance lighting, colors, and contrast to make your car photos look professionally shot.',
  },
  {
    icon: Layout,
    title: 'Premium Templates',
    description: 'Choose from our curated showroom templates or upload your own custom backgrounds.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process and download your enhanced photos in under 30 seconds. No waiting, no hassle.',
  },
  {
    icon: Upload,
    title: 'Bulk Processing',
    description: 'Upload and process multiple car photos at once. Perfect for dealerships and professionals.',
  },
  {
    icon: Users,
    title: 'Custom Templates',
    description: 'Upload your own branded templates and backgrounds for a personalized touch.',
  },
];

export function Features() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let lastTimestamp = 0;
    let isUserScrolling = false;
    let scrollTimeout: number;
    const scrollSpeed = 0.3; // pixels per frame (very slow)

    const autoScroll = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      
      if (delta > 16 && !isUserScrolling) { // ~60fps
        lastTimestamp = timestamp;
        
        if (scrollContainer) {
          scrollContainer.scrollLeft += scrollSpeed;
          
          // Reset to start when reaching the end
          if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 1) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    // Detect when user manually scrolls
    const handleScroll = () => {
      isUserScrolling = true;
      clearTimeout(scrollTimeout);
      
      // Resume auto-scroll 2 seconds after user stops scrolling
      scrollTimeout = window.setTimeout(() => {
        isUserScrolling = false;
        lastTimestamp = 0;
      }, 2000);
    };

    // Pause when user touches
    const handleTouchStart = () => {
      isUserScrolling = true;
      clearTimeout(scrollTimeout);
    };

    const handleTouchEnd = () => {
      clearTimeout(scrollTimeout);
      // Resume auto-scroll 2 seconds after touch ends
      scrollTimeout = window.setTimeout(() => {
        isUserScrolling = false;
        lastTimestamp = 0;
      }, 2000);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchend', handleTouchEnd);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(scrollTimeout);
      scrollContainer.removeEventListener('scroll', handleScroll);
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <div className="inline-block px-4 py-2 bg-[#00C9B7]/10 border border-[#00C9B7]/30 rounded-full mb-4 md:mb-6">
            <span className="text-[#00C9B7]">Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#1C1E30] mb-4 md:mb-6">
            Everything You Need for Perfect Car Photos
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Professional-grade tools powered by AI, designed for speed and quality.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div ref={scrollRef} className="md:hidden overflow-x-auto pb-4 -mx-6 px-6 scroll-smooth">
          <div className="flex gap-4" style={{ width: 'max-content' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex-shrink-0"
                  style={{ width: '280px' }}
                >
                  <div className="w-12 h-12 bg-[#00C9B7]/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#00C9B7]" />
                  </div>
                  <h3 className="text-lg text-[#1C1E30] mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet & Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#00C9B7]/30 group"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#00C9B7]/10 rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-[#00C9B7] transition-colors">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#00C9B7] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg md:text-xl text-[#1C1E30] mb-2 md:mb-3">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}