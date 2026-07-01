import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import ServiceAreas from './components/ServiceAreas'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import ScrollReveal from './components/ScrollReveal'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="min-h-screen bg-paper">
        <Navbar />
        <main>
          <ScrollReveal direction="up" duration={1.2}>
            <Hero />
          </ScrollReveal>
          <ScrollReveal direction="up" duration={1.2}>
            <TrustBar />
          </ScrollReveal>
          <ScrollReveal direction="up" duration={1.2}>
            <About />
          </ScrollReveal>
          <ScrollReveal direction="up" duration={1.2}>
            <Services />
          </ScrollReveal>
          <ScrollReveal direction="up" duration={1.2}>
            <Gallery />
          </ScrollReveal>
          <ScrollReveal direction="up" duration={1.2}>
            <Reviews />
          </ScrollReveal>
          <ScrollReveal direction="up" duration={1.2}>
            <ServiceAreas />
          </ScrollReveal>
          <ScrollReveal direction="up" duration={1.2}>
            <Contact />
          </ScrollReveal>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  )
}
