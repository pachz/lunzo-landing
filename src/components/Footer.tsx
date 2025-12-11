import logoFull from 'figma:asset/c9aad9e2c91828e037a2d77cba9ecc7543741b69.png';
import { Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
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

          {/* Product */}
          <div>
            <h3 className="text-[#1C1E30] mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00C9B7] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00C9B7] transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00C9B7] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00C9B7] transition-colors">
                  API Access
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[#1C1E30] mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00C9B7] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00C9B7] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00C9B7] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00C9B7] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[#1C1E30] mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00C9B7] transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00C9B7] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00C9B7] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#00C9B7] transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 Lunzo. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#00C9B7] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#00C9B7] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#00C9B7] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}