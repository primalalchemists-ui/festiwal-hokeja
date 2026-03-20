"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  {
    label: "Wydarzenia",
    dropdown: [
      { label: "Obozy", href: "#wydarzenia" },
      { label: "Turnieje", href: "#wydarzenia" },
      { label: "Wymiany międzynarodowe", href: "#wydarzenia" },
    ],
  },
  { label: "Sponsorzy", href: "#partnerzy" },
  { label: "Akademia GHS", href: "#zespol" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#0A0A0A]/95 via-[#0d1b2a]/90 to-[#0A0A0A]/95 fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/5 px-2 md:px-0">
      <div className="max-w-[1500px] mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="/logo/festiwal-logo.png"
            alt="Festiwal Hokeja"
            className="h-12 w-auto"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            "dropdown" in link ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-colors">
                  {link.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-[#111111] border border-white/10 py-2">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            )
          )}

          <a
            href="#zapisy"
            className="border border-[#00E5FF] text-[#00E5FF] px-5 py-2 text-sm font-bold uppercase tracking-wider hover:bg-[#00E5FF] hover:text-black transition-all"
          >
            Zapisy
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <X className="w-10 h-10" /> : <Menu className="w-10 h-10" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-white/5 px-6 py-6 space-y-4">
          {navLinks.map((link) =>
            "dropdown" in link ? (
              <div key={link.label} className="space-y-2">
                <span className="text-sm font-medium uppercase tracking-wider text-gray-300">
                  {link.label}
                </span>

                <div className="pl-4 space-y-2">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-sm text-gray-500 hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-medium uppercase tracking-wider text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            )
          )}

          <a
            href="#zapisy"
            onClick={() => setMobileOpen(false)}
            className="inline-block border border-[#00E5FF] text-[#00E5FF] px-5 py-2 text-sm font-bold uppercase tracking-wider hover:bg-[#00E5FF] hover:text-black transition-all"
          >
            Zapisy
          </a>
        </div>
      )}
    </nav>
  );
}