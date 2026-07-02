import React from 'react'
import { business, navLinks } from '../data/content'
import logo from '../assets/logo.jpg'

export default function Footer() {
  const telHref = `tel:${business.phone.replace(/\s+/g, '')}`

  const linkHoverStyle = (color = '#4FC3F7') => ({
    onMouseEnter: e => { e.currentTarget.style.color = color; e.currentTarget.style.paddingLeft = '6px' },
    onMouseLeave: e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.paddingLeft = '0' },
  })

  const iconLinkHover = () => ({
    onMouseEnter: e => {
      e.currentTarget.style.background = 'rgba(21, 101, 192, 0.3)'
      e.currentTarget.style.borderColor = 'rgba(79, 195, 247, 0.5)'
      e.currentTarget.style.transform = 'translateY(-3px)'
      e.currentTarget.style.boxShadow = '0 0 15px rgba(79,195,247,0.3)'
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = 'rgba(21, 101, 192, 0.12)'
      e.currentTarget.style.borderColor = 'rgba(79, 195, 247, 0.2)'
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.boxShadow = 'none'
    },
  })

  return (
    <footer
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #050D1A 0%, #020810 100%)',
        color: 'rgba(255,255,255,0.5)',
        borderTop: '1px solid rgba(79, 195, 247, 0.08)',
      }}
    >
      {/* Top gradient line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #1565C0, #4FC3F7, #1565C0, transparent)',
      }} />

      {/* Ghost grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.08,
        backgroundImage: 'linear-gradient(rgba(79,195,247,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,0.15) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Glow blob */}
      <div style={{
        position: 'absolute', bottom: '-20%', left: '30%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21, 101, 192, 0.1), transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '60px 32px 32px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '48px', marginBottom: '48px' }}>

          {/* Brand column */}
          <div>
            <a href="#home" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', marginBottom: '18px', textDecoration: 'none' }}>
              <img
                src={logo}
                alt="Bluprint Logo"
                style={{
                  width: '44px', height: '44px', borderRadius: '10px', objectFit: 'cover',
                  boxShadow: '0 0 0 2px rgba(79,195,247,0.2), 0 4px 15px rgba(21,101,192,0.3)',
                  transition: 'all 0.3s ease',
                }}
              />
              <span style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 800, fontSize: '1.2rem', color: '#4FC3F7' }}>
                {business.name}
              </span>
            </a>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '250px', color: 'rgba(255,255,255,0.4)', marginBottom: '24px' }}>
              {business.bio}
            </p>

            {/* Icon buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {/* Phone */}
              <a
                href={telHref}
                aria-label="Call us"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', borderRadius: '10px',
                  background: 'rgba(21, 101, 192, 0.12)',
                  border: '1px solid rgba(79, 195, 247, 0.2)',
                  color: '#4FC3F7', textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                {...iconLinkHover()}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13 19.79 19.79 0 0 1 1 4.18A2 2 0 0 1 2.96 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${business.whatsapp.replace(/[^\d]/g, '')}`}
                target="_blank" rel="noreferrer"
                aria-label="WhatsApp"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', borderRadius: '10px',
                  background: 'rgba(37, 211, 102, 0.08)',
                  border: '1px solid rgba(37, 211, 102, 0.2)',
                  color: '#25D366', textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.18)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 12px rgba(37,211,102,0.25)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
              {/* Email */}
              <a
                href={`mailto:${business.email}`}
                aria-label="Email us"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', borderRadius: '10px',
                  background: 'rgba(21, 101, 192, 0.12)',
                  border: '1px solid rgba(79, 195, 247, 0.2)',
                  color: '#4FC3F7', textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                {...iconLinkHover()}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#4FC3F7',
              fontFamily: '"Roboto Mono", monospace', marginBottom: '20px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{ width: '20px', height: '1px', background: 'linear-gradient(90deg, #1565C0, #4FC3F7)', display: 'inline-block' }} />
              Navigate
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      display: 'inline-block',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#4FC3F7'; e.currentTarget.style.paddingLeft = '6px' }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.paddingLeft = '0' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p style={{
              fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: '#4FC3F7',
              fontFamily: '"Roboto Mono", monospace', marginBottom: '20px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{ width: '20px', height: '1px', background: 'linear-gradient(90deg, #1565C0, #4FC3F7)', display: 'inline-block' }} />
              Contact
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.875rem' }}>
              <li style={{ color: 'rgba(255,255,255,0.4)' }}>{business.location}</li>
              <li>
                <a href={telHref}
                  style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'all 0.3s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#4FC3F7' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                >{business.phone}</a>
              </li>
              <li>
                <a href={`mailto:${business.email}`}
                  style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'all 0.3s ease', wordBreak: 'break-all' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#4FC3F7' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
                >{business.email}</a>
              </li>
              <li style={{ color: 'rgba(255,255,255,0.4)' }}>{business.hours}</li>
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(79,195,247,0.15), rgba(21,101,192,0.2), rgba(79,195,247,0.15), transparent)', marginBottom: '24px' }} />

        {/* Bottom bar */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'center',
          justifyContent: 'space-between', gap: '12px',
          fontSize: '0.75rem',
        }}>
          <p style={{ color: 'rgba(255,255,255,0.2)', margin: 0 }}>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p style={{
            fontFamily: '"Roboto Mono", monospace',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            fontSize: '0.65rem', color: 'rgba(79,195,247,0.25)', margin: 0,
          }}>
            Property Maintenance · Renovations · Project Management — Glasgow
          </p>
        </div>
      </div>
    </footer>
  )
}
