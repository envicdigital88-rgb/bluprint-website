import React, { useRef, useEffect, useState } from 'react'
import { business, testimonials } from '../data/content'
import { Box, Container, Typography, Card, CardContent, Rating, Avatar } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

// Duplicate testimonials for seamless infinite scroll
const allTestimonials = [...testimonials, ...testimonials]

export default function Reviews() {
  const [visible, setVisible] = useState(false)
  const [paused, setPaused] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      component="section"
      id="reviews"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, #050D1A 0%, #0B3D5F 50%, #050D1A 100%)',
      }}
    >
      {/* Gradient lines */}
      <Box sx={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #1565C0, #4FC3F7, #1565C0, transparent)',
      }} />
      <Box sx={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #4FC3F7, #1565C0, #4FC3F7, transparent)',
      }} />

      {/* Ghost grid */}
      <Box sx={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(79,195,247,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Glow blobs */}
      <Box sx={{
        position: 'absolute', top: '20%', left: '20%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21, 101, 192, 0.2), transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '20%', right: '20%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 195, 247, 0.12), transparent 65%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{
          textAlign: 'center', mb: 10,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.9s cubic-bezier(0.25, 1, 0.5, 1)',
        }}>
          <Box sx={{
            display: 'inline-flex', alignItems: 'center', gap: 1,
            px: 2, py: 0.75, borderRadius: '100px', mb: 3,
            background: 'rgba(79, 195, 247, 0.1)',
            border: '1px solid rgba(79, 195, 247, 0.3)',
          }}>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#4FC3F7', animation: 'pulse 2s ease-in-out infinite' }} />
            <Typography sx={{ color: '#4FC3F7', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Reviews & Testimonials
            </Typography>
          </Box>

          {/* Big rating stat */}
          <Box sx={{ mb: 3 }}>
            <Typography sx={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 900,
              fontSize: { xs: '4rem', md: '6rem' },
              lineHeight: 1,
              background: 'linear-gradient(135deg, #4FC3F7 0%, #1565C0 60%, #4FC3F7 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 3s linear infinite',
            }}>
              {business.rating}
            </Typography>
          </Box>

          {/* Stars */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 2 }}>
            {[1,2,3,4,5].map(s => (
              <Box key={s} sx={{
                fontSize: '1.5rem',
                color: '#D4AF37',
                textShadow: '0 0 10px rgba(212,175,55,0.5)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'scale(1)' : 'scale(0)',
                transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + s * 0.1}s`,
              }}>★</Box>
            ))}
          </Box>

          <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, mb: 2 }}>
            Based on {business.reviewCount} Reviews
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: '500px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.7 }}>
            Customers consistently recommend Bluprint for reliable, professional service — from
            quick maintenance jobs to complete renovation projects.
          </Typography>
        </Box>
      </Container>

      {/* Infinite Marquee */}
      <Box
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        sx={{
          position: 'relative',
          overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.8s ease 0.3s',
          // Fade edges
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: '120px',
            background: 'linear-gradient(to right, #050D1A, transparent)',
            zIndex: 2, pointerEvents: 'none',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            right: 0, top: 0, bottom: 0,
            width: '120px',
            background: 'linear-gradient(to left, #050D1A, transparent)',
            zIndex: 2, pointerEvents: 'none',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 3,
            width: 'max-content',
            animation: `marquee 40s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
            py: 2,
          }}
        >
          {allTestimonials.map((t, index) => (
            <Card
              key={index}
              sx={{
                width: '340px',
                flexShrink: 0,
                background: 'rgba(255, 255, 255, 0.04)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(79, 195, 247, 0.12)',
                borderRadius: '20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  border: '1px solid rgba(79, 195, 247, 0.3)',
                  background: 'rgba(21, 101, 192, 0.08)',
                  transform: 'translateY(-5px)',
                  boxShadow: '0 20px 50px rgba(5,13,26,0.5), 0 0 20px rgba(79,195,247,0.1)',
                },
              }}
            >
              <CardContent sx={{ p: 3.5, display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Quote icon */}
                <FormatQuoteIcon sx={{
                  fontSize: 36,
                  color: 'rgba(79, 195, 247, 0.35)',
                  transform: 'rotate(180deg)',
                }} />

                {/* Stars */}
                <Box sx={{ display: 'flex', gap: 0.5 }}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Box key={s} sx={{
                      fontSize: '0.9rem', color: '#D4AF37',
                      textShadow: '0 0 8px rgba(212,175,55,0.4)',
                    }}>★</Box>
                  ))}
                </Box>

                {/* Review text */}
                <Typography sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.9rem',
                  lineHeight: 1.75,
                  flex: 1,
                  fontStyle: 'italic',
                }}>
                  "{t.review}"
                </Typography>

                {/* Author */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, pt: 1, borderTop: '1px solid rgba(79,195,247,0.1)' }}>
                  <Avatar sx={{
                    width: 38, height: 38,
                    background: 'linear-gradient(135deg, #1565C0, #4FC3F7)',
                    fontSize: '0.95rem', fontWeight: 700,
                    boxShadow: '0 4px 10px rgba(21,101,192,0.3)',
                  }}>
                    {t.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.9rem', fontFamily: '"Poppins", sans-serif' }}>
                      {t.name}
                    </Typography>
                    <Typography sx={{ color: 'rgba(79,195,247,0.7)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                      Verified Customer
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </Box>
  )
}
