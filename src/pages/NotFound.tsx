import { Link } from 'react-router'
import usePageTitle from '../hooks/usePageTitle'

export default function NotFound() {
  usePageTitle('A página que você procurou não existe.', 'Página não encontrada')
  return (
    <section className="px-3 sm:px-4">
      <div className="mx-auto max-w-6xl px-8 py-16 lg:py-24">
        <p className="font-display text-sm font-medium uppercase tracking-[0.25em] text-terracota-escura">
          Erro 404
        </p>
        <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-normal leading-tight tracking-tight lg:text-5xl">
          Não encontramos essa página.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-grafite/80">
          O endereço pode ter mudado ou nunca ter existido. 
        </p>

        <p className="mt-0 max-w-xl text-base leading-relaxed text-grafite/80">
           Que tal voltar a nossa página inicial ou olhar os nossos projetos? 
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/"
            className="rounded-full bg-terracota-escura px-7 py-4 text-center font-medium text-white hover:bg-grafite"
          >
            Voltar ao início
          </Link>
          <Link
            to="/projetos"
            className="rounded-full border-2 border-grafite/70 px-7 py-4 text-center font-medium hover:bg-grafite hover:text-concreto"
          >
            Ver projetos
          </Link>
        </div>
      </div>
    </section>
  )
}