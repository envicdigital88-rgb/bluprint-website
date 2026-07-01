import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Avatar, Chip } from '@mui/material'
import { services } from '../data/content'
import { Icon } from './Icon'

export default function Services() {
  return (
    <Box 
      component="section" 
      id="services" 
      sx={{ 
        bgcolor: '#F8FAFC',
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #0B3D5F33, transparent)',
        },
      }}
    >
      {/* Animated background shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79, 195, 247, 0.1), transparent 70%)',
          animation: 'float 8s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(21, 101, 192, 0.08), transparent 70%)',
          animation: 'float 10s ease-in-out infinite reverse',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Chip
            label="What We Do"
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
            Services Built Around Your Project
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
            Coordinating reliable trades for residential and commercial projects — from a single
            repair to a complete renovation.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} lg={4} key={service.ref}>
              <Card
                sx={{
                  height: '100%',
                  border: 'none',
                  borderRadius: '16px',
                  bgcolor: '#F0F7FF',
                  boxShadow: '0 4px 20px rgba(11, 61, 95, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  animation: 'scaleIn 0.6s ease-out',
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: 'both',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: 'linear-gradient(90deg, #1565C0, #4FC3F7)',
                    transform: 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.4s ease',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at top right, rgba(79, 195, 247, 0.05), transparent 60%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-12px) scale(1.02)',
                    boxShadow: '0 20px 50px rgba(11, 61, 95, 0.2)',
                    '&::before': {
                      transform: 'scaleX(1)',
                    },
                    '&::after': {
                      opacity: 1,
                    },
                    '& .service-icon': {
                      transform: 'scale(1.15) rotate(10deg)',
                      bgcolor: '#1565C0',
                      color: 'white',
                      boxShadow: '0 8px 20px rgba(21, 101, 192, 0.3)',
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 4, position: 'relative', zIndex: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
                    <Avatar
                      className="service-icon"
                      sx={{
                        width: 56,
                        height: 56,
                        bgcolor: '#E3F2FD',
                        color: '#1565C0',
                        transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        animation: 'iconBounce 2s ease-in-out infinite',
                        animationDelay: `${index * 0.2}s`,
                      }}
                    >
                      <Icon name={service.icon} className="w-6 h-6" />
                    </Avatar>
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      color: '#0B3D5F', 
                      mb: 1.5,
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {service.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#64748B',
                      lineHeight: 1.7,
                      fontSize: '0.95rem',
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
        @keyframes scaleIn {
          0% { 
            opacity: 0; 
            transform: scale(0.8) translateY(30px); 
          }
          60% {
            transform: scale(1.05) translateY(-5px);
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        @keyframes float {
          0%, 100% { 
            transform: translate(0, 0) scale(1); 
          }
          33% { 
            transform: translate(30px, -30px) scale(1.05); 
          }
          66% { 
            transform: translate(-20px, 20px) scale(0.95); 
          }
        }
        @keyframes iconBounce {
          0%, 100% { 
            transform: translateY(0); 
          }
          50% { 
            transform: translateY(-5px); 
          }
        }
      `}</style>
    </Box>
  )
}
