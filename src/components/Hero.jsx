import React, { useEffect, useRef, useState } from 'react'
import { Button, Stack, Container, Box, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { business, heroTags } from '../data/content'
import heroBg from '../assets/image 1.jpg'

// Animated counter hook
function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [target, duration, start])
  return count
}

// Typewriter hook
function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    let timeout

    if (!deleting && charIndex < word.length) {
      timeout = setTimeout(() => setCharIndex(c => c + 1), speed)
    } else if (!deleting && charIndex === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(c => c - 1), speed / 2)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setWordIndex(i => (i + 1) % words.length)
    }

    setDisplay(word.slice(0, charIndex))
    return () => clearTimeout(timeout)
  }, [charIndex, deleting, wordIndex, words, speed, pause])

  return display
}

const stats = [
  { value: 100, suffix: '%', label: 'Recommended' },
  { value: 10, suffix: '+', label: 'Projects Done' },
  { value: 5, suffix: '★', label: 'Star Rating' },
]

const taglines = [
  'Property Maintenance',
  'Home Renovations',
  'Project Management',
  'Trusted Local Trades',
]

export default function Hero() {
  const telHref = `tel:${business.phone.replace(/\s+/g, '')}`
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^\d]/g, '')}`
  const [mounted, setMounted] = useState(false)
  const [statsStarted, setStatsStarted] = useState(false)
  const sectionRef = useRef(null)

  const typewriter = useTypewriter(taglines, 70, 2200)

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
      setStatsStarted(true)
    }, 400)
    return () => clearTimeout(timer)
  }, [])

  const c0 = useCountUp(100, 2000, statsStarted)
  const c1 = useCountUp(10, 1500, statsStarted)

  // Generate particles
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    left: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.2,
  }))

  return (
    <Box
      component="section"
      id="home"
      ref={sectionRef}
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 10, md: 0 },
        background: 'linear-gradient(135deg, #050D1A 0%, #0A2540 45%, #0B3D5F 100%)',
      }}
    >
      {/* Background hero image with overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.12,
          animation: 'slowZoom 25s ease-in-out infinite alternate',
        }}
      />

      {/* Animated Grid */}
      <Box
        className="grid-bg"
        sx={{
          position: 'absolute',
          inset: 0,
          opacity: 0.5,
          pointerEvents: 'none',
        }}
      />

      {/* Floating Particles */}
      <Box className="particles-bg">
        {particles.map(p => (
          <Box
            key={p.id}
            className="particle"
            sx={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              background: p.id % 3 === 0
                ? 'rgba(79, 195, 247, 0.8)'
                : p.id % 3 === 1
                ? 'rgba(21, 101, 192, 0.8)'
                : 'rgba(212, 175, 55, 0.6)',
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </Box>

      {/* Decorative glow blobs */}
      <Box sx={{
        position: 'absolute', top: '15%', right: '8%',
        width: '450px', height: '450px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21, 101, 192, 0.18) 0%, transparent 65%)',
        filter: 'blur(60px)',
        animation: 'float 10s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: '350px', height: '350px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 195, 247, 0.12) 0%, transparent 65%)',
        filter: 'blur(50px)',
        animation: 'float 14s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      {/* Decorative geometric shapes */}
      <Box sx={{
        position: 'absolute', top: '25%', right: '15%',
        width: '200px', height: '200px',
        border: '1px solid rgba(79, 195, 247, 0.08)',
        borderRadius: '30px',
        transform: 'rotate(15deg)',
        animation: 'float 12s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '20%', right: '5%',
        width: '120px', height: '120px',
        border: '1px solid rgba(21, 101, 192, 0.15)',
        borderRadius: '50%',
        animation: 'float 9s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ py: { xs: 8, md: 10 }, pt: { xs: 14, md: 16 }, maxWidth: '750px' }}>

          {/* Section badge */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2,
              py: 0.75,
              borderRadius: '100px',
              background: 'rgba(79, 195, 247, 0.1)',
              border: '1px solid rgba(79, 195, 247, 0.25)',
              mb: 3.5,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s cubic-bezier(0.25, 1, 0.5, 1) 0.1s',
            }}
          >
            <Box sx={{
              width: 7, height: 7, borderRadius: '50%', bgcolor: '#4FC3F7',
              animation: 'pulse 2s ease-in-out infinite',
            }} />
            <Typography sx={{
              color: '#4FC3F7', fontSize: '0.72rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              fontFamily: '"Montserrat", sans-serif',
            }}>
              Glasgow, Scotland, UK
            </Typography>
          </Box>

          {/* Main Heading */}
          <Typography
            variant="h1"
            sx={{
              mb: 2.5,
              fontWeight: 800,
              fontSize: { xs: '2.4rem', sm: '3rem', md: '3.75rem', lg: '4.5rem' },
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.2s',
            }}
          >
            Professional<br />
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #4FC3F7 0%, #1565C0 50%, #4FC3F7 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'gradientShift 4s linear infinite',
              }}
            >
              Property Services
            </Box>
          </Typography>

          {/* Typewriter tagline */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 4,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.4s',
              minHeight: '40px',
            }}
          >
            <Box sx={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, #1565C0, #4FC3F7)', borderRadius: '2px', flexShrink: 0 }} />
            <Typography
              sx={{
                color: '#4FC3F7',
                fontWeight: 700,
                fontSize: { xs: '1.1rem', md: '1.4rem' },
                fontFamily: '"Poppins", sans-serif',
                minWidth: '200px',
              }}
            >
              {typewriter}
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.1em',
                  bgcolor: '#4FC3F7',
                  ml: 0.5,
                  verticalAlign: 'middle',
                  animation: 'blink 0.8s ease-in-out infinite',
                }}
              />
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              mb: 4.5,
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              lineHeight: 1.8,
              maxWidth: '580px',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.5s',
            }}
          >
            Expert maintenance, renovations, and project management delivered with precision and
            care for Glasgow and surrounding areas.
          </Typography>

          {/* Feature Badges */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={1.5}
            flexWrap="wrap"
            sx={{
              mb: 5,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.6s',
            }}
          >
            {[
              { text: 'Free Quotations' },
              { text: 'Professional Service' },
              { text: 'Trusted Trades' },
            ].map((badge, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(79, 195, 247, 0.15)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(79, 195, 247, 0.1)',
                    borderColor: 'rgba(79, 195, 247, 0.3)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 16, color: '#4FC3F7' }} />
                <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {badge.text}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              mb: 4,
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1) 0.7s',
            }}
          >
            {/* Primary CTA */}
            <Box
              component="a"
              href="#contact"
              className="btn-magnetic shimmer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: { xs: 3.5, md: 4.5 },
                py: { xs: 1.75, md: 2 },
                borderRadius: '100px',
                background: 'linear-gradient(135deg, #1565C0 0%, #0B3D5F 100%)',
                color: 'white',
                fontWeight: 700,
                fontSize: { xs: '0.9rem', md: '1rem' },
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(21, 101, 192, 0.5), 0 0 0 1px rgba(79,195,247,0.2)',
                transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                whiteSpace: 'nowrap',
                fontFamily: '"Poppins", sans-serif',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 15px 50px rgba(21, 101, 192, 0.7), 0 0 30px rgba(79, 195, 247, 0.3)',
                },
              }}
            >
              Get Your Free Quote
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Box>

            {/* Phone CTA */}
            <Box
              component="a"
              href={telHref}
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: { xs: 3.5, md: 4.5 },
                py: { xs: 1.75, md: 2 },
                borderRadius: '100px',
                border: '2px solid rgba(79, 195, 247, 0.4)',
                color: 'white',
                fontWeight: 600,
                fontSize: { xs: '0.9rem', md: '1rem' },
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                background: 'rgba(79, 195, 247, 0.05)',
                whiteSpace: 'nowrap',
                fontFamily: '"Poppins", sans-serif',
                '&:hover': {
                  borderColor: '#4FC3F7',
                  background: 'rgba(79, 195, 247, 0.12)',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 0 20px rgba(79, 195, 247, 0.3)',
                },
              }}
            >
              <PhoneIcon sx={{ fontSize: 18, color: '#4FC3F7' }} />
              {business.phone}
            </Box>
          </Stack>

        </Box>
      </Container>

      {/* Stats bar at bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(5, 13, 26, 0.7)',
          backdropFilter: 'blur(20px)',
          borderTop: '1px solid rgba(79, 195, 247, 0.1)',
          py: 3,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.8s ease 1s',
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction="row"
            spacing={0}
            sx={{ justifyContent: { xs: 'space-around', md: 'flex-start' }, gap: { md: 8 } }}
          >
            {[
              { value: `${c0}%`, label: 'Recommended', icon: '⭐' },
              { value: `${c1}+`, label: 'Projects Completed', icon: '🏗️' },
              { value: '5★', label: 'Customer Rating', icon: '🏆' },
            ].map((stat, i) => (
              <Box key={i} sx={{ textAlign: 'center', position: 'relative' }}>
                {i > 0 && (
                  <Box sx={{
                    position: 'absolute',
                    left: { md: '-2rem' },
                    top: '50%',
                    transform: 'translateY(-50%)',
                    width: '1px',
                    height: '40px',
                    background: 'rgba(79, 195, 247, 0.15)',
                    display: { xs: 'none', md: 'block' },
                  }} />
                )}
                <Typography sx={{
                  color: '#4FC3F7',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 800,
                  fontFamily: '"Poppins", sans-serif',
                  lineHeight: 1,
                  animation: 'glowText 3s ease-in-out infinite',
                  animationDelay: `${i * 0.5}s`,
                }}>
                  {stat.value}
                </Typography>
                <Typography sx={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  mt: 0.5,
                }}>
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Scroll down indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 100,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          opacity: mounted ? 0.6 : 0,
          transition: 'opacity 1s ease 1.2s',
          display: { xs: 'none', md: 'flex' },
        }}
      >
        <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </Typography>
        <Box sx={{
          width: '24px',
          height: '40px',
          border: '2px solid rgba(79, 195, 247, 0.3)',
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'center',
          pt: 0.75,
        }}>
          <Box sx={{
            width: '4px',
            height: '8px',
            bgcolor: '#4FC3F7',
            borderRadius: '2px',
            animation: 'bounceArrow 1.5s ease-in-out infinite',
          }} />
        </Box>
      </Box>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        @keyframes bounceArrow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @keyframes glowText {
          0%, 100% { text-shadow: 0 0 10px rgba(79,195,247,0.3); }
          50% { text-shadow: 0 0 25px rgba(79,195,247,0.7), 0 0 50px rgba(21,101,192,0.4); }
        }
        @keyframes particleFloat {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-50px) rotate(720deg); opacity: 0; }
        }
        @keyframes gridPan {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        .grid-bg {
          background-image: 
            linear-gradient(rgba(79, 195, 247, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 195, 247, 0.06) 1px, transparent 1px);
          background-size: 60px 60px;
          animation: gridPan 20s linear infinite;
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          animation: particleFloat linear infinite;
        }
        .particles-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .btn-magnetic {
          position: relative;
          overflow: hidden;
        }
        .shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.2), transparent);
          animation: shimmerMove 2.5s ease-in-out infinite;
        }
        @keyframes shimmerMove {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>
    </Box>
  )
}
