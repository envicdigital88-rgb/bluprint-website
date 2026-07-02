import React, { useEffect, useState, useRef } from 'react'
import { navLinks, business } from '../data/content'
import { Icon } from './Icon'
import logo from '../assets/logo.jpg'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Track active section
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-2 shadow-2xl'
            : 'py-4 bg-transparent'
        }`}
        style={{
          background: scrolled
            ? 'rgba(5, 13, 26, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(79, 195, 247, 0.12)' : 'none',
        }}
      >
        {/* Gradient line at top when scrolled */}
        {scrolled && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #1565C0, #4FC3F7, #1565C0, transparent)',
            }}
          />
        )}

        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group" id="nav-logo">
            <div className="relative">
              <img
                src={logo}
                alt="Bluprint Logo"
                className="w-12 h-12 rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                style={{
                  boxShadow: '0 0 0 2px rgba(79,195,247,0.2)',
                  filter: 'drop-shadow(0 4px 12px rgba(21,101,192,0.3))',
                }}
              />
              {/* Glow ring on hover */}
              <div
                className="absolute inset-0 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  boxShadow: '0 0 20px rgba(79, 195, 247, 0.5)',
                }}
              />
            </div>
            <span className="flex flex-col leading-none">
              <span
                className="font-display font-bold text-xl tracking-tight transition-all duration-300"
                style={{ color: '#4FC3F7' }}
              >
                {business.name}
              </span>
              <span
                className="text-xs font-medium mt-0.5 uppercase tracking-widest"
                style={{ color: 'rgba(79, 195, 247, 0.5)', fontSize: '0.65rem' }}
              >
                Property Services
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.href}
                  href={link.href}
                  id={`nav-link-${i}`}
                  className="relative font-body font-medium text-[14px] px-4 py-2.5 rounded-lg transition-all duration-300 group"
                  style={{
                    color: isActive ? '#4FC3F7' : 'rgba(255,255,255,0.75)',
                    background: isActive ? 'rgba(79,195,247,0.08)' : 'transparent',
                    animationDelay: `${0.05 + i * 0.05}s`,
                  }}
                >
                  {link.label}
                  {/* Active/hover underline */}
                  <span
                    className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300"
                    style={{
                      width: isActive ? '60%' : '0%',
                      background: 'linear-gradient(90deg, #1565C0, #4FC3F7)',
                      boxShadow: '0 0 8px rgba(79, 195, 247, 0.5)',
                    }}
                  />
                  {/* Hover underline (group hover) */}
                  <style>{`
                    #nav-link-${i}:hover span {
                      width: 60% !important;
                    }
                    #nav-link-${i}:hover {
                      color: #4FC3F7 !important;
                      background: rgba(79,195,247,0.06) !important;
                    }
                  `}</style>
                </a>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${business.phone.replace(/\s+/g, '')}`}
              className="transition-all duration-300 hover:scale-110 p-2 rounded-lg"
              style={{ color: 'rgba(255,255,255,0.7)' }}
              aria-label="Call us"
              id="nav-phone"
            >
              <Icon name="phone" className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              id="nav-cta"
              className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white shimmer"
              style={{
                background: 'linear-gradient(135deg, #1565C0 0%, #0B3D5F 100%)',
                boxShadow: '0 4px 20px rgba(21, 101, 192, 0.4), 0 0 0 1px rgba(79,195,247,0.2)',
                transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(21, 101, 192, 0.6), 0 0 20px rgba(79, 195, 247, 0.3)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(21, 101, 192, 0.4), 0 0 0 1px rgba(79,195,247,0.2)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span>Get Free Quote</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg transition-all duration-300"
            style={{ color: '#4FC3F7', background: 'rgba(79,195,247,0.08)' }}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(v => !v)}
            id="nav-mobile-toggle"
          >
            <Icon name={open ? 'close' : 'menu'} className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div
          className="lg:hidden fixed inset-x-0 z-40 animate-slide-in-down"
          style={{
            top: '64px',
            background: 'rgba(5, 13, 26, 0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(79, 195, 247, 0.15)',
            maxHeight: 'calc(100vh - 64px)',
            overflowY: 'auto',
          }}
        >
          {/* Gradient line */}
          <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, #4FC3F7, transparent)' }} />
          
          <nav className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between font-medium py-3.5 px-4 rounded-xl transition-all duration-300 stagger-item animate-fade-in-left"
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  borderBottom: '1px solid rgba(79,195,247,0.06)',
                  animationDelay: `${i * 0.05}s`,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#4FC3F7'
                  e.currentTarget.style.background = 'rgba(79,195,247,0.05)'
                  e.currentTarget.style.paddingLeft = '20px'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.8)'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.paddingLeft = '16px'
                }}
              >
                <span>{link.label}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            ))}
          </nav>
          <div className="px-5 pb-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex w-full justify-center items-center gap-2 py-4 rounded-xl font-semibold text-white shimmer"
              style={{
                background: 'linear-gradient(135deg, #1565C0 0%, #0B3D5F 100%)',
                boxShadow: '0 4px 20px rgba(21, 101, 192, 0.4)',
              }}
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </>
  )
}
