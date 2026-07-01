import React from 'react'

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Icon({ name, className = 'w-6 h-6' }) {
  switch (name) {
    case 'wrench':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z" />
        </svg>
      )
    case 'hammer':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M14 6l4 4-2 2-4-4z" />
          <path d="M12.5 7.5L4 16v3h3l8.5-8.5" />
          <path d="M17 3l4 4" />
        </svg>
      )
    case 'building':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <rect x="5" y="4" width="10" height="16" />
          <path d="M9 4V2h6v2M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2M15 20v-4h4v4" />
        </svg>
      )
    case 'clipboard':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <rect x="5" y="4" width="14" height="17" rx="1.5" />
          <rect x="9" y="2.5" width="6" height="3" rx="1" />
          <path d="M8.5 11h7M8.5 15h7" />
        </svg>
      )
    case 'ruler':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M3 16l5-5 11 11-5 5z" />
          <path d="M7.5 12.5l1.5 1.5M10.5 9.5L12 11M13.5 6.5L15 8" />
        </svg>
      )
    case 'handshake':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M2 12l5-4 4 3 3-2 3 2 5 4" />
          <path d="M8 15l3 3 2-2" />
          <path d="M13 16l2.5 2.5" />
        </svg>
      )
    case 'badge':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <circle cx="12" cy="9" r="6" />
          <path d="M9 14l-2 7 5-3 5 3-2-7" />
        </svg>
      )
    case 'document':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M14 3v4h4M9 12h6M9 16h6" />
        </svg>
      )
    case 'map':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      )
    case 'pin':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M12 22s7-7.4 7-12.5A7 7 0 0 0 5 9.5C5 14.6 12 22 12 22z" />
          <circle cx="12" cy="9.5" r="2.3" />
        </svg>
      )
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.5 21 3 14.5 3 6a2 2 0 0 1 1-2z" />
        </svg>
      )
    case 'mail':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <rect x="3" y="5" width="18" height="14" rx="1.5" />
          <path d="M4 6.5l8 6 8-6" />
        </svg>
      )
    case 'clock':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      )
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.1 8.1 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-2-1.2-.7-.7-1.2-1.5-1.4-1.7-.1-.2 0-.4.1-.5l.4-.4.2-.4v-.4c-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.2-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 1.9 3 4.7 4.1.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z" />
        </svg>
      )
    case 'menu':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      )
    case 'close':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      )
    case 'compass':
      return (
        <svg viewBox="0 0 24 24" className={className} {...base}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
          <path d="M15 9l-2 5-4 1 2-5z" fill="currentColor" stroke="none" />
        </svg>
      )
    default:
      return null
  }
}
