import { MessageCircle, Palette, Share2, BarChart3 } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: MessageCircle,
      number: "1",
      title: "Share your event details",
      description: "Send us your event name, date, venue, and any custom requirements. Takes 3 minutes via WhatsApp or email."
    },
    {
      icon: Palette,
      number: "2",
      title: "We create your invitation",
      description: "Beautiful, branded digital invitation page ready in 24 hours. Fully customized to match your event style."
    },
    {
      icon: Share2,
      number: "3",
      title: "Distribute the link",
      description: "Share via email, WhatsApp, SMS, or social media. Guests RSVP with one click. No app downloads needed."
    },
    {
      icon: BarChart3,
      number: "4",
      title: "Track in real-time",
      description: "Live dashboard shows confirmed attendees, dietary preferences, and guest counts. Export to Excel anytime."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-40 right-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">
            Simple, powerful, professional
          </h2>
          <p className="text-xl opacity-90">
            Get your event RSVP system up and running in 4 easy steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center space-y-4 relative">
              <div className="relative inline-block">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto border-2 border-white/30 hover:bg-white/20 transition-all">
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-blue-600 shadow-lg">
                  {step.number}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-1">
                  {step.title}
                </h3>
              </div>

              <p className="text-white/90 text-sm leading-relaxed">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-white/20">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl border border-white/20">
            <div className="text-center">
              <p className="text-2xl font-bold">3 min</p>
              <p className="text-sm opacity-80">Setup time</p>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div className="text-center">
              <p className="text-2xl font-bold">3 days</p>
              <p className="text-sm opacity-80">Delivery</p>
            </div>
            <div className="h-12 w-px bg-white/30"></div>
            <div className="text-center">
              <p className="text-2xl font-bold">100%</p>
              <p className="text-sm opacity-80">Mobile friendly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
