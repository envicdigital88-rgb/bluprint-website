import React from 'react'
import { Box, Container, Typography, Grid, Paper, Chip, Stack } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { serviceAreas } from '../data/content'
import serviceAreaImage from '../assets/image 3.jpg'

function AreaColumn({ data, index }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3.5, sm: 4 },
        borderRadius: '24px',
        background: 'linear-gradient(135deg, #F0F7FF 0%, #E3F2FD 100%)',
        border: '1px solid',
        borderColor: 'rgba(21, 101, 192, 0.15)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 8px 30px rgba(21, 101, 192, 0.06)',
        animation: 'slideInUp 0.8s ease-out',
        animationDelay: `${index * 0.15}s`,
        animationFillMode: 'both',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: 'linear-gradient(90deg, #1565C0, #4FC3F7)',
        },
        '&:hover': {
          transform: 'translateY(-6px)',
          boxShadow: '0 20px 40px rgba(21, 101, 192, 0.16)',
          borderColor: 'rgba(21, 101, 192, 0.3)',
          '& .area-chip': {
            bgcolor: '#1565C0',
            color: 'white',
          },
        },
      }}
    >
      {/* Header */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3.5 }}>
        <Typography
          variant="h5"
          sx={{
            color: '#0B3D5F',
            fontWeight: 700,
            fontSize: '1.25rem',
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          {data.title}
        </Typography>
        <Chip
          className="area-chip"
          label={data.zone}
          sx={{
            bgcolor: '#FFFFFF',
            color: '#1565C0',
            fontWeight: 700,
            fontSize: '0.8rem',
            px: 0.5,
            height: '24px',
            transition: 'all 0.3s ease',
          }}
        />
      </Box>

      {/* Areas Pills List */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {data.areas.map((area, i) => (
          <Box
            key={area}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              py: 0.6,
              px: 1.5,
              borderRadius: '50px',
              bgcolor: 'rgba(255, 255, 255, 0.7)',
              border: '1px solid rgba(21, 101, 192, 0.12)',
              transition: 'all 0.3s ease',
              '&:hover': {
                bgcolor: '#FFFFFF',
                borderColor: 'rgba(21, 101, 192, 0.3)',
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 10px rgba(21, 101, 192, 0.08)',
                '& .location-icon': {
                  color: '#1565C0',
                  transform: 'scale(1.15)',
                },
              },
            }}
          >
            <LocationOnIcon
              className="location-icon"
              sx={{
                fontSize: 15,
                color: '#4FC3F7',
                transition: 'all 0.3s ease',
              }}
            />
            <Typography
              sx={{
                color: '#0B3D5F',
                fontSize: '0.85rem',
                fontWeight: 600,
                fontFamily: '"Montserrat", sans-serif',
              }}
            >
              {area}
            </Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default function ServiceAreas() {
  return (
    <Box
      component="section"
      id="areas"
      sx={{
        bgcolor: '#F8FAFC',
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 195, 247, 0.08), transparent 70%)',
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(21, 101, 192, 0.06), transparent 70%)',
          animation: 'pulse 10s ease-in-out infinite reverse',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Chip
            label="Where We Work"
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
            Service Areas
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748B',
              maxWidth: '42rem',
              margin: '0 auto',
              fontSize: '1.1rem',
              animation: 'fadeInUp 0.6s ease-out 0.4s both',
            }}
          >
            Based in Glasgow and covering the surrounding areas — get in touch to confirm
            coverage for your location.
          </Typography>
        </Box>

        {/* Area Cards */}
        <Grid container spacing={4} alignItems="stretch">
          {/* Image Column - Left Side */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                height: { xs: '350px', md: '420px' },
                borderRadius: '24px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(11, 61, 95, 0.03)',
                border: '1px solid rgba(11, 61, 95, 0.08)',
                animation: 'scaleIn 0.8s ease-out',
                transition: 'all 0.4s ease',
                '&:hover': {
                  transform: 'translateY(-6px)',
                  boxShadow: '0 20px 40px rgba(11, 61, 95, 0.12)',
                  borderColor: 'rgba(21, 101, 192, 0.25)',
                  '& img': {
                    transform: 'scale(1.08)',
                  },
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '6px',
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
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 61, 95, 0.85), transparent 60%)',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 30,
                  left: 30,
                  right: 30,
                  zIndex: 1,
                }}
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    lineHeight: 1.2,
                    fontFamily: '"Poppins", sans-serif',
                  }}
                >
                  Serving Glasgow & Surrounding
                </Typography>
              </Box>
            </Paper>
          </Grid>

          {/* Area Columns */}
          <Grid item xs={12} md={4}>
            <AreaColumn data={serviceAreas.primary} index={1} />
          </Grid>
          <Grid item xs={12} md={4}>
            <AreaColumn data={serviceAreas.surrounding} index={2} />
          </Grid>
        </Grid>

        {/* Call to Action */}
        <Box
          sx={{
            mt: 6,
            textAlign: 'center',
            animation: 'fadeInUp 0.8s ease-out 0.8s both',
          }}
        >
          <Typography
            sx={{
              color: '#64748B',
              fontSize: '0.95rem',
              fontStyle: 'italic',
            }}
          >
            Don't see your area listed? <Box component="span" sx={{ color: '#1565C0', fontWeight: 600 }}>Contact us</Box> to check if we can help!
          </Typography>
        </Box>
      </Container>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </Box>
  )
}
