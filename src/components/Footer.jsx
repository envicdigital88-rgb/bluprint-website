import React from 'react'
import { business, navLinks } from '../data/content'
import { Icon } from './Icon'
import logo from '../assets/logo.jpg'

export default function Footer() {
  const telHref = `tel:${business.phone.replace(/\s+/g, '')}`

  return (
    <footer className="bg-navy text-white/70">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Bluprint Logo" 
              className="w-10 h-10 rounded-sm object-cover transition-smooth hover:scale-110"
            />
            <span className="font-display font-bold text-lg text-white">{business.name}</span>
          </div>
          <p className="mt-4 text-[14px] leading-relaxed max-w-xs">{business.bio}</p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <p className="dwg-label text-cyan mb-4">Navigate</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[14px]">
            {navLinks.map((link, i) => (
              <li key={link.href} className="animate-fade-in-up stagger-item" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                <a href={link.href} className="hover:text-white transition-smooth">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="dwg-label text-cyan mb-4">Contact</p>
          <ul className="space-y-2.5 text-[14px]">
            <li>{business.location}</li>
            <li>
              <a href={telHref} className="hover:text-white transition-smooth">{business.phone}</a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="hover:text-white transition-smooth break-all">
                {business.email}
              </a>
            </li>
            <li>{business.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12.5px] text-white/40 animate-fade-in-up">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p className="dwg-label !tracking-[0.14em]">
            Property Maintenance · Renovations · Project Management — Glasgow
          </p>
        </div>
      </div>
    </footer>
  )
}
