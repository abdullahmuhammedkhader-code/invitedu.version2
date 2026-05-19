import { Check, MessageCircle } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "2,999",
      subtitle: "Just the RSVP perfectly taliored for your event",
      features: [
        "Beautiful customizable invitation page",
        "Real-time RSVP dashboard",
        "Dietary preference tracking",
        "Email & WhatsApp sharing",
        "Excel export",
        "Mobile responsive design",
        "3 Days Delivery"
      ],
      popular: false
    },
    {
      // Fixed typo: "Ulimate" -> "Ultimate"
      name: "Ultimate", 
      price: "4,999",
      subtitle: "Tailored RSVP and an Invitation Card",
      features: [
        "Everything in Starter, plus:",
        "Custom invitation card",
        "Custom branding & logo",
        "Multi-session event support",
        "Automated reminder system",
        "Advanced analytics dashboard",
        "Priority support",
        "Custom invitation card"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      subtitle: "For large-scale events",
      features: [
        "Unlimited guests",
        "Everything in Professional, plus:",
        "Custom domain integration",
        "Multiple event management",
        "CRM integration",
        "On-site support available",
        "Custom SLA"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-bold">
            Transparent, value-driven pricing
          </h2>
          <p className="text-lg text-gray-600">
            One-time payment per event. No subscriptions. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 pt-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 group ${
                plan.popular
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105 border-2 border-transparent'
                  : 'bg-white border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg'
              }`}
            >
              {/* --- GOLDEN FLOWING BORDER EFFECT FOR ULTIMATE PLAN --- */}
              {plan.popular && (
                <>
                  {/* Left flowing border half */}
                  <span className="absolute top-0 left-1/2 right-0 bottom-0  border-l-7  border-amber-400 rounded-l-2xl pointer-events-none origin-top transition-all duration-1000 ease-out scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 group-hover:left-0" />
                  
                  {/* Right flowing border half */}
                  <span className="absolute top-0 right-1/2 left-0 bottom-0  border-r-7  border-amber-400 rounded-r-2xl pointer-events-none origin-top transition-all duration-1000 ease-out scale-y-0 opacity-0 group-hover:scale-y-100 group-hover:opacity-100 group-hover:right-0" />
                  
                  {/* Optional Soft Golden Glow */}
                  <span className="absolute inset-0 rounded-2xl bg-amber-400/0 transition-all duration-500 group-hover:bg-amber-400/5 group-hover:blur-sm pointer-events-none" />
                </>
              )}

              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8 relative z-10">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.popular ? 'text-white/90' : 'text-gray-600'}`}>
                  {plan.subtitle}
                </p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-lg">₹</span>
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                  per event
                </p>
              </div>

              <ul className="space-y-4 mb-8 relative z-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.popular ? 'bg-white/20' : 'bg-blue-100'
                    }`}>
                      <Check className={`w-3.5 h-3.5 ${plan.popular ? 'text-white' : 'text-blue-600'}`} />
                    </div>
                    <span className={`text-sm ${plan.popular ? 'text-white/90' : 'text-gray-700'} ${feature.includes('Everything') ? 'font-semibold' : ''}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/918137051103?text=Hi! I'd like to know more about the ${plan.name} package`}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-lg font-semibold transition-all relative z-10 ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Started</span>
              </a>
            </div>
          ))}
        </div>

        {/* ROI Calculator */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            The ROI is clear
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Time saved on RSVP management</p>
                <p className="text-4xl font-bold text-blue-600">15+ hrs</p>
                <p className="text-xs text-gray-500 mt-2">@ ₹500/hr = ₹7,500 saved</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Food cost savings (accurate count)</p>
                <p className="text-4xl font-bold text-green-600">₹25K+</p>
                <p className="text-xs text-gray-500 mt-2">Avoid over/under ordering</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Professional impression</p>
                <p className="text-4xl font-bold text-purple-600">Priceless</p>
                <p className="text-xs text-gray-500 mt-2">Brand value & guest satisfaction</p>
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-gray-700 font-medium">
            Our Ultimate package costs ₹2,999 but saves you 4x that amount per event
          </p>
        </div>
      </div>
    </section>
  );
}