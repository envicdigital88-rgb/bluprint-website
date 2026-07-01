import React, { useEffect, useState } from 'react'
import { navLinks, business } from '../data/content'
import { Icon } from './Icon'
import logo from '../assets/logo.jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled 
          ? 'bg-white shadow-lg py-3 animate-slide-in-down' 
          : 'bg-white/95 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative">
            <img 
              src={logo} 
              alt="Bluprint Logo" 
              className="w-14 h-14 rounded-lg object-cover shadow-md group-hover:shadow-xl transition-smooth group-hover:scale-105"
            />
          </div>
          <span className="flex flex-col leading-none">
            <span className="font-display font-bold text-2xl tracking-tight text-cyan group-hover:text-blue transition-smooth">
              {business.name}
            </span>
            <span className="text-xs text-blue/60 font-medium mt-1 uppercase tracking-wider">
              Property Services
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body font-medium text-[15px] text-navy hover:text-navy hover:bg-navy/5 transition-smooth px-4 py-2.5 rounded-lg relative group animate-fade-in-down"
              style={{ animationDelay: `${0.1 + i * 0.05}s` }}
            >
              {link.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue group-hover:w-8 transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${business.phone.replace(/\s+/g, '')}`}
            className="text-navy hover:text-blue transition-smooth hover:scale-110"
            aria-label="Call us"
          >
            <Icon name="phone" className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue hover:bg-blue/90 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-smooth hover:scale-105 text-sm animate-fade-in-right"
          >
            Get Free Quote
          </a>
        </div>

        <button
          className="lg:hidden text-navy p-2 hover:bg-navy/5 rounded-lg transition-smooth"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} className="w-7 h-7" />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-navy/10 px-5 pb-6 pt-4 shadow-xl animate-slide-in-down">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-medium py-3.5 px-4 rounded-lg text-navy hover:text-navy hover:bg-navy/5 transition-smooth border-b border-navy/5 animate-fade-in-down stagger-item"
                style={{ animationDelay: `${0.1 + i * 0.05}s` }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full justify-center items-center gap-2 bg-blue text-white px-6 py-4 rounded-lg font-semibold shadow-md transition-smooth hover:bg-blue/90 animate-fade-in-up"
          >
            Get Free Quote
          </a>
        </div>
      )}
    </header>
  )
}
