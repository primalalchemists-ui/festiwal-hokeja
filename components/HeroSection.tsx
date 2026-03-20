"use client";

import { useEffect, useMemo, useState } from "react";

function useCountdown(targetTime: number) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const tick = () => {
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetTime]);

  return timeLeft;
}

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false);

  const targetTime = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 12);
    return date.getTime();
  }, []);

  const { days, hours, minutes, seconds } = useCountdown(targetTime);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">

      {/* VIDEO */}
      {!videoError && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero/zwiastun.mp4"
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
        />
      )}

      {/* FALLBACK IMAGE */}
      {videoError && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/banner.png')",
          }}
        />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0A0A0A] to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
        <p className="text-sm font-bold uppercase tracking-[0.3em] mb-6 text-[#00E5FF] text-[#FF7A1A]">
          Festiwal Hokeja
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6">
          Tu zaczyna się przewaga
          <br />
          <span className="text-[#00E5FF]">Twojego dziecka</span>
        </h1>

        <p className="text-gray-400 text-lg md:text-xl font-medium mb-10 max-w-2xl mx-auto">
          Międzynarodowe campy hokejowe dla dzieci i młodzieży
        </p>

        <a
          href="#zapisy"
          className="inline-block bg-[#00E5FF] text-black font-bold text-sm uppercase tracking-wider px-10 py-4 hover:bg-[#00B8D4] transition-colors"
        >
          Zarezerwuj miejsce
        </a>

        <div className="mt-16">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
            Start najbliższego obozu za
          </p>

          <div className="flex items-center justify-center gap-4 md:gap-6">
            {[
              { value: days, label: "Dni" },
              { value: hours, label: "Godz" },
              { value: minutes, label: "Min" },
              { value: seconds, label: "Sek" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl md:text-5xl font-extrabold text-white tabular-nums">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}