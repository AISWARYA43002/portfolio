// import { Suspense } from 'react'
// import { motion } from 'framer-motion'
// import Hero3D from './components/Hero3D'
// import Section from './components/Section'
// import Tilt from './components/Tilt'
// import { profile, skills, experience, projects } from './data'
// import Photo from './components/Photo'
// import Effects from './components/Effects'
// import Typewriter from './components/Typewriter'
// import Stats from './components/Stats'
// export default function App() {
//   return (
//     <>
    

// <Section id="about" title="About">
//   <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
//     <Photo />
//     <div>
//       <p className="text-lg text-slate-300">{profile.summary}</p>
//       <div className="mt-8 flex flex-wrap gap-3">
//         {skills.map(s => <span key={s} className="card px-4 py-2 text-sm hover:border-cyan-400 transition">{s}</span>)}
//       </div>
//     </div>
//   </div>
// </Section>

//       <nav className="fixed top-0 inset-x-0 z-50 card !rounded-none flex justify-between px-6 py-3 text-sm">
//         <span className="font-bold grad">AA</span>
//         <div className="flex gap-6">
//           {['about','experience','projects','contact'].map(s => <a key={s} href={`#${s}`} className="hover:text-cyan-300 capitalize">{s}</a>)}
//         </div>
//       </nav>

//       <header className="relative h-screen">
//         <div className="absolute inset-0"><Suspense fallback={null}><Hero3D /></Suspense></div>
//         <div className="relative z-10 h-full flex flex-col justify-end items-center text-center pb-20 px-6 pointer-events-none">
//           <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.9}}
//             className="text-5xl md:text-7xl font-extrabold"><span className="grad">{profile.name}</span></motion.h1>
//           <p className="mt-4 text-lg md:text-xl text-slate-300">{profile.role}</p>
//           <div className="mt-8 flex gap-4 pointer-events-auto">
//             <a href="#projects" className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500">View my work</a>
//             <a href={`mailto:${profile.email}`} className="px-6 py-3 rounded-full card">Hire me</a>
//           </div>
//         </div>
//       </header>

//       <Section id="about" title="About">
//         <p className="text-lg text-slate-300 max-w-3xl">{profile.summary}</p>
//         <div className="mt-8 flex flex-wrap gap-3">
//           {skills.map(s => <span key={s} className="card px-4 py-2 text-sm hover:border-cyan-400 transition">{s}</span>)}
//         </div>
//       </Section>

//       <Section id="experience" title="Experience">
//         <div className="border-l border-white/15 pl-6 space-y-10">
//           {experience.map(e => (
//             <motion.div key={e.role} initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
//               <h3 className="text-xl font-semibold">{e.role} <span className="text-cyan-300">· {e.org}</span></h3>
//               <p className="text-sm text-slate-400 mb-2">{e.when}</p>
//               <ul className="list-disc ml-5 space-y-1 text-slate-300">{e.points.map(p => <li key={p}>{p}</li>)}</ul>
//             </motion.div>
//           ))}
//         </div>
//       </Section>

//       <Section id="projects" title="Projects">
//         <div className="grid md:grid-cols-2 gap-6">
//           {projects.map(p => (
//             <Tilt key={p.name} className="p-6">
//               <p className="text-xs text-cyan-300 mb-2">{p.tag}</p>
//               <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
//               <p className="text-slate-300 text-sm">{p.desc}</p>
//               {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-violet-300 hover:underline">View code →</a>}
//             </Tilt>
//           ))}
//         </div>
//       </Section>

//       <Section id="contact" title="Let's work together">
//         <div className="flex flex-wrap gap-4">
//           <a className="card px-6 py-3" href={`mailto:${profile.email}`}>Email</a>
//           <a className="card px-6 py-3" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
//           <a className="card px-6 py-3" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
//         </div>
//         <p className="mt-16 text-sm text-slate-500">© {new Date().getFullYear()} {profile.name}</p>
//       </Section>
//     </>
//   )
// }

