import { Button, Stack, Container, Box, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { business } from '../data/content'
import heroBg from '../assets/image 1.jpg'

export default function Hero() {
  const telHref = `tel:${business.phone.replace(/\s+/g, '')}`
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^\d]/g, '')}`

  return (
    <Box
      component="section"
      id="home"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: '100vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 10, md: 0 },
      }}
    >
      {/* Full Background Image with Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          animation: 'slowZoom 20s ease-in-out infinite alternate',
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(10, 37, 64, 0.99) 0%, rgba(11, 61, 95, 0.88) 40%, rgba(21, 101, 192, 0.55) 100%)',
          },
        }}
      />

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(79, 195, 247, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ py: { xs: 8, md: 12 }, pt: { xs: 12, md: 16 }, maxWidth: '700px' }}>
          {/* Main Heading */}
          <Typography
            variant="h1"
            sx={{
              mb: 3,
              fontWeight: 800,
              fontSize: {
                xs: '2rem',
                sm: '2.5rem',
                md: '3.25rem',
                lg: '3.75rem',
              },
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              animation: 'fadeInUp 0.8s ease-out',
            }}
          >
            Professional<br />Property Services
          </Typography>

          {/* Tagline with Decorative Line */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3.5,
              animation: 'fadeInUp 0.8s ease-out 0.2s both',
            }}
          >
            <Box
              sx={{
                width: '60px',
                height: '4px',
                bgcolor: '#4FC3F7',
                borderRadius: '3px',
              }}
            />
            <Typography
              variant="h2"
              sx={{
                color: '#4FC3F7',
                fontWeight: 700,
                fontSize: { xs: '1.25rem', sm: '1.5rem', md: '1.75rem' },
              }}
            >
              {business.tagline}
            </Typography>
          </Box>

          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '0.95rem', md: '1.05rem' },
              lineHeight: 1.7,
              maxWidth: '600px',
              animation: 'fadeInUp 0.8s ease-out 0.4s both',
            }}
          >
            Expert maintenance, renovations, and project management delivered with precision and
            care for Glasgow and surrounding areas.
          </Typography>

          {/* Feature Badges */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              mb: 4.5,
              animation: 'fadeInUp 0.8s ease-out 0.6s both',
            }}
          >
            {[
              { icon: <CheckCircleIcon sx={{ fontSize: 18 }} />, text: 'Free Quotations' },
              { icon: <CheckCircleIcon sx={{ fontSize: 18 }} />, text: 'Professional Service' },
              { icon: <CheckCircleIcon sx={{ fontSize: 18 }} />, text: 'Trusted Trades' },
            ].map((badge, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 2.5,
                  py: 1.25,
                  borderRadius: '8px',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              >
                <Box sx={{ color: '#4FC3F7', display: 'flex' }}>{badge.icon}</Box>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
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
              animation: 'fadeInUp 0.8s ease-out 0.8s both',
            }}
          >
            <Button
              variant="contained"
              href="#contact"
              endIcon={<ArrowForwardIcon />}
              size="large"
              sx={{
                bgcolor: '#1565C0',
                color: 'white',
                px: { xs: 3.5, md: 4.5 },
                py: { xs: 1.75, md: 2 },
                fontSize: { xs: '0.95rem', md: '1rem' },
                fontWeight: 700,
                borderRadius: '8px',
                boxShadow: '0 8px 25px rgba(21, 101, 192, 0.4)',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  bgcolor: '#0B3D5F',
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 35px rgba(21, 101, 192, 0.5)',
                },
              }}
            >
              Get Your Free Quote
            </Button>

            <Button
              variant="outlined"
              href={telHref}
              startIcon={<PhoneIcon />}
              size="large"
              sx={{
                borderWidth: '2px',
                borderColor: 'white',
                color: 'white',
                px: { xs: 3.5, md: 4.5 },
                py: { xs: 1.75, md: 2 },
                fontSize: { xs: '0.95rem', md: '1rem' },
                fontWeight: 600,
                borderRadius: '8px',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  borderWidth: '2px',
                  borderColor: '#4FC3F7',
                  bgcolor: 'rgba(79, 195, 247, 0.1)',
                  transform: 'translateY(-3px)',
                },
              }}
            >
              {business.phone}
            </Button>
          </Stack>

          {/* WhatsApp Link */}
          <Box sx={{ mt: 3, animation: 'fadeInUp 0.8s ease-out 1s both' }}>
            <Button
              variant="text"
              href={waHref}
              target="_blank"
              rel="noreferrer"
              startIcon={<WhatsAppIcon />}
              sx={{
                color: '#4FC3F7',
                fontSize: '0.95rem',
                fontWeight: 600,
                textTransform: 'none',
                px: 2,
                py: 1,
                '&:hover': {
                  bgcolor: 'rgba(79, 195, 247, 0.1)',
                },
              }}
            >
              Message us on WhatsApp
            </Button>
          </Box>
        </Box>
      </Container>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </Box>
  )
}
