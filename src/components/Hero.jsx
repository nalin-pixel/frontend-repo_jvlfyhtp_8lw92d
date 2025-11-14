import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-center text-center">
        <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/20">
          Fully On-Chain • SocialFi • DeAI • Web3
        </motion.span>

        <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-br from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_8px_30px_rgba(56,189,248,0.35)]">
          RuBaRu: Social Media, Rebuilt On-Chain
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-6 max-w-3xl text-base sm:text-lg text-white/80">
          Empowering creators, communities, and brands with true ownership, instant rewards, and transparent discovery. A Web3 social network that feels as effortless as Web2.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#cta" className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-semibold hover:opacity-90 transition">Get Early Access</a>
          <a href="#about" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white">Learn More</a>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left w-full">
          {[
            { kpi: '45+ years', label: 'Team experience' },
            { kpi: '100% on-chain', label: 'Social graph & content' },
            { kpi: 'DeAI', label: 'Transparent moderation' },
            { kpi: '1B users', label: 'Ambition for Web3' },
          ].map((item) => (
            <div key={item.kpi} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-4">
              <div className="text-xl sm:text-2xl font-bold text-white">{item.kpi}</div>
              <div className="text-white/70 text-sm">{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="mt-14 w-full">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-2">
            <video className="w-full rounded-2xl" autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=2070&auto=format&fit=crop" src="https://cdn.coverr.co/videos/coverr-blockchain-technology-9585/1080p.mp4" />
          </div>
          <p className="text-xs text-white/50 mt-2">Live networks · Social graph + subnets · Ownership trails</p>
        </motion.div>
      </div>
    </section>
  )
}
