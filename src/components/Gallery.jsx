import React, { useState } from 'react'
import { Box, Container, Typography, Grid, Chip } from '@mui/material'
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

  const filteredImages = galleryImages.filter(
    (img) => activeFilter === 'All' || img.category === activeFilter
  )

  return (
    <Box
      component="section"
      id="gallery"
      sx={{
        bgcolor: '#FFFFFF',
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(21, 101, 192, 0.02), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Chip
            label="Our Gallery"
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
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              color: '#0B3D5F',
              fontWeight: 800,
              animation: 'fadeInUp 0.6s ease-out 0.2s both',
            }}
          >
            Quality You Can See
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748B',
              maxWidth: '42rem',
              margin: '0 auto',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              animation: 'fadeInUp 0.6s ease-out 0.4s both',
            }}
          >
            Take a look at some of our recent projects and see the quality, craftsmanship, and
            attention to detail that define every job we undertake.
          </Typography>
        </Box>

        {/* Category Filters */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 1.5,
            mb: 7,
            animation: 'fadeInUp 0.6s ease-out 0.5s both',
          }}
        >
          {categories.map((category) => {
            const isActive = activeFilter === category
            return (
              <Box
                key={category}
                onClick={() => setActiveFilter(category)}
                sx={{
                  cursor: 'pointer',
                  py: 1,
                  px: 2.75,
                  borderRadius: '50px',
                  bgcolor: isActive ? '#1565C0' : 'rgba(21, 101, 192, 0.04)',
                  border: '1px solid',
                  borderColor: isActive ? '#1565C0' : 'rgba(21, 101, 192, 0.08)',
                  color: isActive ? '#FFFFFF' : '#0B3D5F',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  fontFamily: '"Montserrat", sans-serif',
                  transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                  boxShadow: isActive ? '0 8px 20px rgba(21, 101, 192, 0.2)' : 'none',
                  '&:hover': {
                    bgcolor: isActive ? '#1565C0' : 'rgba(21, 101, 192, 0.08)',
                    borderColor: isActive ? '#1565C0' : 'rgba(21, 101, 192, 0.2)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                {category}
              </Box>
            )
          })}
        </Box>

        {/* Interactive Gallery Grid */}
        <Grid container spacing={4}>
          {filteredImages.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={image.label} sx={{ display: 'flex' }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '350px',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  boxShadow: '0 8px 30px rgba(11, 61, 95, 0.05)',
                  border: '1px solid rgba(11, 61, 95, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                  animation: 'fadeInUp 0.8s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 45px rgba(11, 61, 95, 0.14)',
                    borderColor: 'rgba(21, 101, 192, 0.22)',
                    '& img': {
                      transform: 'scale(1.08)',
                    },
                    '& .hover-icon': {
                      opacity: 1,
                      transform: 'translate(-50%, -50%) scale(1)',
                    },
                    '& .label-container': {
                      background: 'rgba(11, 61, 95, 0.95)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      '& .text-title': {
                        color: '#FFFFFF',
                      },
                      '& .text-cat': {
                        color: '#4FC3F7',
                      },
                      '& .arrow-box': {
                        bgcolor: '#1565C0',
                        color: '#FFFFFF',
                        transform: 'rotate(45deg)',
                      },
                    },
                  },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={image.src}
                  alt={image.label}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                    transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
                  }}
                />

                {/* Hover Center Icon */}
                <Box
                  className="hover-icon"
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%) scale(0.8)',
                    opacity: 0,
                    width: '52px',
                    height: '52px',
                    borderRadius: '50%',
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    color: '#1565C0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                    transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                    zIndex: 2,
                  }}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    <line x1="11" y1="8" x2="11" y2="14"></line>
                    <line x1="8" y1="11" x2="14" y2="11"></line>
                  </svg>
                </Box>

                {/* Glass Label Container */}
                <Box
                  className="label-container"
                  sx={{
                    position: 'absolute',
                    bottom: 20,
                    left: 20,
                    right: 20,
                    p: '14px 18px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.88)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    transition: 'all 0.3s ease',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <Typography
                      className="text-cat"
                      variant="caption"
                      sx={{
                        color: '#1565C0',
                        fontWeight: 700,
                        fontSize: '0.65rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        mb: 0.5,
                        display: 'block',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {image.category}
                    </Typography>
                    <Typography
                      className="text-title"
                      sx={{
                        color: '#0B3D5F',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        fontFamily: '"Poppins", sans-serif',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {image.label}
                    </Typography>
                  </Box>
                  <Box
                    className="arrow-box"
                    sx={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      bgcolor: 'rgba(21, 101, 192, 0.08)',
                      color: '#1565C0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Text */}
        <Box sx={{ mt: 7, textAlign: 'center', animation: 'fadeInUp 0.8s ease-out 1s both' }}>
          <Typography
            sx={{
              color: '#64748B',
              fontSize: '0.9rem',
              fontStyle: 'italic',
            }}
          >
            Showcasing our commitment to quality workmanship and professional project delivery across Glasgow and surrounding areas.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
