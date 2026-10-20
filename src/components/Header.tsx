import { useState } from 'react'
import { Link, NavLink } from 'react-router'
import { navLinks } from '../data/navigation'
import Logo from './Logo'

const desktopLink = ({ isActive }: { isActive: boolean }) =>
  `relative pb-1.5 text-sm font-medium tracking-wide after:absolute after:inset-x-0 after:-bottom-px after:h-0.5 after:origin-left after:bg-terracota after:transition-transform ${
    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'
  }`

const botaoContato =
  'rounded-full bg-terracota-escura px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-grafite'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="relative z-20 px-3 sm:px-4">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
        <Link
          to="/"
          onClick={close}
          aria-label="Woning arquitetura, página inicial"
        >
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                {link.to === '/contato' ? (
                  <Link to={link.to} className={botaoContato}>
                    {link.label}
                  </Link>
                ) : (
                  <NavLink to={link.to} className={desktopLink}>
                    {link.label}
                  </NavLink>
                )}
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
          className="absolute inset-x-3 top-full overflow-hidden rounded-3xl bg-areia shadow-lg md:hidden"
        >
          <ul className="flex flex-col px-6">
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