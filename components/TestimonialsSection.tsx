"use client";

import { useState } from "react";
import { ArrowRight, Mail, Phone, Star } from "lucide-react";

const testimonials = [
  {
    name: "Anna Kowalska",
    role: "Mama zawodnika U12",
    text: "Najlepszy camp w Polsce. Syn wrócił z obozu z zupełnie nowym poziomem umiejętności.",
    rating: 5,
  },
  {
    name: "Tomasz Nowak",
    role: "Tata zawodnika U14",
    text: "Syn chce wracać co roku. Profesjonalne podejście trenerów i świetna atmosfera.",
    rating: 5,
  },
  {
    name: "Marta Wiśniewska",
    role: "Mama zawodniczki U10",
    text: "Córka pierwszy raz na campie i od razu się zakochała w hokeju. Polecam każdemu!",
    rating: 5,
  },
];

const coaches = [
  {
    name: "Erik Johansson",
    role: "Head Coach · Szwecja",
    image: "/trenerzy/trener-1.jpg",
  },
  {
    name: "Marek Zieliński",
    role: "Skills Coach · Polska",
    image: "/trenerzy/trener-2.jpg",
  },
  {
    name: "David Andersson",
    role: "Power Skating Coach · Szwecja",
    image: "/trenerzy/trener-3.jpg",
  },
  {
    name: "Kamil Nowicki",
    role: "Development Coach · Polska",
    image: "/trenerzy/trener-4.jpg",
  },
];

const sponsors = [
  {
    name: "Bauer",
    image: "/sponsorzy/sponsor-1.jpg",
  },
  {
    name: "CCM",
    image: "/sponsorzy/sponsor-2.jpg",
  },
  {
    name: "Warrior",
    image: "/sponsorzy/sponsor-3.png",
  },
  {
    name: "Tauron Arena",
    image: "/sponsorzy/sponsor-4.jpg",
  },
  {
    name: "Miasto Kraków",
    image: "/sponsorzy/sponsor-5.png",
  },
  {
    name: "PZHL",
    image: "/sponsorzy/sponsor-6.png",
  },
];

export default function TestimonialsSection() {
  const [coachIndex, setCoachIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const prevCoach = () => {
    setCoachIndex((prev) => (prev === 0 ? coaches.length - 1 : prev - 1));
  };

  const nextCoach = () => {
    setCoachIndex((prev) => (prev === coaches.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;

    const distance = touchStartX - touchEndX;

    if (distance > 50) nextCoach();
    if (distance < -50) prevCoach();
  };

  return (
    <>
      <section className="py-24 px-6 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3 text-[#FF7A1A]/80">
              Zaufanie
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Opinie uczestników
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#111111] border border-white/5 p-8 hover:border-white/15 transition-all"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                  "{t.text}"
                </p>

                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="zespol"
        className="py-24 px-6 bg-[#0A0A0A] border-t border-white/5"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3 text-[#FF7A1A]/80">
              Kadra
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Zespół
            </h2>
          </div>

          {/* MOBILE: carousel + swipe */}
          <div className="md:hidden max-w-md mx-auto">
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${coachIndex * 100}%)`,
                }}
              >
                {coaches.map((coach, i) => (
                  <div key={i} className="w-full shrink-0">
                    <div className="group bg-[#111111] border border-white/5 overflow-hidden hover:border-[#00E5FF]/30 transition-all">
                      <div className="aspect-[4/5] overflow-hidden bg-[#0f0f0f]">
                        <img
                          src={coach.image}
                          alt={coach.name}
                          className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                        />
                      </div>

                      <div className="p-6 text-center">
                        <h3 className="text-white font-bold text-lg">
                          {coach.name}
                        </h3>
                        <p className="text-gray-500 text-sm mt-1">
                          {coach.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {coaches.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCoachIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === coachIndex ? "w-6 bg-[#00E5FF]" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to coach ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP: 4 cards visible */}
          <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {coaches.map((coach, i) => (
              <div
                key={i}
                className="group bg-[#111111] border border-white/5 overflow-hidden hover:border-[#00E5FF]/30 transition-all"
              >
                <div className="aspect-[4/5] overflow-hidden bg-[#0f0f0f]">
                  <img
                    src={coach.image}
                    alt={coach.name}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 className="text-white font-bold text-lg">{coach.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{coach.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="kontakt"
        className="py-24 px-6 bg-[#0A0A0A] border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3 text-[#FF7A1A]/80">
            Kontakt
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Masz pytania?
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-10">
            <a
              href="tel:+48123456789"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5 text-[#00E5FF]" />
              <span className="text-sm">+48 123 456 789</span>
            </a>

            <a
              href="mailto:kontakt@ghshockey.pl"
              className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5 text-[#00E5FF]" />
              <span className="text-sm">kontakt@festiwalhokeja.pl</span>
            </a>
          </div>

          <a
            href="mailto:kontakt@festiwalhokeja.pl"
            className="inline-flex items-center gap-2 border border-[#00E5FF] text-[#00E5FF] px-8 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[#00E5FF] hover:text-black transition-all"
          >
            Skontaktuj się z nami
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section
        id="partnerzy"
        className="py-24 px-6 bg-[#0A0A0A] border-t border-white/5"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3 text-[#FF7A1A]/80">
              Zaufali nam
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Partnerzy
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
            {sponsors.map((sponsor, i) => (
              <div
                key={i}
                className="bg-white/15 backdrop-blur border border-white/10 min-h-[120px] p-5 flex flex-col items-center justify-center text-center hover:bg-white/10 transition-all"
              >
                <img
                  src={sponsor.image}
                  alt={sponsor.name}
                  className="max-h-10 w-auto object-contain mb-3"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="zapisy"
        className="py-32 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#0d1b2a] border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Gotowi zapisać dziecko?
          </h2>

          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
            Dołącz do setek rodzin, które zaufały naszemu sztabowi
          </p>

          <a
            href="#"
            className="inline-block bg-[#00E5FF] text-black font-bold text-sm uppercase tracking-wider px-12 py-4 hover:bg-[#00B8D4] transition-colors"
          >
            Zarezerwuj miejsce
          </a>
        </div>
      </section>

      <footer className="py-8 px-6 bg-[#0A0A0A] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-gray-600 text-xs">
            © 2026 Festiwal Hokeja. Wszelkie prawa zastrzeżone.
          </span>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-600 text-xs hover:text-gray-400 transition-colors"
            >
              Polityka prywatności
            </a>
            <a
              href="#"
              className="text-gray-600 text-xs hover:text-gray-400 transition-colors"
            >
              Regulamin
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}