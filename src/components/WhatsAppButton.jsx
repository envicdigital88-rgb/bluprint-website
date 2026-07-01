import React from 'react'
import { business } from '../data/content'
import { Icon } from './Icon'

export default function WhatsAppButton() {
  const waHref = `https://wa.me/${business.whatsapp.replace(/[^\d]/g, '')}`
  return (
    <a
      href={waHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Message Bluprint on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
    >
      <Icon name="whatsapp" className="w-6 h-6" />
    </a>
  )
}
