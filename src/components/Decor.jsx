import React from 'react'

export function CornerMarks({ className = '', color = 'text-cyan' }) {
  return (
    <>
      <span
        className={`corner-tl absolute top-0 left-0 w-4 h-4 border-t border-l ${color} ${className}`}
        aria-hidden="true"
      />
      <span
        className={`corner-br absolute bottom-0 right-0 w-4 h-4 border-b border-r ${color} ${className}`}
        aria-hidden="true"
      />
    </>
  )
}

export function Eyebrow({ children, dark = false, center = false }) {
  return (
    <p
      className={`dwg-label mb-3 flex items-center gap-2 ${
        center ? 'justify-center' : ''
      } ${dark ? 'text-cyan' : 'text-blue'}`}
    >
      <span className={`inline-block w-6 h-px ${dark ? 'bg-cyan' : 'bg-blue'}`} />
      {children}
    </p>
  )
}
