import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import type { Project } from '../data/portfolio'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = project.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8, scale: 1.02, rotateX: 2, rotateY: -2 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-[24px] border border-sky-400/20 bg-slate-900/80 p-6 shadow-[0_20px_80px_rgba(37,99,235,0.16)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_55%)]" />
      <div className="relative">
        <div className="mb-5 inline-flex rounded-2xl border border-sky-400/20 bg-sky-500/10 p-3 text-sky-300">
          <Icon className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-400">{project.description}</p>

        <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-full border border-slate-200/40 bg-white/5 px-3 py-1 text-xs font-medium text-slate-700 dark:text-slate-200">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href="https://github.com/amalsamarthsb?tab=repositories"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-transform duration-200 hover:bg-purple-700"
          >
            View Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200"
          >
            <FaGithub className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}
