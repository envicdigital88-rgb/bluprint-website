import React, { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, direction = 'up', delay = 0, duration = 1.2 }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          // Reset when scrolling away to animate again when scrolling back (up or down)
          setIsVisible(false)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it fully enters viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(40px)'
      case 'down':
        return 'translateY(-40px)'
      case 'left':
        return 'translateX(40px)'
      case 'right':
        return 'translateX(-40px)'
      case 'scale':
        return 'scale(0.96)'
      case 'none':
      default:
        return 'none'
    }
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s, transform ${duration}s cubic-bezier(0.25, 1, 0.5, 1) ${delay}s`,
        willChange: 'opacity, transform',
        width: '100%',
      }}
    >
      {children}
    </div>
  )
}
