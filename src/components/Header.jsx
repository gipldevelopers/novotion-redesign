"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blog", href: "/blogs" },
  { name: "Case Studies", href: "/case-studies" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* ✅ Logo - unchanged */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/logos/novotion_01.png"
              alt="Novotion Logo"
              width={150}
              height={32}
              priority
              className="rounded-lg"
            />
          </Link>

          {/* ✅ Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`relative px-6 py-3 rounded-xl transition-all duration-300 group font-medium text-sm ${
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50 shadow-md"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300 ${
                      pathname === item.href
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                    }`}
                  ></span>
                </Link>
              </div>
            ))}
          </div>

          {/* ✅ Enhanced Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group relative inline-flex items-center px-8 py-3 font-semibold rounded-xl text-sm overflow-hidden transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10 flex items-center transition-all duration-300 group-hover:translate-x-1">
                Contact Us
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>

          {/* ✅ Enhanced Mobile Menu Button */}
          <button
            className="lg:hidden relative w-12 h-12 group bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative flex flex-col items-center justify-center w-full h-full space-y-1.5">
              <span
                className={`block w-6 h-0.5 transform transition-all duration-300 bg-gray-900 rounded-full ${
                  menuOpen ? "rotate-45 translate-y-2 bg-blue-500" : "group-hover:bg-blue-500"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 transition-all duration-300 bg-gray-900 rounded-full ${
                  menuOpen ? "opacity-0" : "opacity-100 group-hover:bg-blue-500"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 transform transition-all duration-300 bg-gray-900 rounded-full ${
                  menuOpen ? "-rotate-45 -translate-y-2 bg-blue-500" : "group-hover:bg-blue-500"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* ✅ Enhanced Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-2xl transform transition-transform duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="px-6 py-8 space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center px-6 py-4 rounded-xl font-medium text-lg border border-transparent transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:shadow-md ${
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50 border-blue-200 shadow-md"
                      : "text-gray-700"
                  }`}
                >
                  <span className="flex-1">{item.name}</span>
                  <svg
                    className="w-4 h-4 text-gray-400 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            ))}

            {/* ✅ Enhanced Mobile CTA */}
            <div className="pt-6">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="group relative inline-flex items-center justify-center w-full px-8 py-4 font-semibold rounded-xl text-base overflow-hidden transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10 flex items-center transition-all duration-300 group-hover:translate-x-2">
                  Contact Us
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}