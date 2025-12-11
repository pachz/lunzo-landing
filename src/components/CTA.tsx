import { Apple, Smartphone, Star, Download } from 'lucide-react';
import appStoreImage from 'figma:asset/7f84e25782c9d404385d341e8e0fb4be2a70341c.png';
import googlePlayImage from 'figma:asset/fb8a65b0ea6ea51535be8d11f0dcd91cce56be00.png';

export function CTA() {
  return (
    <section id="download-app" className="py-24 bg-gradient-to-br from-[#1C1E30] via-[#1C1E30] to-[#00C9B7]/20 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#00C9B7] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#00C9B7] rounded-full blur-[120px]" />
      </div>

      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #00C9B7 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00C9B7]/10 border border-[#00C9B7]/30 rounded-full mb-6">
            <Download className="w-4 h-4 text-[#00C9B7]" />
            <span className="text-[#00C9B7]">Download Our App</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl mb-6 max-w-4xl mx-auto">
            Transform Car Photos{' '}
            <span className="text-[#00C9B7]">Anywhere, Anytime</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Professional car photography at your fingertips. Download Lunzo and start creating showroom-quality images in seconds.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#00C9B7] text-[#00C9B7]" />
                ))}
              </div>
              <p className="text-sm text-gray-400">4.9 Rating</p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-2xl">100K+</div>
              <p className="text-sm text-gray-400">Downloads</p>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-2xl">50K+</div>
              <p className="text-sm text-gray-400">Active Users</p>
            </div>
          </div>
        </div>

        {/* Download Buttons */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-6">
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
        </div>
      </div>
    </section>
  );
}