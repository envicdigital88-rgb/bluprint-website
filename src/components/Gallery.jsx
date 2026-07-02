import React, { useState, useRef, useEffect } from 'react'
import { Box, Container, Typography } from '@mui/material'
import image1 from '../assets/image 1.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.webp'
import image2 from '../assets/image2.jpg'
import image7 from '../assets/image 7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image3 from '../assets/image 3.jpg'

const galleryImages = [
  { src: image1, label: 'Professional Site Work', category: 'Maintenance' },
  { src: image4, label: 'Expert Craftsmanship', category: 'Craftsmanship' },
  { src: image5, label: 'Quality Renovation', category: 'Renovations' },
  { src: image6, label: 'Modern Installations', category: 'Renovations' },
  { src: image2, label: 'Professional Service', category: 'Maintenance' },
  { src: image7, label: 'Property Refurbishment', category: 'Renovations' },
  { src: image8, label: 'General Building', category: 'Maintenance' },
  { src: image9, label: 'Precision Finishing', category: 'Craftsmanship' },
  { src: image3, label: 'Expert Project Planning', category: 'Craftsmanship' },
]

const categories = ['All', 'Renovations', 'Maintenance', 'Craftsmanship']

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  const filteredImages = galleryImages.filter(
    img => activeFilter === 'All' || img.category === activeFilter
  )

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  // Close lightbox on escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setLightbox(null) }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <>
      <Box
        ref={ref}
        component="section"
        id="gallery"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          py: { xs: 10, md: 16 },
          background: 'linear-gradient(180deg, #0A2540 0%, #050D1A 60%, #0A1929 100%)',
        }}
      >
        {/* Background glow blobs */}
        <Box sx={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '700px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(21, 101, 192, 0.06), transparent 65%)',
          filter: 'blur(100px)', pointerEvents: 'none',
        }} />

        {/* Ghost grid */}
        <Box sx={{
          position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none',
          backgroundImage: 'linear-gradient(rgba(79,195,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,0.06) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <Box sx={{
            mb: 7, textAlign: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
          }}>
            <Box sx={{
              display: 'inline-flex', alignItems: 'center', gap: 1,
              px: 2, py: 0.75, borderRadius: '100px', mb: 3,
              background: 'rgba(79, 195, 247, 0.08)',
              border: '1px solid rgba(79, 195, 247, 0.25)',
            }}>
              <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#4FC3F7', animation: 'pulse 2s ease-in-out infinite' }} />
              <Typography sx={{ color: '#4FC3F7', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                Our Gallery
              </Typography>
            </Box>
            <Typography variant="h2" sx={{
              mb: 2, fontWeight: 800, color: '#FFFFFF',
              fontSize: { xs: '2rem', md: '2.75rem' },
            }}>
              Quality You Can{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #4FC3F7 0%, #1565C0 60%, #4FC3F7 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradientShift 4s linear infinite',
              }}>See</Box>
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: '40rem', margin: '0 auto', fontSize: '1rem', lineHeight: 1.75 }}>
              Take a look at our recent projects — quality, craftsmanship, and attention to detail on every job.
            </Typography>
          </Box>

          {/* Filter Tabs */}
          <Box sx={{
            display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5, mb: 7,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.8s ease 0.2s',
          }}>
            {categories.map(cat => {
              const isActive = activeFilter === cat
              return (
                <Box
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  sx={{
                    cursor: 'pointer',
                    py: 1, px: 3,
                    borderRadius: '100px',
                    background: isActive ? 'linear-gradient(135deg, #1565C0, #0B3D5F)' : 'rgba(255,255,255,0.04)',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(79, 195, 247, 0.4)' : 'rgba(79, 195, 247, 0.1)',
                    color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.5)',
                    fontWeight: 700,
                    fontSize: '0.82rem',
                    fontFamily: '"Montserrat", sans-serif',
                    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                    boxShadow: isActive ? '0 8px 25px rgba(21, 101, 192, 0.35), 0 0 15px rgba(79, 195, 247, 0.15)' : 'none',
                    letterSpacing: '0.03em',
                    '&:hover': {
                      color: '#4FC3F7',
                      borderColor: 'rgba(79, 195, 247, 0.3)',
                      background: isActive ? 'linear-gradient(135deg, #1565C0, #0B3D5F)' : 'rgba(79, 195, 247, 0.05)',
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  {cat}
                </Box>
              )
            })}
          </Box>

          {/* Gallery Grid */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
            gap: 3,
          }}>
            {filteredImages.map((image, index) => (
              <Box
                key={`${image.label}-${activeFilter}`}
                onClick={() => setLightbox(image)}
                sx={{
                  position: 'relative',
                  height: index % 3 === 1 ? { xs: '280px', md: '380px' } : '300px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid rgba(79, 195, 247, 0.1)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
                  transition: `all 0.7s cubic-bezier(0.25, 1, 0.5, 1) ${0.05 + index * 0.08}s`,
                  '&:hover': {
                    border: '1px solid rgba(79, 195, 247, 0.3)',
                    boxShadow: '0 25px 60px rgba(5,13,26,0.6), 0 0 30px rgba(79,195,247,0.15)',
                  },
                  '&:hover img': { transform: 'scale(1.08)' },
                  '&:hover .gallery-overlay': { opacity: 1 },
                  '&:hover .gallery-zoom': { opacity: 1, transform: 'translate(-50%,-50%) scale(1)' },
                  '&:hover .gallery-label': { transform: 'translateY(0)' },
                }}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.label}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    transition: 'transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                />

                {/* Dark overlay */}
                <Box
                  className="gallery-overlay"
                  sx={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(5,13,26,0.9) 0%, rgba(5,13,26,0.3) 50%, transparent 100%)',
                    opacity: 0.5,
                    transition: 'opacity 0.4s ease',
                  }}
                />

                {/* Zoom icon */}
                <Box
                  className="gallery-zoom"
                  sx={{
                    position: 'absolute', top: '45%', left: '50%',
                    transform: 'translate(-50%,-50%) scale(0.8)',
                    opacity: 0,
                    width: 48, height: 48, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.9)',
                    color: '#1565C0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    zIndex: 2,
                    boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </Box>

                {/* Label */}
                <Box
                  className="gallery-label"
                  sx={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    p: '14px 18px',
                    transform: 'translateY(10px)',
                    transition: 'transform 0.4s ease',
                    zIndex: 1,
                  }}
                >
                  <Typography sx={{
                    color: 'rgba(79,195,247,0.8)', fontSize: '0.65rem',
                    fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', mb: 0.3,
                  }}>
                    {image.category}
                  </Typography>
                  <Typography sx={{
                    color: '#FFFFFF', fontSize: '0.92rem',
                    fontWeight: 700, fontFamily: '"Poppins", sans-serif',
                  }}>
                    {image.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Lightbox */}
      {lightbox && (
        <Box
          onClick={() => setLightbox(null)}
          sx={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(5, 13, 26, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            animation: 'fadeIn 0.3s ease',
            p: 3,
          }}
        >
          <Box
            onClick={e => e.stopPropagation()}
            sx={{
              position: 'relative', maxWidth: '90vw', maxHeight: '85vh',
              borderRadius: '20px', overflow: 'hidden',
              border: '1px solid rgba(79, 195, 247, 0.2)',
              boxShadow: '0 50px 100px rgba(0,0,0,0.8), 0 0 60px rgba(79,195,247,0.1)',
              animation: 'scaleIn 0.3s ease',
            }}
          >
            <img
              src={lightbox.src}
              alt={lightbox.label}
              style={{ display: 'block', maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }}
            />
            <Box sx={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              p: 2, background: 'rgba(5,13,26,0.9)', backdropFilter: 'blur(10px)',
            }}>
              <Typography sx={{ color: '#4FC3F7', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                {lightbox.category}
              </Typography>
              <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontFamily: '"Poppins", sans-serif' }}>
                {lightbox.label}
              </Typography>
            </Box>
          </Box>
          {/* Close button */}
          <Box
            onClick={() => setLightbox(null)}
            sx={{
              position: 'fixed', top: 20, right: 20,
              width: 44, height: 44, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'white',
              transition: 'all 0.3s ease',
              '&:hover': { background: 'rgba(255,255,255,0.2)', transform: 'scale(1.1)' },
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </Box>
        </Box>
      )}

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </>
  )
}
