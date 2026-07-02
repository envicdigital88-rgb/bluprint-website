import React, { useState } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
  MenuItem,
  Chip,
  Alert,
  Card,
  CardContent,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PhoneIcon from '@mui/icons-material/Phone'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SendIcon from '@mui/icons-material/Send'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { business, whyContact, services } from '../data/content'

const initialForm = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const telHref = `tel:${business.phone.replace(/\s+/g, '')}`
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^\d]/g, '')}`

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Free Quote Request — ${form.service || 'General Enquiry'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService Required: ${form.service}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    setForm(initialForm)
  }

  const contactInfo = [
    { icon: <LocationOnIcon />, label: 'Location', value: business.location },
    { icon: <PhoneIcon />, label: 'Phone', value: business.phone, href: telHref },
    { icon: <WhatsAppIcon />, label: 'WhatsApp', value: business.whatsapp, href: waHref, external: true },
    { icon: <EmailIcon />, label: 'Email', value: business.email, href: `mailto:${business.email}` },
    { icon: <AccessTimeIcon />, label: 'Hours', value: business.hours },
  ]

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        bgcolor: 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 152, 0, 0.08), transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: 'center', animation: 'fadeInUp 0.6s ease-out' }}>
          <Chip
            label="Get In Touch"
            sx={{
              bgcolor: '#E3F2FD',
              color: '#1565C0',
              fontWeight: 700,
              fontSize: '0.875rem',
              mb: 2,
              px: 1,
            }}
          />
          <Typography
            variant="h2"
            sx={{
              color: '#0B3D5F',
              fontWeight: 800,
              mb: 2,
            }}
          >
            Request Your Free Quote
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#64748B',
              maxWidth: '42rem',
              margin: '0 auto',
              fontSize: '1.1rem',
            }}
          >
            Have a project in mind or need reliable property maintenance support? Our team is ready
            to discuss your requirements and provide a tailored, no-obligation quote.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left: Contact Info */}
          <Grid item xs={12} lg={5}>
            <Stack spacing={3}>
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  sx={{
                    borderRadius: '16px',
                    boxShadow: '0 4px 20px rgba(11, 61, 95, 0.08)',
                    transition: 'all 0.3s ease',
                    animation: 'fadeInLeft 0.6s ease-out',
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both',
                    '&:hover': {
                      transform: 'translateX(8px)',
                      boxShadow: '0 8px 30px rgba(11, 61, 95, 0.12)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          bgcolor: '#E3F2FD',
                          color: '#1565C0',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {info.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography
                          variant="caption"
                          sx={{
                            color: '#94A3B8',
                            textTransform: 'uppercase',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            fontSize: '0.7rem',
                          }}
                        >
                          {info.label}
                        </Typography>
                        {info.href ? (
                          <Typography
                            component="a"
                            href={info.href}
                            target={info.external ? '_blank' : undefined}
                            rel={info.external ? 'noreferrer' : undefined}
                            sx={{
                              display: 'block',
                              color: '#0B3D5F',
                              fontWeight: 600,
                              fontSize: '0.95rem',
                              textDecoration: 'none',
                              '&:hover': {
                                color: '#1565C0',
                              },
                            }}
                          >
                            {info.value}
                          </Typography>
                        ) : (
                          <Typography
                            sx={{
                              color: '#0B3D5F',
                              fontWeight: 600,
                              fontSize: '0.95rem',
                            }}
                          >
                            {info.value}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Stack>
          </Grid>

          {/* Right: Form */}
          <Grid item xs={12} lg={7}>
            <Paper
              component="form"
              onSubmit={handleSubmit}
              sx={{
                borderRadius: '24px',
                p: { xs: 3, md: 5 },
                boxShadow: '0 8px 40px rgba(11, 61, 95, 0.12)',
                animation: 'fadeInRight 0.6s ease-out',
                bgcolor: 'white',
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  color: '#0B3D5F',
                  fontWeight: 700,
                  mb: 4,
                }}
              >
                Send Us A Message
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    select
                    label="Service Required"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                      },
                    }}
                  >
                    <MenuItem value="">Select a service</MenuItem>
                    {services.map((s) => (
                      <MenuItem key={s.ref} value={s.title}>
                        {s.title}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label="Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Please include as much detail as possible about your project."
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '12px',
                      },
                    }}
                  />
                </Grid>
              </Grid>

              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                sx={{
                  mt: 4,
                  bgcolor: '#E3F2FD',
                  color: '#1565C0',
                  px: 6,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: '100px',
                  textTransform: 'none',
                  boxShadow: 'none',
                  border: 'none',
                  '&:hover': {
                    bgcolor: '#BBDEFB',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(21, 101, 192, 0.15)',
                  },
                }}
              >
                Send Request
              </Button>

              {submitted && (
                <Alert
                  icon={<CheckCircleIcon />}
                  severity="success"
                  sx={{
                    mt: 3,
                    borderRadius: '12px',
                    animation: 'fadeInUp 0.4s ease-out',
                  }}
                >
                  Your email app should now open with your request pre-filled — hit send to reach us.
                </Alert>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </Box>
  )
}
