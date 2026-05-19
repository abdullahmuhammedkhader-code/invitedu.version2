import { Building2, GraduationCap, Users, Heart } from 'lucide-react';

export function TrustSection() {
  const industries = [
    {
      name: "Corporate",
      icon: Building2,
      examples: "Annual galas, conferences, team building events, product launches",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Education",
      icon: GraduationCap,
      examples: "Alumni meets, graduation ceremonies, workshops, seminars",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Community",
      icon: Users,
      examples: "Networking events, charity fundraisers, community gatherings",
      color: "from-green-500 to-green-600"
    },
    {
      name: "Personal",
      icon: Heart,
      examples: "Weddings, birthdays, anniversaries, family celebrations",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const stats = [
    { number: "1,200+", label: "Events hosted" },
    { number: "94%", label: "Avg. response rate" },
    { number: "3 Day", label: "Delivery time" },
    { number: "4.9/5", label: "Customer rating" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">
            Trusted across industries
          </h2>
          <p className="text-xl text-gray-300">
            From Fortune 500 companies to intimate family gatherings
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:border-white/30 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-all`}></div>

              <div className="relative">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {industry.name}
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {industry.examples}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            
            <p className="text-gray-400 text-sm">
              Your data is secure with enterprise-grade security and compliance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
