import { Mail, MessageSquare, HelpCircle } from 'lucide-react';
import { Footer } from '../components/Footer';

export function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#1C1E30] mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          We're here to help! Get in touch with us for support, questions, or feedback.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="w-12 h-12 bg-[#00C9B7]/10 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#00C9B7]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1C1E30] mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">
              Send us an email and we'll get back to you as soon as possible.
            </p>
            <a 
              href="mailto:thelunzoapp@gmail.com" 
              className="text-[#00C9B7] hover:underline font-medium"
            >
              thelunzoapp@gmail.com
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <div className="w-12 h-12 bg-[#00C9B7]/10 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-[#00C9B7]" />
            </div>
            <h3 className="text-xl font-semibold text-[#1C1E30] mb-2">Support</h3>
            <p className="text-gray-600 mb-4">
              Need help with your account or have questions about our service?
            </p>
            <a 
              href="mailto:thelunzoapp@gmail.com?subject=Support Request" 
              className="text-[#00C9B7] hover:underline font-medium"
            >
              Get Support
            </a>
          </div>
        </div>

        
      </div>
      <Footer />
    </div>
  );
}
