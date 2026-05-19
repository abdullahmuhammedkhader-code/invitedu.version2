import { MessageCircle, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer CTA */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to transform your event management?
              </h2>
              <h3 className="text-2xl md:text-3xl text-blue-400">
                Let's get started today.
              </h3>
            </div>

            <p className="text-xl text-gray-300">
              Join 1,200+ successful events. Know your headcount. Impress your guests.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/918137051103?text=Hi! I'd like to create a digital invitation for my event"
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-5 rounded-xl hover:bg-[#20BA5A] transition-all shadow-xl hover:shadow-2xl text-lg font-semibold"
              >
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp Us</span>
              </a>

              <a
                href="tel:+918714976075"
                className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-5 rounded-xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl text-lg font-semibold"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now</span>
              </a>
            </div>

            <p className="text-sm text-gray-400">
              Average response time: 5 minutes • Available 7 days a week
            </p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Brand */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                invitedU
              </h3>
              <p className="text-gray-400 leading-relaxed">
                India's leading digital RSVP platform for corporate events, conferences, and celebrations.
                Beautiful invitations, accurate headcounts, stress-free event management.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/invitedu.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <a href="#features" className="hover:text-blue-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-blue-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-blue-400 transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-blue-400 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-white">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                  <a href="tel:+918714976075" className="hover:text-blue-400 transition-colors">
                    +91 87149 76075
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" />
                  <a href="https://wa.me/918137051103" className="hover:text-blue-400 transition-colors">
                    +91 81370 51103
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-400" />
                  <a href="mailto:admin@invitedu.com" className="hover:text-blue-400 transition-colors">
                    admin@invitedu.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>
            © 2026 invitedU. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
