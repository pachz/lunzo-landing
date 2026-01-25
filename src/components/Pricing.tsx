import { Check, Sparkles } from 'lucide-react';

const pricingPlans = [
  {
    credits: 10,
    price: 8.9,
    popular: false,
  },
  {
    credits: 20,
    price: 14.9,
    popular: true,
  },
  {
    credits: 50,
    price: 29.9,
    popular: false,
  },
  {
    credits: 100,
    price: 54.9,
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-block px-4 py-2 bg-[#00C9B7]/10 border border-[#00C9B7]/30 rounded-full mb-4 md:mb-6">
            <span className="text-[#00C9B7]">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl text-[#1C1E30] mb-4 md:mb-6">
            Choose Your Credit Package
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Flexible pricing options to suit your needs. Buy credits and use them whenever you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-[#00C9B7] bg-gradient-to-br from-[#00C9B7]/5 to-white shadow-lg shadow-[#00C9B7]/10 scale-105'
                  : 'border-gray-200 bg-white hover:border-[#00C9B7]/50 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#00C9B7] text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-6 lg:p-8">
                <div className="text-center mb-6">
                  <div className="text-4xl lg:text-5xl font-bold text-[#1C1E30] mb-2">
                    {plan.credits}
                  </div>
                  <div className="text-gray-500 text-sm mb-4">Credits</div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl lg:text-4xl font-bold text-[#1C1E30]">
                      ${plan.price}
                    </span>
                  </div>
                  <div className="text-gray-500 text-sm mt-1">
                    ${(Math.round((plan.price / plan.credits) * 10) / 10).toFixed(1).replace(/\.0$/, '')} per credit
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#00C9B7] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      {plan.credits} photo processing credits
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#00C9B7] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      Access to all templates
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#00C9B7] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">
                      High-resolution downloads
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm">
            All plans include the same features. Credits can be used for any photo processing.
          </p>
        </div>
      </div>
    </section>
  );
}
