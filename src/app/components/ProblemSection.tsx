import { BarChart3, Wallet, Clock } from "lucide-react";

export function ProblemSection() {
  const problems = [
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />,
      // Subtle background for the icon container
      iconBg: "bg-blue-50 group-hover:bg-blue-600", 
      title: "Uncertain attendance numbers",
      description: "Email RSVPs scattered across inboxes. Phone confirmations lost in notes. Last-minute cancellations with no way to track them."
    },
    {
      icon: <Wallet className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors duration-300" />,
      iconBg: "bg-purple-50 group-hover:bg-purple-600",
      title: "Budget overruns from poor planning",
      description: "Ordered catering for 1000, only 500 attended. Or worse, 800 showed up when you planned for 400. Thousands wasted either way."
    },
    {
      icon: <Clock className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />,
      iconBg: "bg-indigo-50 group-hover:bg-indigo-600",
      title: "Manual tracking wastes hours",
      description: "Your team spending days chasing RSVPs via calls and emails. Spreadsheets that nobody updates. Chaos two days before the event."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative subtle background glows matching your theme */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl text-slate-900 mb-5 font-extrabold tracking-tight">
            The cost of uncertainty
          </h2>
          <p className="text-slate-600 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Every event organizer faces these challenges. There's a better way.
          </p>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out group flex flex-col justify-between"
            >
              <div>
                {/* Stylish Icon Container */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${problem.iconBg} shadow-sm group-hover:scale-110 group-hover:shadow-md`}>
                  {problem.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {problem.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed font-normal text-[15px]">
                  {problem.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="text-center mt-20">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-[1px] rounded-2xl shadow-lg shadow-blue-600/10 hover:shadow-xl hover:shadow-purple-600/15 transition-all duration-300">
            <div className="bg-white px-10 py-5 rounded-[15px]">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-bold text-lg md:text-xl">
                Stop guessing. Start knowing. Get accurate headcounts for every event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
