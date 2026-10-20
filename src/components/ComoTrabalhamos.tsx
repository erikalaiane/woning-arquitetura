import { Link } from 'react-router'
import { etapas } from '../data/etapas'

export default function ComoTrabalhamos() {
  return (
    <section className="px-3 sm:px-4">
      <div className="mx-auto max-w-6xl px-8 py-20 lg:py-28">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-terracota-escura">
          Como trabalhamos
        </p>
        <h2 className="mt-4 max-w-xl font-display text-3xl font-normal leading-tight tracking-tight lg:text-4xl">
          Do primeiro desenho à chave na mão.
        </h2>

        <ol className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {etapas.map((etapa, i) => (
            <li key={etapa.titulo} className="border-t-2 border-oliva/20 pt-5">
              <span
                aria-hidden="true"
                className="font-display text-sm tracking-[0.2em] text-terracota-escura"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 font-display text-xl font-normal">
                {etapa.titulo}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-grafite/75">
                {etapa.resumo}
                </p>
            </li>
          ))}
        </ol>
        <Link
            to="/processo"
            className="mt-12 inline-flex rounded-full border-2 border-grafite/70 px-7 py-3 font-medium hover:bg-grafite hover:text-concreto"
            >
            Ver o processo completo
            </Link>
      </div>
    </section>
  )
}