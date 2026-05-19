import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, MessageCircle } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: "Do my guests need to download an app?",
      answer: "No! Your guests simply click the link you share, and the invitation opens in their web browser. They can RSVP with one tap. Works on any smartphone, tablet, or computer — iOS, Android, Windows, Mac."
    },
    {
      question: "How quickly can you deliver my invitation page?",
      answer: "Standard delivery is 3 days. For Professional and Enterprise packages, we offer 36-hour rush delivery. For urgent requirements, contact us directly and we'll do our best to accommodate."
    },
    {
      question: "Can I customize the invitation with my company branding?",
      answer: "Absolutely! Ultimate and Enterprise packages include full branding customization — your logo, brand colors, fonts, and custom messaging. We'll match your brand guidelines perfectly."
    },
    {
      question: "What if I need to make changes after the invitation is live?",
      answer: "You can update event details, venue, time, or any information anytime. The link stays the same, so your guests automatically see the updated information. No need to resend invitations. Changes reflect instantly."
    },
    {
      question: "How do I share the invitation with my guests?",
      answer: "You get a simple link that you can share via email, WhatsApp, SMS, social media, or embed on your website. You can also generate QR codes for physical materials. Your guests click the link and RSVP immediately."
    },
    {
      question: "Can I track dietary preferences and special requirements?",
      answer: "Yes! The RSVP form can collect dietary preferences (vegetarian, vegan, gluten-free, etc.), accessibility needs, plus/minus guest counts, and any custom questions you want to ask. All data exports to Excel."
    },
    {
      question: "Is my guest data secure and private?",
      answer: "Absolutely. We use enterprise-grade encryption and security. Your guest data is stored securely, never shared with third parties, and you can delete it anytime. We're GDPR compliant and take privacy seriously."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-bold">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our service
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-blue-300 transition-all"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full flex items-center justify-between p-6 text-left group hover:bg-gray-50 transition-all">
                    <h3 className="flex-1 text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-blue-600 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0" />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>

          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <p className="text-gray-900 mb-4 font-semibold text-lg">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/918137051103?text=Hi! I have a question about invitedU"
                className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#20BA5A] transition-all shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp us</span>
              </a>
              <a
                href="mailto:admin@invitedu.com"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md"
              >
                <span>📧</span>
                <span>Email us</span>
              </a>
              <a
                href="tel:+918714976075"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-all shadow-md"
              >
                <span>📞</span>
                <span>Call us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