// import { Suspense } from 'react'
// import { motion } from 'framer-motion'
// import Hero3D from './components/Hero3D'
// import Section from './components/Section'
// import Tilt from './components/Tilt'
// import Photo from './components/Photo'
// import Effects from './components/Effects'
// import Typewriter from './components/Typewriter'
// import Stats from './components/Stats'
// import { profile, skills, experience, projects } from './data'

// export default function App() {
//   return (
//     <>
//       <Effects />

//       <nav className="fixed top-0 inset-x-0 z-50 card !rounded-none flex justify-between px-6 py-3 text-sm">
//         <span className="font-bold grad">AA</span>
//         <div className="flex gap-6">
//           {['about','experience','projects','contact'].map(s => (
//             <a key={s} href={`#${s}`} className="hover:text-cyan-300 capitalize">{s}</a>
//           ))}
//         </div>
//       </nav>

//       <header className="relative h-screen">
//         <div className="absolute inset-0"><Suspense fallback={null}><Hero3D /></Suspense></div>
//         <div className="relative z-10 h-full flex flex-col justify-end items-center text-center pb-20 px-6 pointer-events-none">
//           <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.9}}
//             className="text-5xl md:text-7xl font-extrabold"><span className="grad">{profile.name}</span></motion.h1>
//           <p className="mt-4 text-lg md:text-xl text-slate-300">
//             <Typewriter words={['MERN Stack Developer', 'Zoho CRM Automation Engineer', 'React + 3D Enthusiast']} />
//           </p>
//           <div className="mt-8 flex gap-4 pointer-events-auto">
//             <a href="#projects" className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500">View my work</a>
//             <a href="/Aiswarya_AS_Resume.pdf" download className="px-6 py-3 rounded-full card">Resume</a>
//             {/* <a href={`mailto:${profile.email}`} className="px-6 py-3 rounded-full card">Hire me</a> */}
//           </div>
//         </div>
//       </header>

//       <Stats />

//       <Section id="about" title="About">
//         <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
//           <Photo />
//           <div>
//             <p className="text-lg text-slate-300">{profile.summary}</p>
//             <div className="mt-8 flex flex-wrap gap-3">
//               {skills.map(s => <span key={s} className="card px-4 py-2 text-sm hover:border-cyan-400 transition">{s}</span>)}
//             </div>
//           </div>
//         </div>
//       </Section>

//       <Section id="experience" title="Experience">
//         <div className="border-l border-white/15 pl-6 space-y-10">
//           {experience.map(e => (
//             <motion.div key={e.role} initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
//               <h3 className="text-xl font-semibold">{e.role} <span className="text-cyan-300">· {e.org}</span></h3>
//               <p className="text-sm text-slate-400 mb-2">{e.when}</p>
//               <ul className="list-disc ml-5 space-y-1 text-slate-300">{e.points.map(p => <li key={p}>{p}</li>)}</ul>
//             </motion.div>
//           ))}
//         </div>
//       </Section>

//       <Section id="projects" title="Projects">
//         <div className="grid md:grid-cols-2 gap-6">
//           {projects.map(p => (
//             <Tilt key={p.name} className="p-6">
//               <p className="text-xs text-cyan-300 mb-2">{p.tag}</p>
//               <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
//               <p className="text-slate-300 text-sm">{p.desc}</p>
//               {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-violet-300 hover:underline">View code →</a>}
//             </Tilt>
//           ))}
//         </div>
//       </Section>

//       <Section id="contact" title="Let's work together">
//         <div className="flex flex-wrap gap-4">
//           <a className="card px-6 py-3" href={`mailto:${profile.email}`}>Email</a>
//           <a className="card px-6 py-3" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
//           <a className="card px-6 py-3" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
//         </div>
//         <p className="mt-16 text-sm text-slate-500">© {new Date().getFullYear()} {profile.name}</p>
//       </Section>
//     </>
//   )
// }
import { Suspense, useState } from 'react'
import { motion } from 'framer-motion'
import Hero3D from './components/Hero3D'
import Section from './components/Section'
import Tilt from './components/Tilt'
import Photo from './components/Photo'
import Effects from './components/Effects'
import Typewriter from './components/Typewriter'
import Stats from './components/Stats'
import { profile, skills, experience, projects } from './data'

