import React, { useEffect, useRef, useState } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { keyBenefits } from '../data/content'
import { Icon } from './Icon'

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let startTime = null
    const animate = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [target, duration, started])
  return count
}

const trustStats = [
  { value: 100, suffix: '%', label: 'Recommended', icon: 'badge' },
  { value: 10, suffix: '+', label: 'Years Experience', icon: 'building' },
  { value: 5, suffix: '★', label: 'Star Reviews', icon: 'handshake' },
  { value: 24, suffix: '/7', label: 'Support Available', icon: 'map' },
  { value: 0, suffix: '', label: 'Hidden Costs', icon: 'document' },
]

export default function TrustBar() {
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const counts = [
    useCountUp(100, 2000, started),
    useCountUp(10, 1500, started),
    useCountUp(5, 1000, started),
    useCountUp(24, 1200, started),
    useCountUp(0, 800, started),
  ]

  return (
    <Box
      ref={ref}
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 7, md: 9 },
        background: 'linear-gradient(135deg, #050D1A 0%, #0A2540 50%, #050D1A 100%)',
        borderTop: '1px solid rgba(79, 195, 247, 0.1)',
        borderBottom: '1px solid rgba(79, 195, 247, 0.1)',
      }}
    >
      {/* Gradient line top */}
      <Box sx={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #1565C0, #4FC3F7, #1565C0, transparent)',
      }} />

      {/* Background grid */}
      <Box
        className="grid-bg"
        sx={{ position: 'absolute', inset: 0, opacity: 0.3, pointerEvents: 'none' }}
      />

      {/* Glow blobs */}
      <Box sx={{
        position: 'absolute', left: '10%', top: '50%', transform: 'translateY(-50%)',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21, 101, 192, 0.15), transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', right: '10%', top: '50%', transform: 'translateY(-50%)',
        width: '300px', height: '300px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 195, 247, 0.1), transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 4, md: 2 }} justifyContent="center" alignItems="center">
          {keyBenefits.map((item, i) => (
            <Grid item xs={6} sm={4} md={2.4} key={item.label}>
              <Box
                sx={{
                  textAlign: 'center',
                  px: 2,
                  py: 2,
                  borderRadius: '20px',
                  border: '1px solid rgba(79, 195, 247, 0.08)',
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  animation: 'fadeInUp 0.7s ease-out both',
                  animationDelay: `${i * 0.1}s`,
                  '&:hover': {
                    border: '1px solid rgba(79, 195, 247, 0.25)',
                    background: 'rgba(79, 195, 247, 0.04)',
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 50px rgba(21, 101, 192, 0.2)',
                  },
                  '&:hover .icon-ring': {
                    background: 'linear-gradient(135deg, #1565C0, #4FC3F7)',
                    boxShadow: '0 0 20px rgba(79, 195, 247, 0.5)',
                    transform: 'scale(1.1)',
                  },
                  '&:hover .icon-ring svg': {
                    color: 'white',
                  },
                }}
              >
                {/* Icon with pulse rings */}
                <Box sx={{ position: 'relative', display: 'inline-block', mb: 2 }}>
                  {/* Pulse rings */}
                  <Box sx={{
                    position: 'absolute',
                    inset: -4,
                    borderRadius: '50%',
                    border: '1px solid rgba(79, 195, 247, 0.2)',
                    animation: `pulseRing 3s ease-out infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }} />
                  <Box sx={{
                    position: 'absolute',
                    inset: -4,
                    borderRadius: '50%',
                    border: '1px solid rgba(79, 195, 247, 0.15)',
                    animation: `pulseRing 3s ease-out infinite`,
                    animationDelay: `${i * 0.3 + 1}s`,
                  }} />

                  <Box
                    className="icon-ring"
                    sx={{
                      width: 60,
                      height: 60,
                      borderRadius: '50%',
                      background: 'rgba(21, 101, 192, 0.15)',
                      border: '1px solid rgba(79, 195, 247, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                      mx: 'auto',
                      '& svg': {
                        color: '#4FC3F7',
                        transition: 'color 0.3s ease',
                      },
                    }}
                  >
                    <Icon name={item.icon} className="w-6 h-6" />
                  </Box>
                </Box>

                <Typography
                  sx={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: 'rgba(255,255,255,0.8)',
                    lineHeight: 1.4,
                    fontFamily: '"Montserrat", sans-serif',
                    letterSpacing: '0.01em',
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Bottom gradient line */}
      <Box sx={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #1565C0, #4FC3F7, #1565C0, transparent)',
      }} />

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseRing {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        .grid-bg {
          background-image: 
            linear-gradient(rgba(79, 195, 247, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(79, 195, 247, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>
    </Box>
  )
}
