import React, { useRef, useState, useEffect } from 'react'
import { Box, Container, Typography, Grid, Chip } from '@mui/material'
import { services } from '../data/content'
import { Icon } from './Icon'

export default function Services() {
  const [visible, setVisible] = useState(false)
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
      id="services"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, #050D1A 0%, #0A1929 50%, #0A2540 100%)',
      }}
    >
      {/* Background animated elements */}
      <Box sx={{
        position: 'absolute', top: '5%', left: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 195, 247, 0.07), transparent 70%)',
        filter: 'blur(80px)', animation: 'float 12s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '5%', right: '-5%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21, 101, 192, 0.1), transparent 70%)',
        filter: 'blur(60px)', animation: 'float 10s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      {/* Ghost grid */}
      <Box sx={{
        position: 'absolute', inset: 0, opacity: 0.2, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(79,195,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,0.06) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box
          sx={{
            mb: 8, textAlign: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
          }}
        >
          <Box
            sx={{
              display: 'inline-flex', alignItems: 'center', gap: 1,
              px: 2, py: 0.75, borderRadius: '100px', mb: 3,
              background: 'rgba(79, 195, 247, 0.08)',
              border: '1px solid rgba(79, 195, 247, 0.25)',
            }}
          >
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#4FC3F7', animation: 'pulse 2s ease-in-out infinite' }} />
            <Typography sx={{ color: '#4FC3F7', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              What We Do
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              mb: 2.5, fontWeight: 800, color: '#FFFFFF',
              fontSize: { xs: '2rem', md: '2.75rem' },
              lineHeight: 1.2,
            }}
          >
            Services Built Around{' '}
            <Box component="span" sx={{
              background: 'linear-gradient(135deg, #4FC3F7 0%, #1565C0 60%, #4FC3F7 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 4s linear infinite',
            }}>
              Your Project
            </Box>
          </Typography>
          <Typography sx={{
            color: 'rgba(255,255,255,0.55)', maxWidth: '42rem',
            margin: '0 auto', fontSize: '1.05rem', lineHeight: 1.75,
          }}>
            Coordinating reliable trades for residential and commercial projects — from a single
            repair to a complete renovation.
          </Typography>
        </Box>

        {/* Services Grid */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} lg={4} key={service.ref}>
              <Box
                className="card-tilt"
                sx={{
                  height: '100%',
                  borderRadius: '20px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(79, 195, 247, 0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  p: 4,
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(40px)',
                  transitionDelay: `${0.1 + index * 0.1}s`,
                  '&:hover': {
                    border: '1px solid rgba(79, 195, 247, 0.3)',
                    background: 'rgba(21, 101, 192, 0.08)',
                    boxShadow: '0 25px 60px rgba(5,13,26,0.5), 0 0 30px rgba(79,195,247,0.1)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: '3px',
                    background: 'linear-gradient(90deg, #1565C0, #4FC3F7)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.5s ease',
                  },
                  '&:hover::before': {
                    transform: 'scaleX(1)',
                  },
                  '&:hover .svc-icon': {
                    background: 'linear-gradient(135deg, #1565C0, #4FC3F7) !important',
                    transform: 'scale(1.1) rotate(8deg)',
                    boxShadow: '0 8px 25px rgba(21, 101, 192, 0.4)',
                  },
                  '&:hover .svc-icon svg': {
                    color: 'white',
                  },
                }}
              >
                {/* Ghost number */}
                <Box sx={{
                  position: 'absolute',
                  top: -10, right: 15,
                  fontSize: '5rem',
                  fontWeight: 900,
                  color: 'transparent',
                  WebkitTextStroke: '1px rgba(79, 195, 247, 0.06)',
                  lineHeight: 1,
                  userSelect: 'none',
                  pointerEvents: 'none',
                  fontFamily: '"Poppins", sans-serif',
                }}>
                  {String(index + 1).padStart(2, '0')}
                </Box>

                {/* Icon */}
                <Box sx={{ mb: 3, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <Box
                    className="svc-icon"
                    sx={{
                      width: 58,
                      height: 58,
                      borderRadius: '14px',
                      background: 'rgba(21, 101, 192, 0.15)',
                      border: '1px solid rgba(79, 195, 247, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      '& svg': { color: '#4FC3F7', transition: 'color 0.3s ease' },
                    }}
                  >
                    <Icon name={service.icon} className="w-6 h-6" />
                  </Box>
                </Box>

                {/* Title */}
                <Typography
                  sx={{
                    color: '#FFFFFF',
                    mb: 1.5,
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </Typography>

                {/* Description */}
                <Typography sx={{
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.75,
                  fontSize: '0.9rem',
                }}>
                  {service.description}
                </Typography>

                {/* Bottom accent line (shimmer) */}
                <Box sx={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0, height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(79,195,247,0.2), transparent)',
                }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        .card-tilt {
          transform-style: preserve-3d;
        }
        .card-tilt:hover {
          transform: perspective(1000px) rotateX(-3deg) rotateY(3deg) translateY(-8px);
        }
      `}</style>
    </Box>
  )
}
