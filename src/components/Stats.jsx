import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

function Count({ to, suffix = '' }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    let v = 0
    const id = setInterval(() => { v += 1; setN(v); if (v >= to) clearInterval(id) }, 900 / to)
    return () => clearInterval(id)
  }, [inView, to])
  return <span ref={ref}>{n}{suffix}</span>
}

export default function Stats() {
  const items = [[1, '+', 'Years building'], [4, '', 'Projects shipped'], [3, '', 'Domains: travel, e-commerce, EdTech'], [5, '+', 'Zoho automations']]
  return (
    <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map(([n, s, l]) => (
        <div key={l} className="card p-6 text-center">
          <div className="text-4xl font-extrabold grad"><Count to={n} suffix={s} /></div>
          <div className="text-xs text-slate-400 mt-1">{l}</div>
        </div>
      ))}
    </div>
  )
}