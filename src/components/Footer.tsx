import { Link } from 'react-router'
import Logo from './Logo'
import { navLinks } from '../data/navigation'
import { site } from '../data/site'

const titulo =
  'font-display text-xs uppercase tracking-[0.3em] text-areia'

export default function Footer() {
  return (
    <footer className="mx-3 mb-3 rounded-4xl bg-grafite text-concreto sm:mx-4 sm:mb-4 md:rounded-[2.5rem]">
  <div className="mx-auto grid max-w-6xl gap-12 px-8 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link
            to="/"
            aria-label="Woning arquitetura, página inicial"
            className="inline-block"
          >
            <Logo />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-concreto/70">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className={titulo}>Menu</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-areia">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={titulo}>Contato</h2>
          <address className="mt-5 space-y-3 text-sm not-italic text-concreto/80">
            <p>{site.address}</p>
            <p>{site.email}</p>
            <p>{site.phone}</p>
          </address>
        </div>
      </div>

      <div className="border-t-2 border-concreto/10">
       <p className="mx-auto max-w-6xl px-8 py-6 text-xs text-concreto/60">          
       © {new Date().getFullYear()} {site.name}. Projeto conceito criado por
          Erika Laiane para portfólio. Nomes, endereço e contatos são fictícios.
        </p>
      </div>
    </footer>
  )
}