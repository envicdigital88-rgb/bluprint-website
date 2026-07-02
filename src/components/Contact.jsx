import React, { useState, useRef, useEffect } from 'react'
import {
  Box, Container, Typography, Grid, TextField,
  Paper, Stack, MenuItem, Alert,
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
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  const telHref = `tel:${business.phone.replace(/\s+/g, '')}`
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^\d]/g, '')}`

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
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

  const inputSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '12px',
      background: 'rgba(255,255,255,0.04)',
      color: '#FFFFFF',
      transition: 'all 0.3s ease',
      '& fieldset': { borderColor: 'rgba(79, 195, 247, 0.15)' },
      '&:hover fieldset': { borderColor: 'rgba(79, 195, 247, 0.35)' },
      '&.Mui-focused fieldset': {
        borderColor: '#4FC3F7',
        boxShadow: '0 0 0 3px rgba(79, 195, 247, 0.1), 0 0 20px rgba(79, 195, 247, 0.08)',
      },
    },
    '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.4)' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#4FC3F7' },
    '& .MuiInputBase-input': { color: '#FFFFFF' },
    '& .MuiSelect-icon': { color: 'rgba(255,255,255,0.4)' },
  }

  return (
    <Box
      ref={ref}
      component="section"
      id="contact"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 10, md: 16 },
        background: 'linear-gradient(180deg, #050D1A 0%, #0A2540 60%, #050D1A 100%)',
      }}
    >
      {/* Gradient lines */}
      <Box sx={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #1565C0, #4FC3F7, #1565C0, transparent)',
      }} />

      {/* Background glow */}
      <Box sx={{
        position: 'absolute', bottom: '-15%', left: '-10%',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(21, 101, 192, 0.1), transparent 60%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />
      <Box sx={{
        position: 'absolute', top: '20%', right: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 195, 247, 0.07), transparent 65%)',
        filter: 'blur(70px)', pointerEvents: 'none',
      }} />

      {/* Ghost grid */}
      <Box sx={{
        position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(79,195,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,0.06) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <Box sx={{
          mb: 8, textAlign: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
        }}>
          <Box sx={{
            display: 'inline-flex', alignItems: 'center', gap: 1,
            px: 2, py: 0.75, borderRadius: '100px', mb: 3,
            background: 'rgba(79, 195, 247, 0.08)',
            border: '1px solid rgba(79, 195, 247, 0.25)',
          }}>
            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#4FC3F7', animation: 'pulse 2s ease-in-out infinite' }} />
            <Typography sx={{ color: '#4FC3F7', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Get In Touch
            </Typography>
          </Box>
          <Typography variant="h2" sx={{
            mb: 2, fontWeight: 800, color: '#FFFFFF',
            fontSize: { xs: '2rem', md: '2.75rem' },
          }}>
            Request Your{' '}
            <Box component="span" sx={{
              background: 'linear-gradient(135deg, #4FC3F7 0%, #1565C0 60%, #4FC3F7 100%)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradientShift 4s linear infinite',
            }}>
              Free Quote
            </Box>
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.5)', maxWidth: '42rem', margin: '0 auto', fontSize: '1rem', lineHeight: 1.75 }}>
            Have a project in mind? Our team is ready to discuss your requirements and provide a tailored, no-obligation quote.
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {/* Left: Contact Info */}
          <Grid item xs={12} lg={5}>
            <Stack spacing={2.5}>
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    p: 2.5,
                    borderRadius: '16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(79, 195, 247, 0.1)',
                    transition: 'all 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                    transitionDelay: `${0.1 + index * 0.08}s`,
                    '&:hover': {
                      border: '1px solid rgba(79, 195, 247, 0.3)',
                      background: 'rgba(21, 101, 192, 0.07)',
                      transform: 'translateX(6px)',
                      boxShadow: '0 10px 30px rgba(5,13,26,0.4)',
                      '& .contact-icon-box': {
                        background: 'linear-gradient(135deg, #1565C0, #4FC3F7)',
                        boxShadow: '0 0 15px rgba(79, 195, 247, 0.4)',
                      },
                      '& .contact-icon-box svg': { color: 'white' },
                    },
                  }}
                >
                  <Box
                    className="contact-icon-box"
                    sx={{
                      width: 46, height: 46, borderRadius: '12px',
                      background: 'rgba(21, 101, 192, 0.15)',
                      border: '1px solid rgba(79, 195, 247, 0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.4s ease', flexShrink: 0,
                      '& svg': { color: '#4FC3F7', fontSize: 20, transition: 'color 0.3s ease' },
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box sx={{ flex: 1, minWidth: 0 }}>
                    <Typography sx={{
                      color: 'rgba(79,195,247,0.7)', fontSize: '0.68rem',
                      fontWeight: 700, letterSpacing: '0.12em',
                      textTransform: 'uppercase', mb: 0.25,
                    }}>
                      {info.label}
                    </Typography>
                    {info.href ? (
                      <Box
                        component="a"
                        href={info.href}
                        target={info.external ? '_blank' : undefined}
                        rel={info.external ? 'noreferrer' : undefined}
                        sx={{
                          display: 'block',
                          color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem',
                          textDecoration: 'none', transition: 'color 0.3s ease',
                          overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                          '&:hover': { color: '#4FC3F7' },
                        }}
                      >
                        {info.value}
                      </Box>
                    ) : (
                      <Typography sx={{ color: '#FFFFFF', fontWeight: 600, fontSize: '0.9rem' }}>
                        {info.value}
                      </Typography>
                    )}
                  </Box>
                </Box>
              ))}

              {/* Why contact us */}
              <Box sx={{
                p: 3, borderRadius: '16px',
                background: 'rgba(21, 101, 192, 0.08)',
                border: '1px solid rgba(79, 195, 247, 0.15)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.8s ease 0.6s',
              }}>
                <Typography sx={{ color: '#4FC3F7', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', mb: 2 }}>
                  Why Choose Bluprint
                </Typography>
                <Stack spacing={1.25}>
                  {whyContact.map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <CheckCircleIcon sx={{ color: '#4FC3F7', fontSize: 16, mt: 0.2, flexShrink: 0 }} />
                      <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Stack>
          </Grid>

          {/* Right: Form */}
          <Grid item xs={12} lg={7}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                borderRadius: '24px',
                p: { xs: 3, md: 5 },
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(79, 195, 247, 0.12)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 30px 80px rgba(5,13,26,0.5)',
                position: 'relative',
                overflow: 'hidden',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateX(0)' : 'translateX(40px)',
                transition: 'all 0.9s cubic-bezier(0.25, 1, 0.5, 1) 0.2s',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0, left: 0, right: 0, height: '3px',
                  background: 'linear-gradient(90deg, #1565C0, #4FC3F7)',
                },
              }}
            >
              <Typography sx={{
                color: '#FFFFFF', fontWeight: 700,
                fontSize: '1.3rem', mb: 4,
                fontFamily: '"Poppins", sans-serif',
              }}>
                Send Us A Message
              </Typography>

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Your Name" name="name"
                    value={form.name} onChange={handleChange} required sx={inputSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email Address" name="email" type="email"
                    value={form.email} onChange={handleChange} required sx={inputSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone Number" name="phone" type="tel"
                    value={form.phone} onChange={handleChange} sx={inputSx} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth select label="Service Required" name="service"
                    value={form.service} onChange={handleChange} sx={{
                      ...inputSx,
                      '& .MuiMenuItem-root': { background: '#0A2540', color: 'white' },
                    }}
                    SelectProps={{
                      MenuProps: {
                        PaperProps: {
                          sx: {
                            background: '#0A2540',
                            border: '1px solid rgba(79, 195, 247, 0.2)',
                            borderRadius: '12px',
                            '& .MuiMenuItem-root': { color: 'rgba(255,255,255,0.8)', '&:hover': { background: 'rgba(79,195,247,0.08)', color: '#4FC3F7' } },
                          },
                        },
                      },
                    }}
                  >
                    <MenuItem value="">Select a service</MenuItem>
                    {services.map(s => (
                      <MenuItem key={s.ref} value={s.title}>{s.title}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth multiline rows={5} label="Your Message"
                    name="message" value={form.message} onChange={handleChange}
                    placeholder="Please include as much detail as possible about your project."
                    sx={inputSx} />
                </Grid>
              </Grid>

              {/* Submit Button */}
              <Box
                component="button"
                type="submit"
                className="btn-magnetic shimmer"
                sx={{
                  mt: 4,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 5, py: 1.75,
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, #1565C0 0%, #0B3D5F 100%)',
                  color: '#FFFFFF',
                  fontWeight: 700,
                  fontSize: '1rem',
                  fontFamily: '"Poppins", sans-serif',
                  boxShadow: '0 8px 30px rgba(21, 101, 192, 0.5)',
                  transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover': {
                    transform: 'translateY(-3px)',
                    boxShadow: '0 15px 50px rgba(21, 101, 192, 0.7), 0 0 20px rgba(79, 195, 247, 0.3)',
                  },
                  '&:active': {
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                <SendIcon sx={{ fontSize: 18 }} />
                Send Request
              </Box>

              {submitted && (
                <Box
                  sx={{
                    mt: 3, p: 2.5, borderRadius: '12px',
                    background: 'rgba(79, 195, 247, 0.08)',
                    border: '1px solid rgba(79, 195, 247, 0.2)',
                    display: 'flex', alignItems: 'center', gap: 1.5,
                    animation: 'fadeInUp 0.4s ease',
                  }}
                >
                  <CheckCircleIcon sx={{ color: '#4FC3F7', fontSize: 22 }} />
                  <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                    Your email app should now open with your request pre-filled — hit send to reach us!
                  </Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>

      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.2); }
        }
        .btn-magnetic {
          position: relative;
          overflow: hidden;
        }
        .shimmer::after {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%; height: 100%;
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
