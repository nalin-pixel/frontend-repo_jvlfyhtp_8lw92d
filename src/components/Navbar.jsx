import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-fuchsia-500 to-cyan-400 shadow-lg shadow-cyan-500/30" />
            <span className="text-white font-semibold tracking-wide text-lg">RuBaRu</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#problem" className="hover:text-white transition">Problem</a>
            <a href="#solution" className="hover:text-white transition">Solution</a>
            <a href="#features" className="hover:text-white transition">Features</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition">Whitepaper</a>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-semibold hover:opacity-90 transition">Get Early Access</a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80">
          <div className="px-4 py-4 flex flex-col gap-4 text-white/80">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#problem" className="hover:text-white transition">Problem</a>
            <a href="#solution" className="hover:text-white transition">Solution</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <div className="pt-2 flex gap-3">
              <a href="#" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm transition">Whitepaper</a>
              <a href="#cta" className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-black font-semibold hover:opacity-90 transition">Get Early Access</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
