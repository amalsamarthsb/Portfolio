import { motion } from 'framer-motion'

interface SkillCardProps {
  title: string
  items: string[]
}

export function SkillCard({ title, items }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3 }}
      className="rounded-2xl border border-slate-200/10 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(56,189,248,0.08)]"
    >
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-sky-200/40 bg-sky-50 dark:bg-sky-500/10 px-3 py-1 text-sm text-sky-700 dark:text-sky-200"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
