import { motion, useAnimationControls } from 'framer-motion'
import { ShieldCheck, Crown, Users, Image, Sparkles, Wallet, Link2, Network } from 'lucide-react'
import { useMemo, useState } from 'react'

const nodesData = [
  { id: 'creator', label: 'Creator', icon: Crown, x: 120, y: 180, color: '#e879f9' },
  { id: 'content', label: 'Content NFT', icon: Image, x: 340, y: 80, color: '#22d3ee' },
  { id: 'fans', label: 'Fans', icon: Users, x: 560, y: 180, color: '#60a5fa' },
  { id: 'brands', label: 'Brands', icon: Link2, x: 340, y: 300, color: '#34d399' },
  { id: 'rewards', label: 'Rewards Pool', icon: Wallet, x: 720, y: 80, color: '#fbbf24' },
  { id: 'dao', label: 'Creator DAO', icon: Network, x: 720, y: 300, color: '#a78bfa' },
  { id: 'moderation', label: 'DeAI Oracle', icon: ShieldCheck, x: 940, y: 180, color: '#f472b6' },
]

const edges = [
  ['creator', 'content'],
  ['content', 'fans'],
  ['fans', 'rewards'],
  ['rewards', 'creator'],
  ['content', 'brands'],
  ['brands', 'dao'],
  ['dao', 'creator'],
  ['content', 'moderation'],
]

function useLayout(width) {
  return useMemo(() => {
    const scale = width < 640 ? 0.75 : width < 1024 ? 0.9 : 1
    return { scale }
  }, [width])
}

function Node({ x, y, color, label, Icon, active, onHover, onLeave, onClick }) {
  return (
    <g transform={`translate(${x}, ${y})`} onMouseEnter={onHover} onMouseLeave={onLeave} onClick={onClick} style={{ cursor: 'pointer' }}>
      <motion.circle r={30} fill={`rgba(255,255,255,0.06)`} stroke={color} strokeOpacity={active ? 0.9 : 0.5} strokeWidth={active ? 3 : 2} whileHover={{ scale: 1.08, filter: 'drop-shadow(0 0 12px rgba(56,189,248,0.35))' }} />
      <foreignObject x={-16} y={-16} width={32} height={32} pointerEvents="none">
        <div className="w-8 h-8 flex items-center justify-center">
          <Icon size={20} color={color} />
        </div>
      </foreignObject>
      <text y={50} textAnchor="middle" fontSize={12} fill="rgba(255,255,255,0.8)">{label}</text>
    </g>
  )
}

function Edge({ from, to, nodes, active }) {
  const A = nodes.find(n => n.id === from)
  const B = nodes.find(n => n.id === to)
  if (!A || !B) return null

  const dx = B.x - A.x
  const dy = B.y - A.y
  const len = Math.hypot(dx, dy)
  const angle = Math.atan2(dy, dx)

  const dashArray = 8

  return (
    <g transform={`translate(${A.x}, ${A.y}) rotate(${(angle * 180) / Math.PI})`}>
      <motion.line
        x1={0}
        y1={0}
        x2={len}
        y2={0}
        stroke={`url(#grad-flow)`}
        strokeOpacity={active ? 0.95 : 0.6}
        strokeWidth={active ? 3 : 2}
        strokeDasharray={`${dashArray} ${dashArray}`}
        animate={{ strokeDashoffset: [0, -dashArray * 2] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'linear' }}
      />
    </g>
  )
}

export default function SubnetShowcase() {
  const [active, setActive] = useState('creator')
  const [w, setW] = useState(1060)
  const controls = useAnimationControls()

  const nodes = nodesData

  const onEnter = (id) => setActive(id)

  return (
    <div className="relative rounded-3xl ring-1 ring-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6 sm:p-8">
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80 ring-1 ring-white/20">Interactive • Ownership • Subnets</div>
          <h3 className="mt-4 text-2xl sm:text-3xl font-bold">Ownership across blockchain subnets</h3>
          <p className="mt-2 text-white/70 max-w-xl">Explore how content flows between creator, fans, brands, DAOs and verification oracles. Each hop is on-chain, preserving sovereign ownership with instant, fair rewards.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70">
            <span className="px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">Content NFT</span>
            <span className="px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">Rewards Pool</span>
            <span className="px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">Creator DAO</span>
            <span className="px-2 py-1 rounded bg-white/5 ring-1 ring-white/10">DeAI Oracle</span>
          </div>
        </div>
        <div className="text-sm text-white/60 max-w-sm">
          Tip: Hover or tap nodes to highlight paths. Dashed gradients indicate value and permissions flowing across subnets. Click the creator to pulse the entire network.
        </div>
      </div>

      <div className="mt-8 relative">
        <svg
          className="w-full"
          viewBox="0 0 1060 380"
          onMouseEnter={() => controls.start({ opacity: 1 })}
          onMouseLeave={() => controls.start({ opacity: 1 })}
        >
          <defs>
            <linearGradient id="grad-flow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f0abfc" />
              <stop offset="50%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
            <radialGradient id="glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(56,189,248,0.6)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0)" />
            </radialGradient>
          </defs>

          {/* soft background grid */}
          <g opacity={0.25}>
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={`vx-${i}`} x1={i * 90} y1={0} x2={i * 90} y2={380} stroke="url(#grad-flow)" strokeOpacity={0.06} />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={`hx-${i}`} x1={0} y1={i * 50} x2={1060} y2={i * 50} stroke="url(#grad-flow)" strokeOpacity={0.06} />
            ))}
          </g>

          {/* edges */}
          {edges.map(([a, b]) => (
            <Edge key={`${a}-${b}`} from={a} to={b} nodes={nodes} active={active === a || active === b} />
          ))}

          {/* glow on active */}
          {nodes.map((n) => (
            <circle key={`glow-${n.id}`} cx={n.x} cy={n.y} r={active === n.id ? 60 : 40} fill="url(#glow)" opacity={active === n.id ? 0.35 : 0.15} />
          ))}

          {/* nodes */}
          {nodes.map((n) => (
            <Node
              key={n.id}
              x={n.x}
              y={n.y}
              color={n.color}
              label={n.label}
              Icon={n.icon}
              active={active === n.id}
              onHover={() => onEnter(n.id)}
              onLeave={() => null}
              onClick={() => setActive(n.id)}
            />
          ))}
        </svg>
      </div>

      <div className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
        <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
          <div className="text-white font-semibold">Sovereign Identity</div>
          <div className="text-white/70 mt-1">Profiles and content exist as on-chain assets. Ownership is portable and provable.</div>
        </div>
        <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
          <div className="text-white font-semibold">Programmable Rewards</div>
          <div className="text-white/70 mt-1">Engagement triggers payouts via smart contracts—no middlemen.</div>
        </div>
        <div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
          <div className="text-white font-semibold">Transparent Moderation</div>
          <div className="text-white/70 mt-1">DeAI oracles score and route content without opaque algorithms.</div>
        </div>
      </div>
    </div>
  )
}
