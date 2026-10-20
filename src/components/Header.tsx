import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { navLinks } from '../data/navigation'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="relative border-b border-oliva/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link
          to="/"
          onClick={close}
          className="font-display text-xl font-light uppercase tracking-[0.3em]"
        >
          Woning
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="text-sm tracking-wide">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`h-px w-6 bg-grafite transition-transform ${
              open ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-grafite transition-transform ${
              open ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="absolute inset-x-0 top-full z-10 border-b border-oliva/20 bg-concreto md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={close}
                  className="block border-t border-oliva/15 py-4 font-display text-lg font-light uppercase tracking-[0.2em] first:border-t-0"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}