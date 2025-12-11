import { Upload, Scissors, Palette, Download } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Your Photo',
    description: 'Take a photo with your phone or upload from your gallery. Any angle, any background works.',
  },
  {
    number: '02',
    icon: Scissors,
    title: 'AI Removes Background',
    description: 'Our advanced AI automatically detects and removes the background with precision.',
  },
  {
    number: '03',
    icon: Palette,
    title: 'Choose a Template',
    description: 'Select from professional showroom templates or upload your own custom background.',
  },
  {
    number: '04',
    icon: Download,
    title: 'Download & Share',
    description: 'Get your enhanced photo in high resolution, ready to use anywhere.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-[#00C9B7]/10 border border-[#00C9B7]/30 rounded-full mb-6">
            <span className="text-[#00C9B7]">How It Works</span>
          </div>
          <h2 className="text-4xl lg:text-6xl text-[#1C1E30] mb-6">
            From Snapshot to Showroom in 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-600">
            Professional results in under 30 seconds. No experience needed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00C9B7]/20 via-[#00C9B7] to-[#00C9B7]/20" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-[#00C9B7]/30 transition-all hover:shadow-lg">
                  <div className="relative z-10 w-16 h-16 bg-[#00C9B7] rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-[#00C9B7]/20">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl opacity-5 absolute top-4 right-4">
                    {step.number}
                  </div>
                  <div className="text-sm text-[#00C9B7] mb-2">Step {step.number}</div>
                  <h3 className="text-xl text-[#1C1E30] mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-[#00C9B7] text-white rounded-lg hover:bg-[#00B4A5] transition-all hover:shadow-lg hover:shadow-[#00C9B7]/30">
            Try It Now - It&apos;s Free
          </button>
        </div>
      </div>
    </section>
  );
}
