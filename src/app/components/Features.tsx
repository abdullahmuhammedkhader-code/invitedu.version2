import { Users, Utensils, Calendar, MessageSquare, FileSpreadsheet, Smartphone, Lock, BarChart3, Globe, Zap } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time dashboard",
      description: "See who confirmed, who declined, and who hasn't responded yet. All data updates instantly."
    },
    {
      icon: Utensils,
      title: "Dietary preferences",
      description: "Track vegetarian, vegan, gluten-free, and other dietary requirements automatically."
    },
    {
      icon: Calendar,
      title: "Multi-session events",
      description: "Manage RSVP for multi-day conferences, workshops, or events with multiple sessions."
    },
    {
      icon: MessageSquare,
      title: "Automated reminders",
      description: "Send follow-up messages to guests who haven't responded via WhatsApp or email."
    },
    {
      icon: FileSpreadsheet,
      title: "Export to Excel",
      description: "Download complete guest lists with all details for catering and planning teams."
    },
    {
      icon: Smartphone,
      title: "Mobile optimized",
      description: "Works perfectly on any device. No app download required for you or your guests."
    },
    {
      icon: Lock,
      title: "Secure & private",
      description: "Enterprise-grade security. Your guest data is encrypted and never shared."
    },
    {
      icon: Globe,
      title: "Custom branding",
      description: "Add your logo, company colors, and custom domains for a professional look."
    },
    {
      icon: Zap,
      title: "Fast delivery",
      description: "Your invitation page is ready in 24 hours or less. Rush orders available."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-bold">
            Everything you need, all in one place
          </h2>
          <p className="text-lg text-gray-600">
            Professional event management tools trusted by leading organizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all bg-white"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-all">
                <feature.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-all" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl max-w-4xl mx-auto border border-blue-200">
          <p className="text-gray-900 font-semibold text-lg mb-2">
            Plus: Unlimited revisions • Priority support • Custom integrations available
          </p>
          <p className="text-gray-600 text-sm">
            We work with you until your invitation is perfect
          </p>
        </div>
      </div>
    </section>
  );
}
