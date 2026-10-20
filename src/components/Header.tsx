import { Link, NavLink } from 'react-router'
import { navLinks } from '../data/navigation'

export default function Header() {
  return (
    <header className="border-b border-oliva/20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
        <Link
          to="/"
          className="font-display text-xl font-light uppercase tracking-[0.3em]"
        >
          Woning
        </Link>
        <nav aria-label="Principal">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} className="text-sm tracking-wide">
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}