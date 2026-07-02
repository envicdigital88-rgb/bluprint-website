import React, { useEffect, useRef, useState } from 'react'
import { Box, Container, Typography, Grid, Stack, Chip } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import { aboutParagraphs } from '../data/content'
import sitePhoto from '../assets/image6.webp'

export default function About() {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const highlights = [
    'Expert Craftsmanship',
    'Licensed & Insured',
    'On-Time Delivery',
    'Quality Guaranteed',
  ]

  return (
    <Box
      ref={ref}
      component="section"
      id="about"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, #0A2540 0%, #050D1A 40%, #0A1929 100%)',
      }}
    >
      {/* Background decoration */}
      <Box sx={{
        position: 'absolute', top: '10%', right: '-8%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21, 101, 192, 0.1), transparent 70%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '5%', left: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 195, 247, 0.07), transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Ghost grid */}
      <Box sx={{
        position: 'absolute', inset: 0, opacity: 0.2, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(79,195,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,0.06) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left: Image */}
          <Grid item xs={12} lg={5}>
            <Box
              sx={{
                position: 'relative',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'all 1s cubic-bezier(0.25, 1, 0.5, 1) 0.2s',
              }}
            >
              {/* Decorative corner frame */}
              <Box sx={{
                position: 'absolute',
                top: -12, left: -12,
                width: '80px', height: '80px',
                borderTop: '3px solid #1565C0',
                borderLeft: '3px solid #1565C0',
                borderRadius: '12px 0 0 0',
                zIndex: 2,
              }} />
              <Box sx={{
                position: 'absolute',
                bottom: -12, right: -12,
                width: '80px', height: '80px',
                borderBottom: '3px solid #4FC3F7',
                borderRight: '3px solid #4FC3F7',
                borderRadius: '0 0 12px 0',
                zIndex: 2,
              }} />

              {/* Glow behind image */}
              <Box sx={{
                position: 'absolute',
                inset: 10,
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(21,101,192,0.3), rgba(79,195,247,0.2))',
                filter: 'blur(30px)',
                zIndex: 0,
              }} />

              {/* Main image */}
              <Box
                sx={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid rgba(79, 195, 247, 0.15)',
                  boxShadow: '0 30px 80px rgba(5, 13, 26, 0.6)',
                  transition: 'all 0.5s ease',
                  zIndex: 1,
                  '&:hover img': {
                    transform: 'scale(1.05)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(21,101,192,0.15), transparent 60%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                  },
                }}
              >
                <img
                  src={sitePhoto}
                  alt="Bluprint property services"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                />

                {/* Bottom overlay gradient */}
                <Box sx={{
                  position: 'absolute',
                  bottom: 0, left: 0, right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(5,13,26,0.8), transparent)',
                  zIndex: 2,
                }} />
              </Box>

              {/* Stats badge */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20, right: -10,
                  zIndex: 3,
                  background: 'rgba(5, 13, 26, 0.9)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(79, 195, 247, 0.2)',
                  borderRadius: '16px',
                  p: 2.5,
                  minWidth: '170px',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 20px rgba(79,195,247,0.1)',
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 0.8s ease 0.6s',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                  <WorkspacePremiumIcon sx={{ color: '#D4AF37', fontSize: 26 }} />
                  <Typography sx={{
                    fontWeight: 900,
                    fontSize: '2rem',
                    color: '#4FC3F7',
                    fontFamily: '"Poppins", sans-serif',
                    lineHeight: 1,
                    textShadow: '0 0 15px rgba(79,195,247,0.5)',
                  }}>
                    10+
                  </Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                  Years of Excellence
                </Typography>
                {/* Shimmer line */}
                <Box sx={{
                  mt: 1.5, height: '2px',
                  background: 'linear-gradient(90deg, #1565C0, #4FC3F7)',
                  borderRadius: '2px',
                }} />
              </Box>
            </Box>
          </Grid>

          {/* Right: Content */}
          <Grid item xs={12} lg={7}>
            <Box
              sx={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(40px)',
                transition: 'all 1s cubic-bezier(0.25, 1, 0.5, 1) 0.3s',
              }}
            >
              {/* Section label */}
              <Box
                className="section-label"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.75,
                  borderRadius: '100px',
                  background: 'rgba(79, 195, 247, 0.08)',
                  border: '1px solid rgba(79, 195, 247, 0.25)',
                  mb: 3,
                }}
              >
                <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#4FC3F7', animation: 'pulse 2s ease-in-out infinite' }} />
                <Typography sx={{ color: '#4FC3F7', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  About Bluprint
                </Typography>
              </Box>

              {/* Heading */}
              <Typography
                variant="h2"
                sx={{
                  mb: 4,
                  fontWeight: 800,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  lineHeight: 1.15,
                  color: '#FFFFFF',
                }}
              >
                Building Better Spaces{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #4FC3F7 0%, #1565C0 60%, #4FC3F7 100%)',
                    backgroundSize: '200% auto',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    animation: 'gradientShift 4s linear infinite',
                  }}
                >
                  with Quality
                </Box>
              </Typography>

              {/* Animated line separator */}
              <Box sx={{
                width: visible ? '120px' : '0px',
                height: '3px',
                background: 'linear-gradient(90deg, #1565C0, #4FC3F7)',
                borderRadius: '2px',
                mb: 4,
                transition: 'width 1s ease 0.5s',
              }} />

              {/* Description paragraphs */}
              <Stack spacing={2.5} sx={{ mb: 5 }}>
                {aboutParagraphs.slice(0, 2).map((p, i) => (
                  <Typography
                    key={i}
                    sx={{
                      color: 'rgba(255,255,255,0.65)',
                      lineHeight: 1.85,
                      fontSize: '0.98rem',
                      opacity: visible ? 1 : 0,
                      transform: visible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.8s ease ${0.5 + i * 0.15}s`,
                    }}
                  >
                    {p}
                  </Typography>
                ))}
              </Stack>

              {/* Highlights grid */}
              <Grid container spacing={2}>
                {highlights.map((highlight, i) => (
                  <Grid item xs={6} key={i}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        p: 1.5,
                        borderRadius: '12px',
                        border: '1px solid rgba(79, 195, 247, 0.1)',
                        background: 'rgba(21, 101, 192, 0.05)',
                        transition: 'all 0.3s ease',
                        opacity: visible ? 1 : 0,
                        transform: visible ? 'translateY(0)' : 'translateY(15px)',
                        transitionDelay: `${0.6 + i * 0.1}s`,
                        '&:hover': {
                          border: '1px solid rgba(79, 195, 247, 0.25)',
                          background: 'rgba(79, 195, 247, 0.06)',
                          transform: 'translateY(-3px)',
                          boxShadow: '0 8px 20px rgba(21, 101, 192, 0.15)',
                        },
                      }}
                    >
                      <Box sx={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: 'rgba(21, 101, 192, 0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <CheckCircleIcon sx={{ color: '#4FC3F7', fontSize: 16 }} />
                      </Box>
                      <Typography sx={{
                        color: 'rgba(255,255,255,0.85)',
                        fontWeight: 600,
                        fontSize: '0.85rem',
                        fontFamily: '"Montserrat", sans-serif',
                      }}>
                        {highlight}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </Box>
  )
}
