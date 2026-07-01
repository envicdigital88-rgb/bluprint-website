import React from 'react'
import { business, testimonials } from '../data/content'
import { Eyebrow } from './Decor'
import { Box, Container, Typography, Grid, Card, CardContent, Rating, Avatar } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

export default function Reviews() {
  return (
    <section id="reviews" className="bg-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blueprint bg-grid-sm opacity-30" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
        <div className="text-center mb-16">
          <Eyebrow dark center>
            Reviews &amp; Testimonials
          </Eyebrow>
          <div className="flex flex-col items-center">
            <p className="font-display font-bold text-6xl md:text-8xl text-cyan leading-none animate-fade-in-up animate-pulse-custom">
              {business.rating}
            </p>
            <p className="mt-4 dwg-label text-white/70 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              By Customers · {business.reviewCount} Reviews
            </p>
            <p className="mt-6 max-w-xl text-white/75 text-[15px] leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Customers consistently recommend Bluprint for reliable, professional service — from
              quick property maintenance jobs to complete renovation projects managed start to
              finish.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    bgcolor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    animation: 'fadeInUp 0.6s ease-out',
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(79, 195, 247, 0.2)',
                      border: '1px solid rgba(79, 195, 247, 0.3)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Quote Icon */}
                    <Box sx={{ mb: 2 }}>
                      <FormatQuoteIcon 
                        sx={{ 
                          fontSize: 40, 
                          color: 'rgba(79, 195, 247, 0.5)',
                          transform: 'rotate(180deg)'
                        }} 
                      />
                    </Box>

                    {/* Review Text */}
                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '0.95rem',
                        lineHeight: 1.7,
                        mb: 3,
                        flex: 1,
                      }}
                    >
                      "{testimonial.review}"
                    </Typography>

                    {/* Rating */}
                    <Box sx={{ mb: 2 }}>
                      <Rating 
                        value={testimonial.rating} 
                        readOnly 
                        sx={{
                          '& .MuiRating-iconFilled': {
                            color: '#FFB400',
                          },
                        }}
                      />
                    </Box>

                    {/* Author */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: 'rgba(79, 195, 247, 0.2)',
                          color: '#4FC3F7',
                          fontWeight: 600,
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Typography
                        sx={{
                          color: '#4FC3F7',
                          fontWeight: 600,
                          fontSize: '1rem',
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </section>
  )
}
