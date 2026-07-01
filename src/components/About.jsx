import React from 'react'
import { Box, Container, Typography, Grid, Paper, Stack, Chip } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'
import { aboutParagraphs } from '../data/content'
import sitePhoto from '../assets/image6.webp'

export default function About() {
  const highlights = [
    'Expert Craftmanship',
    'Licensed & Insured',
    'On-Time Delivery',
    'Quality Guaranteed'
  ]

  return (
    <Box 
      component="section" 
      id="about" 
      sx={{ 
        bgcolor: 'white',
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(21, 101, 192, 0.05), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Left: Image */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                position: 'relative',
                animation: 'fadeInLeft 0.8s ease-out',
              }}
            >
              {/* Main Image */}
              <Paper
                elevation={0}
                sx={{
                  overflow: 'hidden',
                  borderRadius: '24px',
                  position: 'relative',
                  boxShadow: '0 20px 60px rgba(11, 61, 95, 0.15)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 30px 80px rgba(11, 61, 95, 0.2)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(21, 101, 192, 0.1), transparent)',
                    pointerEvents: 'none',
                    zIndex: 1,
                  },
                }}
              >
                <img
                  src={sitePhoto}
                  alt="Bluprint property services"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />
              </Paper>

              {/* Stats Badge */}
              <Paper
                elevation={6}
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  right: 20,
                  bgcolor: 'white',
                  p: 3,
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1,
                  minWidth: '180px',
                  animation: 'fadeInUp 0.8s ease-out 0.4s both',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <WorkspacePremiumIcon sx={{ color: '#1565C0', fontSize: 28 }} />
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#0B3D5F' }}>
                    10+
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: '#64748B', fontWeight: 600 }}>
                  Years Experience
                </Typography>
              </Paper>

              {/* Decorative corner */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -10,
                  left: -10,
                  width: '80px',
                  height: '80px',
                  border: '3px solid #1565C0',
                  borderRight: 'none',
                  borderBottom: 'none',
                  borderRadius: '16px 0 0 0',
                }}
              />
            </Box>
          </Grid>

          {/* Right: Content */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ animation: 'fadeInRight 0.8s ease-out' }}>
              {/* Label */}
              <Chip
                label="About Bluprint"
                sx={{
                  bgcolor: '#E3F2FD',
                  color: '#1565C0',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  mb: 2,
                  px: 1,
                  animation: 'fadeInDown 0.6s ease-out',
                }}
              />

              {/* Heading */}
              <Typography
                variant="h2"
                sx={{
                  color: '#0B3D5F',
                  fontWeight: 800,
                  mb: 3,
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  lineHeight: 1.2,
                }}
              >
                Building Better Spaces with{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #1565C0 0%, #0B3D5F 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Quality You Can Trust
                </Box>
              </Typography>

              {/* Description */}
              <Stack spacing={2.5} sx={{ mb: 4 }}>
                {aboutParagraphs.map((p, i) => (
                  <Typography
                    key={i}
                    variant="body1"
                    sx={{
                      color: '#64748B',
                      lineHeight: 1.8,
                      fontSize: '1rem',
                      animation: 'fadeInUp 0.6s ease-out',
                      animationDelay: `${i * 0.1}s`,
                      animationFillMode: 'both',
                    }}
                  >
                    {p}
                  </Typography>
                ))}
              </Stack>

              {/* Highlights */}
              <Grid container spacing={2}>
                {highlights.map((highlight, i) => (
                  <Grid item xs={6} key={i}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        animation: 'fadeInUp 0.6s ease-out',
                        animationDelay: `${0.3 + i * 0.1}s`,
                        animationFillMode: 'both',
                      }}
                    >
                      <CheckCircleIcon sx={{ color: '#1565C0', fontSize: 20 }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#0B3D5F',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                        }}
                      >
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
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  )
}
