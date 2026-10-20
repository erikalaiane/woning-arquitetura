import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { navLinks } from '../data/navigation'
import LogoMark from './LogoMark'

const desktopLink = ({ isActive }: { isActive: boolean }) =>
  `relative pb-1.5 text-sm font-medium tracking-wide after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:origin-left after:bg-terracota after:transition-transform ${
    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
  }`

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="relative border-b-2 border-oliva/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link
            to="/"
            onClick={close}
            aria-label="Woning arquitetura, página inicial"
            className="flex items-center gap-3.5"
            >
            <LogoMark className="h-10 w-auto text-grafite" />
            <span className="flex flex-col leading-none">
                <span className="mr-[-0.3em] font-display text-xl font-normal uppercase tracking-[0.3em] md:text-2xl">
                Woning
                </span>
                <span
                aria-hidden="true"
                className="mt-1 flex justify-between font-display text-xs font-medium"
                >
                {'arquitetura'.split('').map((letra, i) => (
                    <span key={i}>{letra}</span>
                ))}
                </span>
            </span>
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-10">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className={desktopLink}>
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
            className={`h-0.5 w-6 bg-grafite transition-transform ${
              open ? 'translate-y-1 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-grafite transition-transform ${
              open ? '-translate-y-1 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Principal"
          className="absolute inset-x-0 top-full z-10 border-b-2 border-oliva/20 bg-concreto md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5">
            {navLinks.map((link) => (
              <li
                key={link.to}
                className="border-t-2 border-oliva/15 first:border-t-0"
              >
                <NavLink
                  to={link.to}
                  onClick={close}
                  className={({ isActive }) =>
                    `block py-4 font-display text-lg font-normal uppercase tracking-[0.2em] ${
                      isActive ? 'text-terracota-escura' : ''
                    }`
                  }
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