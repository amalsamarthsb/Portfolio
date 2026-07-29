import { motion } from 'framer-motion'
import { useEffect } from 'react'

type Props = {
  onFinish: () => void
}

export function IntroLoader({ onFinish }: Props) {
  useEffect(() => {
    const t = window.setTimeout(() => onFinish(), 2400)
    return () => window.clearTimeout(t)
  }, [onFinish])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.2, duration: 0.6 }}
      onAnimationComplete={onFinish}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex w-full max-w-md flex-col items-center gap-4 px-6 text-center">
        <div className="relative h-40 w-40">
          <img
            src="/intro.gif"
            alt="Intro animation"
            className="absolute inset-0 m-auto h-40 w-40 object-contain"
            onError={(e) => {
              // hide image if not present, allow SVG fallback to show
              ;(e.currentTarget as HTMLImageElement).style.display = 'none'
            }}
          />

          <svg
            viewBox="0 0 120 120"
            className="absolute inset-0 m-auto h-40 w-40 text-violet-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="g" x1="0" x2="1">
                <stop offset="0%" stopColor="#7C3AED" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            </defs>
            <g fill="none" stroke="url(#g)" strokeWidth="6">
              <circle cx="60" cy="60" r="28" strokeOpacity="0.22" />
              <circle cx="60" cy="60" r="44" strokeOpacity="0.12" />
              <g strokeLinecap="round">
                <circle cx="60" cy="20" r="6" fill="#EC4899" stroke="none" className="animate-pulse" />
              </g>
            </g>
          </svg>
        </div>

        <div className="mt-2 select-none text-center text-lg font-semibold text-sky-300">Nice to meet you</div>
      </div>
    </motion.div>
  )
}

export default IntroLoader
