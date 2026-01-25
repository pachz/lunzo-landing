import { Check, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Upload, Plus, Wand2, Image as ImageIcon } from 'lucide-react';

import frontAngle from 'figma:asset/5e0eea85a189ba65c680dcf4a2302d71b1e6a04a.png';
import frontSideAngle from 'figma:asset/60efe22077c219dbd8557ffae068207c62581b75.png';
import sideAngle from 'figma:asset/a5b800d3b98f86cd8ba495e60c1e31473491f3ac.png';
import backAngle from 'figma:asset/1b9073299c3aa22e677fcd88d6bf7d17c6183945.png';
import rearSideAngle from 'figma:asset/b323da1d6bd85828069b47a4f5bc8675a68835f7.png';
import showroom1 from 'figma:asset/a4fd9e5d7ae092a6aef711282aa032dc8429e793.png';

const showrooms = [
  { 
    id: 1, 
    name: 'Modern Studio', 
    type: 'Minimalist',
    image: showroom1,
    angles: [
      { name: 'Front', image: frontAngle },
      { name: 'Front-Side', image: frontSideAngle },
      { name: 'Side', image: sideAngle },
      { name: 'Rear-Side', image: rearSideAngle },
      { name: 'Rear', image: backAngle }
    ]
  },
  { 
    id: 2, 
    name: 'Premium Gallery', 
    type: 'Luxury',
    image: showroom1,
    angles: [
      { name: 'Front', image: frontAngle },
      { name: 'Front-Side', image: frontSideAngle },
      { name: 'Side', image: sideAngle },
      { name: 'Rear-Side', image: rearSideAngle },
      { name: 'Rear', image: backAngle }
    ]
  },
  { 
    id: 3, 
    name: 'Classic Showroom', 
    type: 'Traditional',
    image: showroom1,
    angles: [
      { name: 'Front', image: frontAngle },
      { name: 'Front-Side', image: frontSideAngle },
      { name: 'Side', image: sideAngle },
      { name: 'Rear-Side', image: rearSideAngle },
      { name: 'Rear', image: backAngle }
    ]
  }
];

