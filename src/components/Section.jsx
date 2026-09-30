import { motion } from 'framer-motion'
export default function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-24">
      <motion.h2 initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}}
        className="text-3xl md:text-4xl font-bold mb-10"><span className="grad">{title}</span></motion.h2>
      {children}
    </section>
  )
}
