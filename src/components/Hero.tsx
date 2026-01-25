import logoFull from 'figma:asset/cbdafa53e43ac8455903b8649f601e8cf566dce0.png';
import beforeImage from 'figma:asset/ea86172ee10ebac6a40ff14064fb38666d33c166.png';
import afterImage from 'figma:asset/ff4848c147d351a7db15134aec45e34d0a86e414.png';
import appStoreImage from 'figma:asset/7f84e25782c9d404385d341e8e0fb4be2a70341c.png';
import googlePlayImage from 'figma:asset/fb8a65b0ea6ea51535be8d11f0dcd91cce56be00.png';
import { BeforeAfterSlider } from './BeforeAfterSlider';

export function Hero() {
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="hero" className="relative overflow-hidden bg-[#1C1E30] text-white">
      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <img src={logoFull} alt="Lunzo" className="h-10 lg:h-12" />
          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleScrollToSection('transform-car-photos')}
              className="px-6 py-2.5 bg-[#00C9B7] text-[#1C1E30] rounded-lg hover:bg-[#00B4A5] transition-all hover:shadow-lg hover:shadow-[#00C9B7]/20"
            >
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-[#00C9B7]/10 border border-[#00C9B7]/30 rounded-full">
              <span className="text-[#00C9B7]">AI-Powered Car Photography</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl tracking-tight">
              Transform Your Car Photos Into{' '}
              <span className="text-[#00C9B7]">Showroom Quality</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-xl">
              Remove backgrounds, enhance images, and place your car in professional templates—all in seconds. Perfect for dealers, sellers, and enthusiasts.
            </p>

            <div className="flex flex-wrap gap-4">
              {/* App Store Button */}
              <a 
                href="#" 
                className="transition-all hover:scale-105 hover:opacity-90 duration-300"
              >
                <img 
                  src={appStoreImage} 
                  alt="Download on the App Store" 
                  className="h-14 w-auto"
                />
              </a>

              {/* Google Play Button */}
              <a 
                href="#" 
                className="transition-all hover:scale-105 hover:opacity-90 duration-300"
              >
                <img 
                  src={googlePlayImage} 
                  alt="Get it on Google Play" 
                  className="h-14 w-auto"
                />
              </a>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl">50K+</div>
                <div className="text-gray-400">Photos Enhanced</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-3xl">10K+</div>
                <div className="text-gray-400">Happy Users</div>
              </div>
              <div className="h-12 w-px bg-white/20" />
              <div>
                <div className="text-3xl">&lt; 30s</div>
                <div className="text-gray-400">Avg. Processing</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <BeforeAfterSlider
              beforeImage={beforeImage}
              afterImage={afterImage}
              beforeLabel="Original"
              afterLabel="Showroom"
            />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#00C9B7] rounded-full blur-[128px]" />
      </div>
    </div>
  );
}