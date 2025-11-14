import { motion } from 'framer-motion'
import { Shield, Zap, Award, Users, Lock, Coins, Rocket, Handshake } from 'lucide-react'
import SubnetShowcase from './SubnetShowcase'

export default function Sections() {
  return (
    <div className="relative bg-black text-white">
      {/* About */}
      <section id="about" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">About RuBaRu</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              RuBaRu is a pioneering Fully OnChain SocialFi project built by a team of developers, entrepreneurs, and community builders with over 45 years of combined experience. We are reimagining the creator economy with a product-first approach and user-centric design to onboard the next billion users to Web3.
            </p>
            <p className="mt-4 text-white/70">
              By harnessing decentralized AI (DeAI), RuBaRu brings transparency to content moderation and discovery—replacing the opaque algorithms that dominate current platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[{icon: Rocket, text: 'Product-first'}, {icon: Users, text: 'Community-driven'}, {icon: Award, text: 'For creators'}, {icon: Shield, text: 'Transparent DeAI'}].map(({icon:Icon, text}) => (
              <div key={text} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 flex items-center gap-3">
                <Icon className="text-cyan-300" />
                <span className="text-white/90">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">The Problem</h2>
            <div className="mt-6 space-y-4 text-white/80">
              <p>Creators risk losing content and profiles without due process. Earnings are delayed—up to six months to make the first dollar—and creators receive only a fraction of what platforms earn.</p>
              <p>The industry is fragmented, controlled by intermediaries, and consumers aren’t rewarded despite driving growth.</p>
            </div>
          </div>
          <ul className="space-y-4">
            {[{icon: Lock, title: 'Content sovereignty', text: 'Profiles and content can be censored or taken down without clarity.'}, {icon: Coins, title: 'Unfair payouts', text: 'Creators get ~25% while platforms take the majority.'}, {icon: Users, title: 'No consumer incentives', text: 'Engagement fuels platforms but users get nothing in return.'}].map(({icon:Icon, title, text}) => (
              <li key={title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <div className="flex items-center gap-3">
                  <Icon className="text-fuchsia-300" />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="mt-2 text-white/70">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold">Our On-Chain Solution</h2>
          <p className="mt-4 text-white/80 max-w-3xl">Every element—backend, database, social graph, and content—is fully on-chain for security and transparency.</p>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: 'True ownership',
              text: 'Creators control their content and profiles, stored securely on-chain with no risk of tampering.',
              icon: Shield
            }, {
              title: 'Instant, fair rewards',
              text: 'Tokenized incentives from day one. No middlemen, no delays.',
              icon: Zap
            }, {
              title: 'Consumer incentives',
              text: 'Users earn tokens for engaging, sharing, and supporting creators with CCIP.',
              icon: Coins
            }, {
              title: 'Direct brand collaborations',
              text: 'Smart contracts power transparent, seamless partnerships.',
              icon: Handshake
            }, {
              title: 'New monetization',
              text: 'Social tokens and DAOs unlock new revenue streams and community ownership.',
              icon: Award
            }, {
              title: 'Built for billions',
              text: 'Web2-level UX with Web3-level transparency and sovereignty.',
              icon: Users
            }].map(({title, text, icon:Icon}) => (
              <div key={title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
                <div className="flex items-center gap-3">
                  <Icon className="text-cyan-300" />
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="mt-2 text-white/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive subnet ownership showcase */}
      <section id="subnets" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl sm:text-4xl font-bold">Interactive: Ownership across blockchain subnets</h2>
          <p className="mt-3 text-white/80 max-w-2xl">Hover or tap nodes to trace how content NFTs, rewards, and permissions move between creators, fans, brands, DAOs, and DeAI oracles—all on-chain.</p>
          <div className="mt-8">
            <SubnetShowcase />
          </div>
        </motion.div>
      </section>

      {/* Social vibe section */}
      <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="grid lg:grid-cols-3 gap-6">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 ring-1 ring-white/10">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-70 group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <div className="text-white font-semibold">Creator Story #{i}</div>
                <div className="text-white/70 text-sm">On-chain, sovereign, rewarded.</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 border-t border-white/10">
        <div className="rounded-3xl bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 ring-1 ring-white/10 p-10 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold">Be first to experience on-chain social</h3>
          <p className="mt-3 text-white/80">Join the waitlist for beta access, drops, and creator tools.</p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <input type="email" required placeholder="Enter your email" className="flex-1 rounded-xl bg-black/60 ring-1 ring-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-white/40" />
            <button type="submit" className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-semibold hover:opacity-90 transition">Join Waitlist</button>
          </form>
          <p className="mt-3 text-xs text-white/60">By joining, you agree to receive updates about RuBaRu.</p>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 border-t border-white/10 text-white/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
          <span>RuBaRu © {new Date().getFullYear()}</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#solution" className="hover:text-white">Solution</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#cta" className="hover:text-white">Get Access</a>
        </div>
      </footer>
    </div>
  )
}
