import { Link } from 'react-router'
import { projetosDestaque } from '../data/projetos'
import ProjetoCard from './ProjetoCard'

export default function Projetos() {
  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="rounded-4xl bg-areia md:rounded-[2.5rem]">
        <div className="mx-auto max-w-6xl px-8 py-16 lg:py-24">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-terracota-escura">
                Projetos
              </p>
              <h2 className="mt-4 font-display text-3xl font-normal leading-tight tracking-tight lg:text-4xl">
                Alguns dos espaços que já projetamos.
              </h2>
            </div>
            <Link
              to="/projetos"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-terracota-escura px-7 py-3 font-medium text-white hover:bg-grafite"
            >
              Ver todos os projetos
            </Link>
          </div>

          <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {projetosDestaque.map((projeto) => (
              <ProjetoCard key={projeto.slug} projeto={projeto} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}