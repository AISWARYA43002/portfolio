import Tilt from './Tilt'

export default function Photo() {
  return (
    <Tilt className="relative w-64 h-64 md:w-80 md:h-80 mx-auto !rounded-full p-1.5 overflow-visible">
      <div className="absolute -inset-1 rounded-full blur-xl opacity-70 animate-spin [animation-duration:8s]"
        style={{ background: 'conic-gradient(from 0deg,#7c5cff,#22d3ee,#7c5cff)' }} />
      <img src="/aiswarya.jpeg" alt="Aiswarya A S"
        className="relative w-full h-full object-cover rounded-full border-2 border-white/20" />
    </Tilt>
  )
}