export default function App() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt('Copy my email:', profile.email)
    }
  }

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent('Opportunity for Aiswarya')}`

  return (
    <>
      <Effects />

      <nav className="fixed top-0 inset-x-0 z-50 card !rounded-none flex justify-between px-6 py-3 text-sm">
        <span className="font-bold grad">AA</span>
        <div className="flex gap-6">
          {['about','experience','projects','contact'].map(s => (
            <a key={s} href={`#${s}`} className="hover:text-cyan-300 capitalize">{s}</a>
          ))}
        </div>
      </nav>

      <header className="relative h-screen">
        <div className="absolute inset-0"><Suspense fallback={null}><Hero3D /></Suspense></div>
        <div className="relative z-10 h-full flex flex-col justify-end items-center text-center pb-20 px-6 pointer-events-none">
          <motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.9}}
            className="text-5xl md:text-7xl font-extrabold"><span className="grad">{profile.name}</span></motion.h1>
          <p className="mt-4 text-lg md:text-xl text-slate-300">
            <Typewriter words={['MERN Stack Developer', 'Zoho CRM Automation Engineer', 'React + 3D Enthusiast']} />
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 pointer-events-auto">
            <a href="#projects" className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500">View my work</a>
            <a href="/Aiswarya_AS_Resume.pdf" download className="px-6 py-3 rounded-full card">Resume</a>
            <a href={gmailLink} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full card">Hire me</a>
          </div>
        </div>
      </header>

      <Stats />

      <Section id="about" title="About">
        <div className="grid md:grid-cols-[auto_1fr] gap-12 items-center">
          <Photo />
          <div>
            <p className="text-lg text-slate-300">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map(s => <span key={s} className="card px-4 py-2 text-sm hover:border-cyan-400 transition">{s}</span>)}
            </div>
          </div>
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="border-l border-white/15 pl-6 space-y-10">
          {experience.map(e => (
            <motion.div key={e.role} initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} viewport={{once:true}}>
              <h3 className="text-xl font-semibold">{e.role} <span className="text-cyan-300">· {e.org}</span></h3>
              <p className="text-sm text-slate-400 mb-2">{e.when}</p>
              <ul className="list-disc ml-5 space-y-1 text-slate-300">{e.points.map(p => <li key={p}>{p}</li>)}</ul>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(p => (
            <Tilt key={p.name} className="p-6">
              <p className="text-xs text-cyan-300 mb-2">{p.tag}</p>
              <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
              <p className="text-slate-300 text-sm">{p.desc}</p>
              {p.link && <a href={p.link} target="_blank" rel="noreferrer" className="inline-block mt-4 text-violet-300 hover:underline">View code →</a>}
            </Tilt>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Let's work together">
        <p className="text-slate-300 mb-6">Open to full-stack (MERN) and Zoho CRM roles. Let's talk.</p>

        <div className="card p-6 max-w-xl">
          <p className="text-xs text-slate-400 mb-1">Email me at</p>
          <p className="text-xl font-semibold break-all">{profile.email}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button onClick={copyEmail} className="px-5 py-2 rounded-full bg-violet-600 hover:bg-violet-500">
              {copied ? 'Copied ✓' : 'Copy email'}
            </button>
            <a href={gmailLink} target="_blank" rel="noreferrer" className="px-5 py-2 rounded-full card">Open in Gmail</a>
            <a href={`mailto:${profile.email}`} className="px-5 py-2 rounded-full card">Default mail app</a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a className="card px-6 py-3" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="card px-6 py-3" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>

        <p className="mt-16 text-sm text-slate-500">© {new Date().getFullYear()} {profile.name}</p>
      </Section>
    </>
  )
}