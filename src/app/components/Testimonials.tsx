export function Testimonials() {
  const testimonials = [
    {
      name: "Kaif Haris",
      role: "Outdoor Events Head",
      company: "Boxburn",
      avatar: "KH",
      message: "Used invitedU for our big outdoor event with 450+ attendees. The real-time dashboard was a game-changer. We knew exact numbers for catering, seating, and materials. Saved us at least ₹50,000 in avoided wastage.",
      time: "10:42 AM",
      rating: 5
    },
    {
      name: "Saifudheen",
      role: "Business Development",
      company: "Clear Vision Arabia",
      avatar: "S",
      message: "Organized our team offsite and company annual convention using this platform. The branded invitation looked so professional, and tracking RSVPs was effortless. Our CEO was impressed! Highly recommend for corporate events.",
      time: "2:15 PM",
      rating: 5
    },
    {
      name: "Amit Sharma",
      role: "Wedding Planner",
      company: "DreamDay Events",
      avatar: "A",
      message: "I use invitedU for all my client weddings now. The couples love how modern and easy it is, and I love the accurate headcounts. No more last-minute chaos. The 24-hour turnaround is perfect for my business.",
      time: "7:33 PM",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 font-bold">
            Trusted by event professionals
          </h2>
          <p className="text-lg text-gray-600">
            Real feedback from real customers
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="space-y-4">
              {/* Message card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 relative hover:shadow-xl transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  "{testimonial.message}"
                </p>

                <div className="flex items-center justify-end gap-2 text-xs text-gray-400">
                  <span>{testimonial.time}</span>
                  <svg className="w-4 h-4 text-blue-500" viewBox="0 0 16 15" fill="none">
                    <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-4 pl-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-white rounded-xl px-8 py-4 shadow-md border border-gray-200">
            <p className="text-gray-700">
              Join <span className="font-bold text-blue-600">1,200+ events</span> that achieved 90%+ response rates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
