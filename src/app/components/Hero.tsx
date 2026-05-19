import { MessageCircle, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from "react";

export function Hero() {
  const events = [
    {
      label: "Wedding",
      tag: "Wedding Event",
      tagBg: "#fdf2f8",
      tagColor: "#9d174d",
      headerImg: "/image/2.png",
      title: "Bride & Groom",
      subtitle: "You're invited to our celebration",
      date: "Fri, June 15, 2026",
      time: "6:00 PM – 10:00 PM",
      venue: "Grand Ballroom",
      address: "Downtown Convention Center",
      guests: "180 attending",
      dress: "Black tie",
      rsvp: "June 1, 2026",
      btnFrom: "#db2777",
      btnTo: "#9333ea",
      btnLabel: "I'll Attend",
      accentBg: "#fdf2f8",
      accentColor: "#db2777",
      progressColor: "#db2777",
      tabBg: "#db2777",
    },
    {
      label: "Corporate",
      tag: "Corporate Summit",
      tagBg: "#eff6ff",
      tagColor: "#1e40af",
      headerImg: "/image/corporate.png",
      title: "InvitedU Annual Summit",
      subtitle: "Leadership & Innovation 2026",
      date: "Wed, July 9, 2026",
      time: "9:00 AM – 6:00 PM",
      venue: "The Business Hub",
      address: "Tower 3, Financial District",
      guests: "320 registered",
      dress: "Business formal",
      rsvp: "June 25, 2026",
      btnFrom: "#2563eb",
      btnTo: "#4f46e5",
      btnLabel: "Register Now",
      accentBg: "#eff6ff",
      accentColor: "#2563eb",
      progressColor: "#2563eb",
      tabBg: "#2563eb",
    },
    {
      label: "Birthday",
      tag: "Birthday Party",
      tagBg: "#fffbeb",
      tagColor: "#92400e",
      headerImg: "/image/birthday.png",
      title: "Sara's 5th",
      subtitle: "Join us for a night to remember!",
      date: "Sat, Aug 2, 2026",
      time: "7:00 PM – 11:30 PM",
      venue: "Rooftop Lounge",
      address: "Sky Garden, 5th Avenue",
      guests: "64 attending",
      dress: "Cocktail attire",
      rsvp: "July 25, 2026",
      btnFrom: "#f59e0b",
      btnTo: "#ef4444",
      btnLabel: "Count Me In!",
      accentBg: "#fffbeb",
      accentColor: "#d97706",
      progressColor: "#f59e0b",
      tabBg: "#f59e0b",
    },
    {
      label: "Gym",
      tag: "Outdoor Fitness",
      tagBg: "#f0fdf4",
      tagColor: "#14532d",
      headerImg: "/image/gym.png",
      title: "Beast Mode Bootcamp",
      subtitle: "High-intensity outdoor group training",
      date: "Sun, June 22, 2026",
      time: "6:00 AM – 8:00 AM",
      venue: "Riverside Park Arena",
      address: "Sector 7, East Riverside",
      guests: "42 signed up",
      dress: "Sports wear",
      rsvp: "June 18, 2026",
      btnFrom: "#16a34a",
      btnTo: "#0d9488",
      btnLabel: "Join the Squad",
      accentBg: "#f0fdf4",
      accentColor: "#16a34a",
      progressColor: "#16a34a",
      tabBg: "#16a34a",
    },
  ];

  const DURATION = 5000;
  const TICK = 50;

  const [current, setCurrent] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(true);

  const pausedRef = useRef(false);
  const elapsedRef = useRef(0);
  const currentRef = useRef(0);

  useEffect(() => { pausedRef.current = paused; }, [paused]);
  useEffect(() => { elapsedRef.current = elapsed; }, [elapsed]);
  useEffect(() => { currentRef.current = current; }, [current]);

  useEffect(() => {
    const tick = setInterval(() => {
      if (pausedRef.current) return;
      elapsedRef.current += TICK;
      setElapsed(elapsedRef.current);
      if (elapsedRef.current >= DURATION) {
        elapsedRef.current = 0;
        setElapsed(0);
        const next = (currentRef.current + 1) % events.length;
        currentRef.current = next;
        setVisible(false);
        setTimeout(() => {
          setCurrent(next);
          setVisible(true);
        }, 200);
      }
    }, TICK);
    return () => clearInterval(tick);
  }, []);

  const switchTo = (i: number) => {
    if (i === currentRef.current) return;
    elapsedRef.current = 0;
    setElapsed(0);
    setVisible(false);
    setTimeout(() => {
      currentRef.current = i;
      setCurrent(i);
      setVisible(true);
    }, 200);
  };

  const e = events[current];
  const progress = Math.min((elapsed / DURATION) * 100, 100);

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">InvitedU</span>{" "}
              Never lets you guess{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">headcount</span>{" "}
              again.
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Digital invitations with instant RSVP tracking for corporate events, conferences, parties, and celebrations. Know exactly who's attending.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              
                href="https://wa.me/918137051103?text=Hi! I'd like to create a digital invitation for my event"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl"
              <a>
                <MessageCircle className="w-5 h-5" />
                <span>Get Started on WhatsApp</span>
              </a>

              
                href="tel:+918714976075"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all"
              <a>
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
              <div className="flex flex-col items-center" style={{ perspective: "900px" }}>

                {/* Phone wrapper with hover 3D tilt */}
                <div
                  className="relative"
                  style={{
                    transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                    transform: paused
                      ? "scale(1.07) rotateY(-8deg) rotateX(3deg)"
                      : "scale(1) rotateY(0deg) rotateX(0deg)",
                    transformStyle: "preserve-3d",
                  }}
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  {/* Paused badge */}
                  <div
                    className="absolute -top-3 -right-3 z-20 flex items-center gap-1 bg-gray-900 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full pointer-events-none"
                    style={{ opacity: paused ? 1 : 0, transition: "opacity 0.3s" }}
                  >
                    ⏸ Paused
                  </div>

                  {/* Side buttons */}
                  <div className="absolute -left-[3px] top-[72px]  w-[3px] h-7  bg-gray-600 rounded-l-sm" />
                  <div className="absolute -left-[3px] top-[110px] w-[3px] h-10 bg-gray-600 rounded-l-sm" />
                  <div className="absolute -left-[3px] top-[160px] w-[3px] h-10 bg-gray-600 rounded-l-sm" />
                  <div className="absolute -right-[3px] top-[108px] w-[3px] h-12 bg-gray-600 rounded-r-sm" />

                  {/* Outer frame */}
                  <div
                    className="rounded-[42px] p-[3px]"
                    style={{
                      background: "linear-gradient(145deg,#1f2937,#111827)",
                      boxShadow: paused
                        ? "0 32px 70px rgba(0,0,0,0.45)"
                        : "0 20px 50px rgba(0,0,0,0.3)",
                      transition: "box-shadow 0.45s ease",
                    }}
                  >
                    <div className="bg-black rounded-[40px] p-[2px]">
                      <div className="bg-white rounded-[38px] overflow-hidden w-[260px]">

                        {/* Status bar */}
                        <div className="relative bg-white px-5 pt-[10px] pb-[6px] flex items-center justify-between">
                          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[90px] h-6 bg-black rounded-full z-10 flex items-center justify-center gap-1.5">
                            <div className="w-[7px] h-[7px] rounded-full bg-gray-800 border border-gray-600" />
                            <div className="w-[9px] h-[9px] rounded-full bg-gray-900 border border-gray-700" />
                          </div>
                          <span className="text-[12px] font-bold text-gray-900 tabular-nums">9:41</span>
                          <div className="flex items-center gap-1">
                            <div className="flex items-end gap-[1.5px] h-[11px]">
                              {[3, 5, 8, 11].map((h, i) => (
                                <div key={i} className="w-[2.5px] bg-gray-900 rounded-sm" style={{ height: h }} />
                              ))}
                            </div>
                            <svg width="14" height="11" viewBox="0 0 16 12">
                              <path d="M8 9.5a2 2 0 110 2 2 2 0 010-2z" fill="#111" />
                              <path d="M4.5 6.8A5 5 0 018 5.5a5 5 0 013.5 1.3" stroke="#111" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                              <path d="M1.5 4A8.5 8.5 0 018 2a8.5 8.5 0 016.5 2" stroke="#111" strokeWidth="1.4" strokeLinecap="round" fill="none" />
                            </svg>
                            <div className="flex items-center gap-[1px]">
                              <div className="w-[19px] h-[10px] border-[1.5px] border-gray-900 rounded-[3px] p-[1.5px] flex items-center">
                                <div className="w-[12px] h-[5px] bg-green-500 rounded-[1px]" />
                              </div>
                              <div className="w-[1.5px] h-[5px] bg-gray-900 rounded-r-sm" />
                            </div>
                          </div>
                        </div>

                        {/* Event content */}
                        <div className="overflow-hidden" style={{ height: 510 }}>
                          <div
                            style={{
                              opacity: visible ? 1 : 0,
                              transform: visible ? "translateY(0)" : "translateY(8px)",
                              transition: "opacity 0.3s ease, transform 0.3s ease",
                              height: "100%",
                            }}
                          >

                            {/* ── Header: full bleed image ── */}
                            <div className="relative overflow-hidden" style={{ height: 130 }}>
                              <img
                                src={e.headerImg}
                                alt={e.label}
                                className="w-full h-full object-cover"
                              />
                              {/* Dark gradient so tag pill is always readable */}
                              <div
                                className="absolute inset-0"
                                style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.40))" }}
                              />
                              {/* Tag pill */}
                              <div
                                className="absolute bottom-2.5 right-3.5 text-[10px] font-semibold px-2 py-[3px] rounded-full"
                                style={{ background: e.tagBg, color: e.tagColor }}
                              >
                                {e.tag}
                              </div>
                            </div>

                            {/* Body */}
                            <div className="px-4 py-3 flex flex-col gap-2.5">
                              <div className="text-center">
                                <p className="text-[16px] font-bold text-gray-900">{e.title}</p>
                                <p className="text-[11px] text-gray-500">{e.subtitle}</p>
                              </div>

                              <div className="bg-gray-50 rounded-xl p-3 flex flex-col gap-2 border border-gray-100">
                                {/* Date */}
                                <div className="flex items-center gap-2">
                                  <div
                                    className="w-[30px] h-[30px] rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: e.accentBg }}
                                  >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={e.accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <rect x="3" y="4" width="18" height="18" rx="2" />
                                      <line x1="16" y1="2" x2="16" y2="6" />
                                      <line x1="8" y1="2" x2="8" y2="6" />
                                      <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                  </div>
                                  <div>
                                    <p className="text-[12px] font-semibold text-gray-900">{e.date}</p>
                                    <p className="text-[10px] text-gray-500">{e.time}</p>
                                  </div>
                                </div>
                                {/* Venue */}
                                <div className="flex items-center gap-2">
                                  <div
                                    className="w-[30px] h-[30px] rounded-lg flex items-center justify-center flex-shrink-0"
                                    style={{ background: e.accentBg }}
                                  >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={e.accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                      <circle cx="12" cy="9" r="2.5" />
                                    </svg>
                                  </div>
                                  <div>
                                    <p className="text-[12px] font-semibold text-gray-900">{e.venue}</p>
                                    <p className="text-[10px] text-gray-500">{e.address}</p>
                                  </div>
                                </div>
                                {/* Meta row */}
                                <div className="flex gap-3">
                                  <div className="flex items-center gap-1 flex-1">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={e.accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                      <circle cx="9" cy="7" r="4" />
                                      <path d="M23 21v-2a4 4 0 00-3-3.87" />
                                      <path d="M16 3.13a4 4 0 010 7.75" />
                                    </svg>
                                    <span className="text-[10px] text-gray-500">{e.guests}</span>
                                  </div>
                                  <div className="flex items-center gap-1 flex-1">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={e.accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
                                    </svg>
                                    <span className="text-[10px] text-gray-500">{e.dress}</span>
                                  </div>
                                </div>
                              </div>

                              {/* Attend button */}
                              <button
                                className="w-full py-3 rounded-xl text-white text-sm font-semibold border-none cursor-pointer"
                                style={{ background: `linear-gradient(90deg,${e.btnFrom},${e.btnTo})` }}
                              >
                                ✓ {e.btnLabel}
                              </button>

                              {/* Action buttons */}
                              <div className="flex gap-1.5">
                                {["+ Guests", "View Map", "Share"].map((label) => (
                                  <button
                                    key={label}
                                    className="flex-1 py-1.5 border-2 border-gray-200 bg-white rounded-lg text-[11px] text-gray-600 cursor-pointer"
                                  >
                                    {label}
                                  </button>
                                ))}
                              </div>

                              <p className="text-[10px] text-center text-gray-400">RSVP by {e.rsvp}</p>

                              {/* Home indicator */}
                              <div className="w-20 h-[3px] bg-gray-800 rounded-full opacity-20 mx-auto" />
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab buttons */}
                <div className="flex gap-2 mt-4">
                  {events.map((ev, i) => (
                    <button
                      key={ev.label}
                      onClick={() => switchTo(i)}
                      className="border-none px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all"
                      style={{
                        background: i === current ? ev.tabBg : "#e5e7eb",
                        color: i === current ? "#fff" : "#555",
                        transform: i === current ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      {ev.label}
                    </button>
                  ))}
                </div>

                {/* Progress bar */}
                <div className="w-[260px] mt-2.5 h-[3px] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${progress}%`,
                      background: e.progressColor,
                      transition: paused ? "none" : `width ${TICK}ms linear`,
                    }}
                  />
                </div>
              </div>

              {/* Glow effects */}
              <div className="absolute -z-10 top-0 right-0 w-32 h-32 bg-purple-300/30 rounded-full blur-2xl"></div>
              <div className="absolute -z-10 bottom-0 left-0 w-40 h-40 bg-blue-300/30 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}