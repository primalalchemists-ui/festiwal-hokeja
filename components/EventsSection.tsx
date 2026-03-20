import { ArrowRight, Calendar, MapPin } from "lucide-react";

const events = [
  {
    title: "Open Camp Amatorzy +18",
    date: "05–10 lipca 2026",
    location: "Warszawa, Torwar",
    tag: "CAMP",
    image: "/events/event-1.jpg",
  },
  {
    title: "Junior Hockey Camp U14",
    date: "15–22 lipca 2026",
    location: "Kraków, Tauron Arena",
    tag: "CAMP",
    image: "/events/event-2.jpg",
  },
  {
    title: "Turniej Międzynarodowy U16",
    date: "01–05 sierpnia 2026",
    location: "Gdańsk, Olivia",
    tag: "TURNIEJ",
    image: "/events/event-3.jpg",
  },
];

export default function EventsSection() {
  return (
    <section id="wydarzenia" className="py-24 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#00E5FF] text-xs font-bold uppercase tracking-[0.3em] mb-3 text-[#FF7A1A]/80">
            Kalendarz
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nadchodzące wydarzenia
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <div
              key={i}
              className="group bg-[#111111] border border-white/5 overflow-hidden hover:border-[#00E5FF]/30 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#00E5FF] text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1">
                    {event.tag}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-4">{event.title}</h3>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#00E5FF] text-sm font-bold uppercase tracking-wider group-hover:gap-3 transition-all"
                >
                  Zobacz szczegóły
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}