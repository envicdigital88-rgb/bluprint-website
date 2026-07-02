import React, { useRef, useState, useEffect } from 'react'
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { serviceAreas } from '../data/content'
import serviceAreaImage from '../assets/image 3.jpg'

function AreaColumn({ data, index, visible }) {
  return (
    <Box
      sx={{
        p: { xs: 3.5, sm: 4 },
        borderRadius: '24px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(79, 195, 247, 0.12)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${0.2 + index * 0.15}s`,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #1565C0, #4FC3F7)',
        },
        '&:hover': {
          border: '1px solid rgba(79, 195, 247, 0.3)',
          background: 'rgba(21, 101, 192, 0.06)',
          transform: 'translateY(-8px)',
          boxShadow: '0 25px 60px rgba(5,13,26,0.5), 0 0 30px rgba(79,195,247,0.08)',
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
        <Typography sx={{
          color: '#FFFFFF', fontWeight: 700, fontSize: '1.15rem',
          fontFamily: '"Poppins", sans-serif',
        }}>
          {data.title}
        </Typography>
        <Box sx={{
          px: 1.5, py: 0.5, borderRadius: '100px',
          background: 'rgba(79, 195, 247, 0.12)',
          border: '1px solid rgba(79, 195, 247, 0.25)',
        }}>
          <Typography sx={{ color: '#4FC3F7', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.1em' }}>
            {data.zone}
          </Typography>
        </Box>
      </Box>

      {/* Areas list with animated pins */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25 }}>
        {data.areas.map((area, i) => (
          <Box
            key={area}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.75,
              py: 0.75,
              px: 1.5,
              borderRadius: '100px',
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(79, 195, 247, 0.1)',
              transition: 'all 0.3s ease',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-15px)',
              transitionDelay: `${0.3 + index * 0.15 + i * 0.06}s`,
              '&:hover': {
                background: 'rgba(79, 195, 247, 0.08)',
                borderColor: 'rgba(79, 195, 247, 0.3)',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 12px rgba(21, 101, 192, 0.15)',
                '& .pin-icon': {
                  color: '#4FC3F7',
                  transform: 'scale(1.2)',
                },
              },
            }}
          >
            {/* Pulsing pin dot */}
            <Box sx={{ position: 'relative', flexShrink: 0 }}>
              <LocationOnIcon
                className="pin-icon"
                sx={{
                  fontSize: 14,
                  color: 'rgba(79, 195, 247, 0.6)',
                  transition: 'all 0.3s ease',
                }}
              />
            </Box>
            <Typography sx={{
              color: 'rgba(255,255,255,0.75)',
              fontSize: '0.82rem',
              fontWeight: 600,
              fontFamily: '"Montserrat", sans-serif',
              whiteSpace: 'nowrap',
            }}>
              {area}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default function ServiceAreas() {
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
      id="areas"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, #0A2540 0%, #050D1A 60%, #0A1929 100%)',
      }}
    >
      {/* Background decorations */}
      <Box sx={{
        position: 'absolute', top: '20%', right: '-8%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 195, 247, 0.07), transparent 70%)',
        filter: 'blur(80px)', animation: 'float 12s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '10%', left: '-8%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21, 101, 192, 0.08), transparent 70%)',
        filter: 'blur(70px)', animation: 'float 14s ease-in-out infinite reverse',
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
        <Box sx={{
          mb: 8, textAlign: 'center',
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
              Where We Work
            </Typography>
          </Box>

          <Typography variant="h2" sx={{
            mb: 2.5, fontWeight: 800, color: '#FFFFFF',
            fontSize: { xs: '2rem', md: '2.75rem' }, lineHeight: 1.2,
          }}>
            Service{' '}
            <Box component="span" sx={{
              background: 'linear-gradient(135deg, #4FC3F7 0%, #1565C0 60%, #4FC3F7 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 4s linear infinite',
            }}>
              Areas
            </Box>
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: '40rem', margin: '0 auto', fontSize: '1rem', lineHeight: 1.75 }}>
            Based in Glasgow and covering the surrounding areas — contact us to confirm coverage for your location.
          </Typography>
        </Box>

        {/* Cards */}
        <Grid container spacing={4} alignItems="stretch">
          {/* Image column */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                height: { xs: '320px', md: '100%' },
                minHeight: '380px',
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                border: '1px solid rgba(79, 195, 247, 0.15)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.97)',
                transition: 'all 0.9s cubic-bezier(0.25, 1, 0.5, 1) 0.1s',
                '&:hover img': { transform: 'scale(1.07)' },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #1565C0, #4FC3F7)',
                  zIndex: 2,
                },
              }}
            >
              <Box
                component="img"
                src={serviceAreaImage}
                alt="Service Areas"
                sx={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.7s ease',
                }}
              />
              {/* Overlay */}
              <Box sx={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(5,13,26,0.9) 0%, rgba(5,13,26,0.3) 50%, transparent 100%)',
              }} />

              {/* Bottom text */}
              <Box sx={{ position: 'absolute', bottom: 28, left: 28, right: 28, zIndex: 1 }}>
                {/* Animated pulsing pin */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                  <Box sx={{ position: 'relative' }}>
                    <Box sx={{
                      width: 10, height: 10, borderRadius: '50%', bgcolor: '#4FC3F7',
                      position: 'relative', zIndex: 1,
                    }} />
                    <Box sx={{
                      position: 'absolute', inset: -3, borderRadius: '50%',
                      border: '2px solid rgba(79, 195, 247, 0.4)',
                      animation: 'pulseRing 2s ease-out infinite',
                    }} />
                    <Box sx={{
                      position: 'absolute', inset: -3, borderRadius: '50%',
                      border: '2px solid rgba(79, 195, 247, 0.25)',
                      animation: 'pulseRing 2s ease-out infinite',
                      animationDelay: '1s',
                    }} />
                  </Box>
                  <Typography sx={{ color: '#4FC3F7', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                    Glasgow & Surrounding
                  </Typography>
                </Box>
                <Typography sx={{
                  color: '#FFFFFF', fontSize: '1.5rem', fontWeight: 800,
                  fontFamily: '"Poppins", sans-serif', lineHeight: 1.2,
                  textShadow: '0 2px 20px rgba(0,0,0,0.5)',
                }}>
                  Serving All of Greater Glasgow
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Area columns */}
          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <AreaColumn data={serviceAreas.primary} index={1} visible={visible} />
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex' }}>
            <AreaColumn data={serviceAreas.surrounding} index={2} visible={visible} />
          </Grid>
        </Grid>

        {/* CTA note */}
        <Box sx={{
          mt: 6, textAlign: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 0.8s',
        }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.92rem', fontStyle: 'italic' }}>
            Don't see your area listed?{' '}
            <Box component="a" href="#contact" sx={{
              color: '#4FC3F7', fontWeight: 700, textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': { textShadow: '0 0 15px rgba(79,195,247,0.5)' },
            }}>
              Contact us to check →
            </Box>
          </Typography>
        </Box>
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
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
      `}</style>
    </Box>
  )
}
