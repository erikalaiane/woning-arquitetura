import { useState } from 'react'
import { projetos } from '../data/projetos'
import ProjetoCard from '../components/ProjetoCard'

const filtros = ['Todos', 'Residencial', 'Comercial'] as const
type Filtro = (typeof filtros)[number]

export default function Projects() {
  const [filtro, setFiltro] = useState<Filtro>('Todos')

  const lista =
    filtro === 'Todos' ? projetos : projetos.filter((p) => p.tipo === filtro)

  return (
    <section className="px-3 sm:px-4">
      <div className="mx-auto max-w-6xl px-8 pb-20 pt-12 lg:pb-28 lg:pt-16">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-terracota-escura">
          Projetos
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-normal leading-tight tracking-tight lg:text-5xl">
          Residências e espaços comerciais pensados em cada detalhe.
        </h1>

        <div
          role="group"
          aria-label="Filtrar projetos por tipo"
          className="mt-10 flex flex-wrap gap-3"
        >
          {filtros.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filtro === item}
              onClick={() => setFiltro(item)}
              className={`rounded-full border-2 px-6 py-2 text-sm font-medium transition-colors ${
                filtro === item
                  ? 'border-grafite bg-grafite text-concreto'
                  : 'border-grafite/30 hover:border-grafite'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {lista.map((projeto) => (
            <ProjetoCard key={projeto.slug} projeto={projeto} />
          ))}
        </div>
      </div>
    </section>
  )
}