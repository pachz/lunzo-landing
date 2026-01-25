import { Link, useNavigate, useLocation } from 'react-router-dom';
import logoFull from 'figma:asset/c9aad9e2c91828e037a2d77cba9ecc7543741b69.png';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home with hash
      navigate(`/#${sectionId}`);
      // Scroll after navigation
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLegalLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logoFull} alt="Lunzo" className="h-10 mb-6" />
            <p className="text-gray-600 mb-6 max-w-sm">
              Transform your car photos into showroom-quality images with AI-powered background removal and professional templates.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#00C9B7] hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#00C9B7] hover:text-white transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#00C9B7] hover:text-white transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-[#00C9B7] hover:text-white transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Landing Menu */}
          <div>
            <h3 className="text-[#1C1E30] mb-4" style={{ fontWeight: 700 }}>Menu</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleSectionClick('features')}
                  className="text-gray-600 hover:text-[#00C9B7] transition-colors text-left"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('templates')}
                  className="text-gray-600 hover:text-[#00C9B7] transition-colors text-left"
                >
                  Templates
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('how-it-works')}
                  className="text-gray-600 hover:text-[#00C9B7] transition-colors text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('pricing')}
                  className="text-gray-600 hover:text-[#00C9B7] transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSectionClick('transform-car-photos')}
                  className="text-gray-600 hover:text-[#00C9B7] transition-colors text-left"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-[#1C1E30] mb-4" style={{ fontWeight: 700 }}>Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/terms" 
                  onClick={handleLegalLinkClick}
                  className="text-gray-600 hover:text-[#00C9B7] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  onClick={handleLegalLinkClick}
                  className="text-gray-600 hover:text-[#00C9B7] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  onClick={handleLegalLinkClick}
                  className="text-gray-600 hover:text-[#00C9B7] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Lunzo. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <Link 
              to="/privacy" 
              onClick={handleLegalLinkClick}
              className="hover:text-[#00C9B7] transition-colors"
            >
              Privacy
            </Link>
            <Link 
              to="/terms" 
              onClick={handleLegalLinkClick}
              className="hover:text-[#00C9B7] transition-colors"
            >
              Terms
            </Link>
            <Link 
              to="/contact" 
              onClick={handleLegalLinkClick}
              className="hover:text-[#00C9B7] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}