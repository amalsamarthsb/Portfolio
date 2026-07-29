import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState, type FormEvent } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SectionHeading } from './components/SectionHeading'
import { SkillCard } from './components/SkillCard'
import { ProjectCard } from './components/ProjectCard'
import {
  certifications,
  education,
  heroRoles,
  milestones,
  navLinks,
  projects,
  skillSections,
  socials,
  stats,
} from './data/portfolio'
import IntroLoader from './components/IntroLoader'

function App() {
  const isDark = true
  const [menuOpen, setMenuOpen] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [roleIndex, setRoleIndex] = useState(0)
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const interval = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % heroRoles.length)
    }, 2200)

    return () => window.clearInterval(interval)
  }, [])

  

  useEffect(() => {
    document.documentElement.classList.add('dark')
    document.documentElement.style.colorScheme = 'dark'
  }, [])

  // theme is fixed to dark

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = formData.subject || 'Portfolio Inquiry'
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      'Message:',
      formData.message,
    ].join('\n')

    const mailtoLink = `mailto:amal.samarthsb@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    if (typeof window !== 'undefined') {
      const link = document.createElement('a')
      link.href = mailtoLink
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      window.setTimeout(() => {
        window.location.assign(mailtoLink)
      }, 150)
    }
  }

  const shellClass = isDark
    ? 'bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.10),rgba(37,99,235,0.12),transparent_30%),linear-gradient(135deg,#08111f_0%,#0d172b_100%)] text-slate-100'
    : 'bg-[radial-gradient(circle_at_top_left,_rgba(191,219,254,0.55),rgba(139,92,246,0.06),transparent_30%),linear-gradient(135deg,#f8fbff_0%,#eef4ff_100%)] text-slate-900'
  const headerClass = isDark
    ? 'border-white/10 bg-slate-950/70'
    : 'border-slate-200 bg-white/70'
  const panelClass = isDark
    ? 'border-white/10 bg-slate-900/50'
    : 'border-slate-200 bg-white/80'
  const cardClass = isDark
    ? 'border-slate-800 bg-slate-950/70'
    : 'border-slate-200 bg-white'
  const mutedText = isDark ? 'text-slate-400' : 'text-slate-600'
  const softText = isDark ? 'text-slate-300' : 'text-slate-700'

  return (
    <div className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${shellClass}`}>
      {showIntro && <IntroLoader onFinish={() => setShowIntro(false)} />}
      <motion.div
        className="pointer-events-none absolute left-1/3 top-10 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute right-10 top-1/4 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, -18, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.06),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.06),transparent_20%)]"
        animate={{ opacity: [0.95, 1, 0.95] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-gradient-to-r from-sky-400 via-blue-600 to-cyan-400"
        style={{ scaleX }}
      />

      <header className={`sticky top-0 z-40 border-b backdrop-blur-xl ${headerClass}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className={`text-lg font-semibold tracking-[0.2em] ${isDark ? 'text-white' : 'text-slate-900'}`}>
            AMAL<span className="text-sky-400">.DEV</span>
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`text-sm transition hover:text-sky-500 ${softText}`}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {/* Dark mode only — toggle removed */}
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className={`rounded-full border p-2.5 md:hidden ${isDark ? 'border-slate-700 bg-slate-900/80 text-slate-300' : 'border-slate-200 bg-white text-slate-700'}`}
              aria-label="Open navigation"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {menuOpen ? (
          <div className={`border-t px-6 py-4 md:hidden ${isDark ? 'border-white/10 bg-slate-950/95' : 'border-slate-200 bg-white/90'}`}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 text-sm ${softText}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </header>

      <main id="home" className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-8 lg:px-8 lg:py-10">
        <section className={`relative overflow-hidden rounded-[32px] border border-sky-400/20 px-6 py-16 shadow-[0_30px_120px_rgba(37,99,235,0.15)] sm:px-10 lg:px-14 lg:py-20 ${isDark ? 'bg-slate-900/65' : 'bg-white/80'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.22),transparent_30%)]" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} whileHover={{ scale: 1.01 }}>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">Hello, I&apos;m</p>
              <h1 className={`mt-4 text-5xl font-semibold leading-[0.95] sm:text-6xl lg:text-7xl ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Amal Samarth
              </h1>
              <div className={`mt-4 h-14 text-2xl font-medium sm:text-3xl ${softText}`}>
                <span className="text-sky-300">{heroRoles[roleIndex]}</span>
              </div>
              <p className={`mt-5 max-w-2xl text-lg leading-8 ${mutedText}`}>
                I build intelligent systems, production-grade AI products, and developer-friendly experiences that bring ideas to life.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-1">
                  View Projects
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a href="/AMAL-SAMARTH-RESUME.pdf" download target="_blank" rel="noreferrer" className={`rounded-full border px-5 py-3 font-semibold transition hover:border-sky-400 hover:text-sky-500 ${isDark ? 'border-slate-700 text-slate-100' : 'border-slate-300 text-slate-800'}`}>
                  Download Resume
                </a>
                <a href="#contact" className={`rounded-full border px-5 py-3 font-semibold transition hover:border-sky-400 hover:text-sky-500 ${isDark ? 'border-slate-700 text-slate-100' : 'border-slate-300 text-slate-800'}`}>
                        Contact Me
                      </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className={`text-sm font-medium transition hover:text-sky-500 ${mutedText}`}>
                    {social.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <a
              href="https://www.linkedin.com/in/amal-samarth/"
              target="_blank"
              rel="noreferrer"
              className="group"
            >
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative mx-auto flex w-full max-w-md items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-violet-500/15 blur-3xl transition duration-300 group-hover:bg-violet-500/25" />
                <div className={`relative w-full rounded-[28px] border border-sky-400/12 p-6 shadow-[0_30px_100px_rgba(37,99,235,0.12)] sm:p-6 ${isDark ? 'bg-slate-950/60' : 'bg-white/90'}`}>
                  <div className="mb-4 text-center text-sm font-medium text-sky-300">Highlights</div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {milestones.slice(0, 4).map((item) => (
                      <div key={item.title} className={`flex items-center gap-3 rounded-xl border px-3 py-3 text-sm ${isDark ? 'border-slate-700/70 bg-slate-900/70 text-slate-300' : 'border-slate-200 bg-white text-slate-700'}`}>
                        <item.icon className="h-4 w-4 text-sky-400" />
                        {item.title}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </a>
          </div>
        </section>

        <section id="about" className={`grid gap-8 rounded-[32px] border p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10 ${panelClass}`}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} whileHover={{ y: -6, scale: 1.01 }} className="rounded-[24px] border border-slate-800 bg-slate-950/70 p-6">
            <SectionHeading eyebrow="About Me" title="AI Engineer with a product mindset." />
            <div className={`mt-6 space-y-4 ${mutedText}`}>
              <p>
                I&apos;m an aspiring AI Engineer focused on building intelligent applications, generative AI tools, and production-ready APIs with Python, FastAPI, React, and cloud-native workflows.
              </p>
              <p>
                My work spans RAG systems, LLM-powered assistants, full-stack development, and reliable deployment practices using Docker, Azure, and modern frontend tooling.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <motion.div key={stat.label} whileHover={{ y: -6, scale: 1.02 }} className={`rounded-[24px] border p-5 ${isDark ? 'border-slate-800 bg-gradient-to-br from-sky-500/10 to-blue-500/10' : 'border-slate-200 bg-gradient-to-br from-sky-100 to-blue-100'}`}>
                <p className={`text-3xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</p>
                <p className={`mt-2 text-sm ${mutedText}`}>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="skills" className={`rounded-[32px] border p-6 sm:p-8 lg:p-10 ${panelClass}`}>
          <SectionHeading eyebrow="Skills" title="Crafting full-stack AI products with modern tools." description="A focused blend of backend, frontend, AI, and cloud skills shaped for real-world product development." center />
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {skillSections.map((section) => (
              <SkillCard key={section.title} title={section.title} items={section.items} />
            ))}
          </div>
        </section>

        <section id="education" className={`rounded-[32px] border p-6 sm:p-8 lg:p-10 ${panelClass}`}>
          <SectionHeading eyebrow="Education" title="A foundation built on AI, engineering, and practical learning." description="Academic achievements and focused specializations that support modern AI product development." />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {education.map((item) => (
              <motion.div key={item.degree} whileHover={{ y: -6, scale: 1.01 }} className={`rounded-[24px] border p-6 ${cardClass}`}>
                <p className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.degree}</p>
                <p className={`mt-2 text-sm ${mutedText}`}>{item.institution}</p>
                <p className={`mt-1 text-sm ${mutedText}`}>{item.period}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className={`rounded-[32px] border p-6 sm:p-8 lg:p-10 ${panelClass}`}>
          <SectionHeading eyebrow="Featured Projects" title="A curated collection of AI-powered products and developer tools." description="Designed to feel premium, polished, and production-minded while demonstrating expertise across Generative AI, full-stack engineering, and cloud deployment." />
          <div className="mt-8 grid gap-5 xl:grid-cols-3 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className={`rounded-[32px] border p-6 sm:p-8 lg:p-10 ${panelClass}`}>
          <SectionHeading eyebrow="Certifications" title="Validated learning across modern AI and cloud technologies." center />
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {certifications.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -6, scale: 1.01 }} className={`rounded-[20px] border p-5 text-center ${cardClass}`}>
                <p className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.name}</p>
                <p className={`mt-2 text-sm ${mutedText}`}>{item.issuer}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className={`rounded-[32px] border border-sky-400/20 p-6 sm:p-8 lg:p-10 ${isDark ? 'bg-gradient-to-br from-slate-900/70 to-slate-950/80' : 'bg-gradient-to-br from-white/80 to-slate-100/90'}`}>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}>
              <SectionHeading eyebrow="Contact" title="Let’s build something impactful." description="Open to collaborations, internships, freelance AI projects, and full-stack opportunities." />
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="https://www.linkedin.com/in/amal-samarth/" target="_blank" rel="noreferrer" className={`rounded-full border p-3 transition hover:border-sky-400 hover:text-sky-500 ${isDark ? 'border-slate-700 text-slate-200' : 'border-slate-300 text-slate-700'}`}>
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className={`rounded-full border p-3 transition hover:border-sky-400 hover:text-sky-500 ${isDark ? 'border-slate-700 text-slate-200' : 'border-slate-300 text-slate-700'}`}>
                  <FaGithub className="h-5 w-5" />
                </a>
                <a href="mailto:amal.samarthsb@gmail.com" className={`rounded-full border p-3 transition hover:border-sky-400 hover:text-sky-500 ${isDark ? 'border-slate-700 text-slate-200' : 'border-slate-300 text-slate-700'}`}>
                  <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
            <motion.form initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} onSubmit={handleSubmit} className={`grid gap-4 rounded-[24px] border p-6 ${isDark ? 'border-slate-800 bg-slate-900/70' : 'border-slate-200 bg-white/90'}`}>
              <div className="grid gap-4 md:grid-cols-2">
                <input value={formData.name} onChange={(event) => setFormData((current) => ({ ...current, name: event.target.value }))} className={`rounded-xl border px-4 py-3 text-sm outline-none ring-0 ${isDark ? 'border-slate-700 bg-slate-950/80 text-white' : 'border-slate-300 bg-slate-50 text-slate-900'}`} placeholder="Name" />
                <input value={formData.email} onChange={(event) => setFormData((current) => ({ ...current, email: event.target.value }))} className={`rounded-xl border px-4 py-3 text-sm outline-none ring-0 ${isDark ? 'border-slate-700 bg-slate-950/80 text-white' : 'border-slate-300 bg-slate-50 text-slate-900'}`} placeholder="Email" />
              </div>
              <input value={formData.subject} onChange={(event) => setFormData((current) => ({ ...current, subject: event.target.value }))} className={`rounded-xl border px-4 py-3 text-sm outline-none ring-0 ${isDark ? 'border-slate-700 bg-slate-950/80 text-white' : 'border-slate-300 bg-slate-50 text-slate-900'}`} placeholder="Subject" />
              <textarea value={formData.message} onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))} className={`min-h-32 rounded-xl border px-4 py-3 text-sm outline-none ring-0 ${isDark ? 'border-slate-700 bg-slate-950/80 text-white' : 'border-slate-300 bg-slate-50 text-slate-900'}`} placeholder="Message" />
              <button type="submit" className="w-fit rounded-full bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                Send Message
              </button>
            </motion.form>
          </div>
        </section>
      </main>

      <footer className={`border-t px-6 py-8 text-center text-sm lg:px-8 ${mutedText}`}>
        <p>© 2026 Amal Samarth. Crafted with React, TypeScript, and motion.</p>
      </footer>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 rounded-full border border-sky-400/30 p-3 text-sky-500 shadow-[0_10px_30px_rgba(37,99,235,0.2)] ${isDark ? 'bg-slate-950/80' : 'bg-white/90'}`}
      >
        <ArrowUpRight className="h-5 w-5 rotate-[-45deg]" />
      </button>
    </div>
  )
}

export default App
