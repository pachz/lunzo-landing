import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeLabel = 'Before',
  afterLabel = 'After'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    // Clamp between 0 and 100
    const clampedPercentage = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(clampedPercentage);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative w-full rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none bg-gray-100"
        onMouseDown={(e) => {
          handleMouseDown();
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          handleMouseDown();
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* After Image (full width, bottom layer) */}
        <div className="relative">
          <img
            src={afterImage}
            alt={afterLabel}
            className="w-full h-auto"
            draggable={false}
          />
          <div className="absolute bottom-6 right-6 bg-[#00C9B7] text-white px-4 py-2 rounded-lg shadow-lg">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (clipped by slider position) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-auto"
            draggable={false}
          />
          <div className="absolute bottom-6 left-6 bg-white text-[#1C1E30] px-4 py-2 rounded-lg shadow-lg">
            {beforeLabel}
          </div>
        </div>

        {/* Slider Line and Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{
            left: `${sliderPosition}%`,
            transform: 'translateX(-50%)',
          }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center cursor-ew-resize border-4 border-[#00C9B7]">
            <div className="flex items-center">
              <ChevronLeft className="w-4 h-4 text-[#1C1E30]" strokeWidth={3} />
              <ChevronRight className="w-4 h-4 text-[#1C1E30]" strokeWidth={3} />
            </div>
          </div>

          {/* Top circle indicator */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-[#00C9B7]" />
          
          {/* Bottom circle indicator */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg border-2 border-[#00C9B7]" />
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-500">Drag the slider to compare before and after</p>
      </div>
    </div>
  );
}