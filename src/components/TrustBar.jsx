import React from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { keyBenefits } from '../data/content'
import { Icon } from './Icon'

export default function TrustBar() {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: '#FFFFFF',
        borderBottom: '1px solid rgba(11, 61, 95, 0.1)',
        py: { xs: 6, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 4, md: 3 }} justifyContent="center">
          {keyBenefits.map((item, i) => (
            <Grid item xs={6} sm={4} md={2.4} key={item.label}>
              <Box
                sx={{
                  textAlign: 'center',
                  px: 2,
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: 'both',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                {/* Icon Circle */}
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    margin: '0 auto 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    bgcolor: '#F0F8FF',
                    color: '#1565C0',
                    border: '2px solid rgba(21, 101, 192, 0.2)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: '#1565C0',
                      color: '#FFFFFF',
                      borderColor: '#1565C0',
                      transform: 'scale(1.1)',
                      boxShadow: '0 8px 20px rgba(21, 101, 192, 0.25)',
                    },
                  }}
                >
                  <Icon name={item.icon} className="w-6 h-6" />
                </Box>

                {/* Label */}
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: '#1A1A1A',
                    lineHeight: 1.4,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Box>
  )
}