export function Templates() {
  const [selectedShowroom, setSelectedShowroom] = useState(0);
  const [selectedAngle, setSelectedAngle] = useState(0);

  return (
    <section id="templates" className="py-16 md:py-20 bg-gradient-to-b from-[#0A0B14] to-[#1C1E30] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-0 w-[600px] h-[600px] bg-[#00C9B7] rounded-full blur-[150px] opacity-10" />
        <div className="absolute bottom-20 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px] opacity-10" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00C9B7]/10 border border-[#00C9B7]/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-[#00C9B7]" />
            <span className="text-[#00C9B7]">See the Results</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Professional Results in <span className="text-[#00C9B7]">Seconds</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Choose your showroom style and explore every angle
          </p>
        </div>

        {/* Main Content - Flex Layout */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          {/* LEFT SECTION: Showroom Tabs */}
          <div className="lg:w-72">
            {/* Showroom Selection */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <Sparkles className="w-4 h-4 text-[#00C9B7]" />
                <span className="text-white font-medium">Showroom Templates</span>
              </div>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="lg:hidden overflow-x-auto pb-4 -mx-6 px-6">
                <div className="flex gap-3" style={{ width: 'max-content' }}>
                  {showrooms.map((showroom, index) => (
                    <button
                      key={showroom.id}
                      onClick={() => {
                        setSelectedShowroom(index);
                        setSelectedAngle(0);
                      }}
                      className="group relative text-left flex-shrink-0"
                      style={{ width: '200px' }}
                    >
                      {/* Glow Effect */}
                      <div className={`absolute -inset-[1px] bg-gradient-to-br from-[#00C9B7] to-blue-500 rounded-2xl opacity-0 blur-md transition-opacity duration-300 ${
                        selectedShowroom === index ? 'opacity-70' : 'group-hover:opacity-40'
                      }`} />
                      
                      <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                        selectedShowroom === index 
                          ? 'ring-2 ring-[#00C9B7] shadow-xl shadow-[#00C9B7]/20' 
                          : 'ring-1 ring-white/10 group-hover:ring-white/20'
                      }`}>
                        <div className="relative h-28">
                          <img
                            src={showroom.image}
                            alt={showroom.name}
                            className="w-full h-full object-cover"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-300 ${
                            selectedShowroom === index 
                              ? 'from-[#1C1E30] via-[#1C1E30]/60 to-transparent' 
                              : 'from-black/80 via-black/40 to-transparent group-hover:from-black/70'
                          }`} />
                          
                          {/* Selection Indicator */}
                          {selectedShowroom === index && (
                            <div className="absolute top-2 right-2 w-6 h-6 bg-[#00C9B7] rounded-full flex items-center justify-center shadow-lg animate-in fade-in zoom-in duration-200">
                              <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                            </div>
                          )}
                          
                          {/* Info Section */}
                          <div className="absolute inset-x-0 bottom-0 p-3">
                            <p className={`text-[10px] uppercase tracking-wider mb-1 font-medium transition-colors ${
                              selectedShowroom === index ? 'text-[#00C9B7]' : 'text-gray-400 group-hover:text-gray-300'
                            }`}>
                              {showroom.type}
                            </p>
                            <p className="text-white font-semibold text-sm">{showroom.name}</p>
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                  
                  {/* Custom Template Upload Box */}
                  <button className="group relative text-left flex-shrink-0" style={{ width: '200px' }}>
                    <div className="absolute -inset-[1px] bg-gradient-to-br from-[#00C9B7] to-blue-500 rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />
                    
                    <div className="relative border-2 border-dashed border-[#00C9B7]/30 rounded-2xl bg-gradient-to-br from-[#00C9B7]/5 to-blue-500/5 hover:border-[#00C9B7]/50 hover:from-[#00C9B7]/10 hover:to-blue-500/10 transition-all cursor-pointer h-28 group-hover:shadow-lg group-hover:shadow-[#00C9B7]/10">
                      <div className="flex flex-col items-center justify-center h-full p-3 gap-1.5">
                        <div className="w-10 h-10 rounded-full bg-[#00C9B7]/20 flex items-center justify-center group-hover:bg-[#00C9B7]/30 transition-all group-hover:scale-110">
                          <Plus className="w-5 h-5 text-[#00C9B7]" />
                        </div>
                        <div className="text-center">
                          <p className="text-white font-semibold text-sm mb-0.5">Your Template</p>
                          <p className="text-gray-400 text-[10px]">Custom backgrounds</p>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Desktop: Vertical Stack */}
              <div className="hidden lg:flex flex-col gap-4 flex-1">
                {showrooms.map((showroom, index) => (
                  <button
                    key={showroom.id}
                    onClick={() => {
                      setSelectedShowroom(index);
                      setSelectedAngle(0);
                    }}
                    className="group relative text-left"
                  >
                    {/* Glow Effect */}
                    <div className={`absolute -inset-[1px] bg-gradient-to-br from-[#00C9B7] to-blue-500 rounded-2xl opacity-0 blur-md transition-opacity duration-300 ${
                      selectedShowroom === index ? 'opacity-70' : 'group-hover:opacity-40'
                    }`} />
                    
                    <div className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                      selectedShowroom === index 
                        ? 'ring-2 ring-[#00C9B7] shadow-xl shadow-[#00C9B7]/20' 
                        : 'ring-1 ring-white/10 group-hover:ring-white/20'
                    }`}>
                      <div className="relative h-32">
                        <img
                          src={showroom.image}
                          alt={showroom.name}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-300 ${
                          selectedShowroom === index 
                            ? 'from-[#1C1E30] via-[#1C1E30]/60 to-transparent' 
                            : 'from-black/80 via-black/40 to-transparent group-hover:from-black/70'
                        }`} />
                        
                        {/* Selection Indicator */}
                        {selectedShowroom === index && (
                          <div className="absolute top-3 right-3 w-7 h-7 bg-[#00C9B7] rounded-full flex items-center justify-center shadow-lg animate-in fade-in zoom-in duration-200">
                            <Check className="w-4 h-4 text-white" strokeWidth={3} />
                          </div>
                        )}
                        
                        {/* Info Section */}
                        <div className="absolute inset-x-0 bottom-0 p-4">
                          <p className={`text-[11px] uppercase tracking-wider mb-1.5 font-medium transition-colors ${
                            selectedShowroom === index ? 'text-[#00C9B7]' : 'text-gray-400 group-hover:text-gray-300'
                          }`}>
                            {showroom.type}
                          </p>
                          <p className="text-white font-semibold">{showroom.name}</p>
                        </div>

                        {/* Active Pulse Indicator */}
                        {selectedShowroom === index && (
                          <div className="absolute top-3 left-3">
                            <div className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00C9B7] opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00C9B7]"></span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
                
                {/* Custom Template Upload Box - 4th Template */}
                <button className="group relative text-left">
                  {/* Glow Effect */}
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-[#00C9B7] to-blue-500 rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-40" />
                  
                  <div className="relative border-2 border-dashed border-[#00C9B7]/30 rounded-2xl bg-gradient-to-br from-[#00C9B7]/5 to-blue-500/5 hover:border-[#00C9B7]/50 hover:from-[#00C9B7]/10 hover:to-blue-500/10 transition-all cursor-pointer h-32 group-hover:shadow-lg group-hover:shadow-[#00C9B7]/10">
                    <div className="flex flex-col items-center justify-center h-full p-4 gap-2">
                      <div className="w-12 h-12 rounded-full bg-[#00C9B7]/20 flex items-center justify-center group-hover:bg-[#00C9B7]/30 transition-all group-hover:scale-110">
                        <Plus className="w-6 h-6 text-[#00C9B7]" />
                      </div>
                      <div className="text-center">
                        <p className="text-white font-semibold mb-0.5">Your Own Template</p>
                        <p className="text-gray-400 text-xs">Use custom backgrounds</p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION: Car Images */}
          <div className="flex-1">
            {/* Large Preview Image */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-white/10 p-3 md:p-8 mb-3 md:mb-4">
              <div className="aspect-[4/3] md:aspect-[16/10] flex items-center justify-center">
                <img
                  src={showrooms[selectedShowroom].angles[selectedAngle].image}
                  alt={showrooms[selectedShowroom].angles[selectedAngle].name}
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* 5 Angle Thumbnails in a Row */}
            <div className="grid grid-cols-5 gap-2 md:gap-3">
              {showrooms[selectedShowroom].angles.map((angle, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAngle(index)}
                  className={`transition-all ${
                    selectedAngle === index ? 'opacity-100 scale-100' : 'opacity-50 hover:opacity-80'
                  }`}
                >
                  <div className={`rounded-lg overflow-hidden border-2 ${
                    selectedAngle === index ? 'border-[#00C9B7]' : 'border-white/20'
                  }`}>
                    <img
                      src={angle.image}
                      alt={angle.name}
                      className="w-full h-16 md:h-24 object-cover"
                    />
                  </div>
                  <p className={`text-center mt-1.5 md:mt-2 text-xs md:text-sm ${
                    selectedAngle === index ? 'text-[#00C9B7]' : 'text-gray-400'
                  }`}>
                    {angle.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-sm md:text-base text-gray-400">
            <span className="text-[#00C9B7] font-medium">AI-Powered</span> • Background Removal • Professional Lighting • Instant Processing
          </p>
        </div>
      </div>
    </section>
  );
}