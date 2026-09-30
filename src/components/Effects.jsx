import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

export default function Effects() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 })
  const [pos, setPos] = useState({ x: -500, y: -500 })
  useEffect(() => {
    const m = e => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', m)
    return () => window.removeEventListener('mousemove', m)
  }, [])
  return (
    <>
      <motion.div style={{ scaleX }} className="fixed top-0 left-0 right-0 h-1 origin-left z-[60] bg-gradient-to-r from-violet-500 to-cyan-400" />
      <div className="pointer-events-none fixed inset-0 z-0 hidden md:block"
        style={{ background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, rgba(124,92,255,.12), transparent 70%)` }} />
    </>
  )
}