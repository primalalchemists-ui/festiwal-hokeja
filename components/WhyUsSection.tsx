import { Globe, User, Building2, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "Międzynarodowi trenerzy",
    description: "Kadra z doświadczeniem w ligach NHL, KHL i europejskich",
  },
  {
    icon: User,
    title: "Indywidualne podejście",
    description: "Małe grupy treningowe i personalizowany plan rozwoju",
  },
  {
    icon: Building2,
    title: "Nowoczesna infrastruktura",
    description: "Najlepsze lodowiska i zaplecze treningowe w Polsce",
  },
  {
    icon: TrendingUp,
    title: "Realny rozwój zawodnika",
    description: "Mierzalne postępy i profesjonalna analiza umiejętności",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 px-6 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.3em] mb-3 text-[#FF7A1A]/80">
            Przewaga
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Dlaczego my
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group bg-[#111111]/80 border border-white/6 p-8 text-center hover:border-[#00E5FF]/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-6 border border-[#00E5FF]/30 flex items-center justify-center group-hover:bg-[#00E5FF]/10 transition-colors">
                  <Icon className="w-6 h-6 text-[#00E5FF]" />
                </div>

                <h3 className="text-white font-bold text-base mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}