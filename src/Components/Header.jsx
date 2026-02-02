"use client"

import { useState, useEffect } from "react"
import { X, Menu } from "lucide-react"
import { Link } from "react-router-dom"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const navLinks = [
    { href: "/about-us", label: "About Us", isRoute: true },
    { href: "/#reviews", label: "Reviews", isRoute: false },
    { href: "/#book", label: "Book Now", isRoute: false },
  ]

  return (
    <header className="bg-[#009688] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/assets/logo-main.png"
              alt="Flyanza"
              className="h-10 w-32 object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white hover:text-white/80 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-white/80 transition-colors font-medium"
                >
                  {link.label}
                </a>
              )
            ))}
            <Link
              to="/contact-us"
              className="px-5 py-2 bg-white text-[#009688] rounded font-semibold hover:bg-white/90 transition-colors"
            >
              CONNECT
            </Link>
          </nav>

          {/* Mobile Book Button & Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href="/#book"
              className="px-4 py-2 bg-white text-[#009688] rounded font-semibold text-sm hover:bg-white/90 transition-colors"
            >
              Book
            </a>
            <button
              onClick={() => setIsOpen(true)}
              className="text-white hover:text-white/80 focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#009688] z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-white/80 focus:outline-none"
            aria-label="Close menu"
          >
            <X className="h-8 w-8" />
          </button>
        </div>

        {/* Menu Links */}
        <nav className="flex flex-col items-center justify-center h-[calc(100%-80px)]">
          {navLinks.map((link, index) => (
            <div key={link.href} className="w-full text-center">
              {link.isRoute ? (
                <Link
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-5 text-white text-2xl font-semibold hover:text-white/80 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-5 text-white text-2xl font-semibold hover:text-white/80 transition-colors"
                >
                  {link.label}
                </a>
              )}
              {index < navLinks.length - 1 && (
                <hr className="w-32 mx-auto border-white/30" />
              )}
            </div>
          ))}
          <hr className="w-32 mx-auto border-white/30 mt-2" />
          <Link
            to="/contact-us"
            onClick={() => setIsOpen(false)}
            className="mt-8 px-10 py-4 bg-white text-[#009688] rounded font-bold text-xl hover:bg-white/90 transition-colors"
          >
            CONNECT
          </Link>
        </nav>
      </div>
    </header>
  )
}
