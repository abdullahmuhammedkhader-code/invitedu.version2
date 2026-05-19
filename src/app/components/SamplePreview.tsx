import { Building2, Users, CalendarDays, PartyPopper } from 'lucide-react';

export function SamplePreview() {
  const eventTypes = [
    {
      icon: Building2,
      name: "Corporate Events",
      examples: "Annual galas, conferences, team offsites"
    },
    {
      icon: Users,
      name: "Networking Events",
      examples: "Industry meetups, workshops, seminars"
    },
    {
      icon: CalendarDays,
      name: "Private Functions",
      examples: "Birthdays, anniversaries, family gatherings"
    },
    {
      icon: PartyPopper,
      name: "Celebrations",
      examples: "Weddings, receptions, engagement parties"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-bold">
              Perfect for every type of event
            </h2>
            <p className="text-lg text-gray-600">
              From corporate conferences to intimate celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {eventTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <type.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {type.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {type.examples}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-blue-100">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Features List */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Everything you need for professional event management
                </h3>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Fully customizable branding</h4>
                    <p className="text-gray-600 text-sm">Add your company logo, brand colors, and custom messaging</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Multi-device compatibility</h4>
                    <p className="text-gray-600 text-sm">Works flawlessly on desktop, tablet, and mobile</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Real-time analytics</h4>
                    <p className="text-gray-600 text-sm">Track RSVPs, attendance, and guest preferences instantly</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Easy distribution</h4>
                    <p className="text-gray-600 text-sm">Share via email, WhatsApp, SMS, or embed on your website</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 mt-8">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Preview before you publish:</span> Review and approve your invitation page before sending it to guests. Request unlimited changes.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-700">Event Response Rate</h4>
                    <span className="text-2xl font-bold text-green-600">94%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">vs 45% with traditional methods</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-700">Time Saved</h4>
                    <span className="text-2xl font-bold text-blue-600">15+ hrs</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Average time saved per event on manual RSVP tracking and follow-ups
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-700">Guest Satisfaction</h4>
                    <span className="text-2xl font-bold text-purple-600">4.9/5</span>
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Based on 1,200+ events</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
