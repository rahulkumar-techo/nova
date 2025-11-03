/**
 * 🌐 Responsive Glassmorphism Navbar (Next.js + Tailwind)
 * - Fully device responsive (mobile → 4K)
 * - Larger text on big screens
 * - Glass + linear button
 * - Mobile menu toggle
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiStar } from "react-icons/fi";
import AuthButton from "./AuthButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Docs", path: "/docs" },
    { name: "Showcase", path: "/showcase" },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <nav className="flex items-center justify-between gap-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-5 py-3 shadow-[0_0_25px_rgba(255,255,255,0.08)]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl">⚛️</span>
          <span className="text-white font-semibold text-lg md:text-xl lg:text-2xl">
            React Bits
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-gray-300 hover:text-white text-base lg:text-lg transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth sys */}
        <AuthButton />
        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="mt-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-4 text-base sm:text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
         <AuthButton/>
        </div>
      )}
    </header>
  );
}
