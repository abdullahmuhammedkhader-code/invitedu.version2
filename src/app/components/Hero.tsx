import { MessageCircle, Sparkles } from 'lucide-react';
import coverimg from '/image/2.png'
export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full border border-blue-200">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-medium">InvitedU a Smart Event Management Platform</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">InvitedU</span> Never lets you guess <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">headcount</span> again.
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Digital invitations with instant RSVP tracking for corporate events, conferences, parties, and celebrations. Know exactly who's attending.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/918137051103?text=Hi! I'd like to create a digital invitation for my event"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get Started on WhatsApp</span>
              </a>

              <a
                href="tel:+918714976075"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
              >
                Call Us Now
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>No app required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Ready in 24 hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Live tracking</span>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              {/* Phone Frame */}
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-[3rem] p-3 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* Phone Content */}
                  <div className="relative h-[600px] bg-gradient-to-br from-blue-50 to-purple-50">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80"></div>
                    <img
                      src="/image/2.png"
                      alt="Corporate Event"
                      className="w-full h-35 object-cover"
                    />

                    <div className="relative p-6 space-y-4">
                      <div className="text-center space-y-2">
                        <div className="inline-block px-3 py-1 bg-blue-100 rounded-full text-xs font-medium text-blue-700 mb-2">
                          Wedding Event
                        </div>
                        <h3 className="text-2xl text-gray-900 font-semibold">Bride & Groom</h3>
                        <p className="text-gray-600">You're invited to our celebration</p>
                      </div>

                      <div className="bg-white rounded-xl p-4 space-y-3 shadow-lg border border-gray-100">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600">📅</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Friday, June 15, 2026</p>
                            <p className="text-sm text-gray-600">6:00 PM - 10:00 PM</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600">📍</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Grand Ballroom</p>
                            <p className="text-sm text-gray-600">Downtown Convention Center</p>
                          </div>
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3.5 rounded-lg font-medium shadow-md hover:shadow-lg transition-all">
                        ✓ I'll Attend
                      </button>

                      <div className="flex gap-2">
                        <button className="flex-1 px-4 py-2 border-2 border-gray-200 text-gray-700 rounded-lg text-sm hover:border-blue-300 transition-all">
                          + Guests
                        </button>
                        <button className="flex-1 px-4 py-2 border-2 border-gray-200 text-gray-700 rounded-lg text-sm hover:border-blue-300 transition-all">
                          View Map
                        </button>
                      </div>

                      <p className="text-xs text-center text-gray-500">
                        Please RSVP by June 1, 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements around phone */}
              <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-purple-300/30 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 bottom-0 left-0 w-40 h-40 bg-blue-300/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
