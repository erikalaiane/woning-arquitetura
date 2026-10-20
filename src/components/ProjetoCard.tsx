import { useState } from 'react'
import { Link } from 'react-router'
import type { Projeto } from '../data/projetos'
import LogoMark from './LogoMark'

export default function ProjetoCard({ projeto }: { projeto: Projeto }) {
  const [semFoto, setSemFoto] = useState(false)

  return (
    <Link to={`/projetos/${projeto.slug}`} className="group block">
      <div className="aspect-4/5 overflow-hidden rounded-2xl bg-grafite/10">
        {semFoto ? (
          <div className="grid h-full w-full place-items-center">
            <LogoMark className="h-12 w-auto text-grafite/25" />
          </div>
        ) : (
          <img
            src={projeto.capa.src}
            alt={projeto.capa.alt}
            loading="lazy"
            onError={() => setSemFoto(true)}
            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
        )}
      </div>
      <p className="mt-4 font-display text-xs uppercase tracking-[0.25em] text-terracota-escura">
        {projeto.tipo} · {projeto.ano}
      </p>
      <h3 className="mt-1 font-display text-xl font-normal">
        {projeto.titulo}
      </h3>
      <p className="mt-1 text-sm text-grafite/70">{projeto.local}</p>
    </Link>
  )
}