import { useEffect, useState } from 'react'

export default function Typewriter({ words }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i]
    const t = setTimeout(() => {
      if (!del) {
        setText(w.slice(0, text.length + 1))
        if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1200)
      } else {
        setText(w.slice(0, text.length - 1))
        if (text.length - 1 === 0) { setDel(false); setI((i + 1) % words.length) }
      }
    }, del ? 40 : 80)
    return () => clearTimeout(t)
  }, [text, del, i, words])
  return <span className="text-cyan-300">{text}<span className="animate-pulse">|</span></span>
}