import { Link, useParams } from 'react-router'
import { getProjeto, projetos } from '../data/projetos'
import FotoOuLogo from '../components/FotoOuLogo'
import ProjetoCard from '../components/ProjetoCard'
import ChamadaFinal from '../components/ChamadaFinal'
import NotFound from './NotFound'

const rotulo =
  'font-display text-sm font-medium uppercase tracking-[0.25em] text-terracota-escura'

const tituloFicha =
  'font-display text-sm font-medium uppercase tracking-[0.25em] text-oliva'

export default function ProjectDetail() {
  const { slug } = useParams()
  const projeto = slug ? getProjeto(slug) : undefined

  if (!projeto) return <NotFound />

  const indice = projetos.findIndex((p) => p.slug === projeto.slug)
  const outros = [1, 2, 3].map((n) => projetos[(indice + n) % projetos.length])

  const ficha = [
    { rotulo: 'Área construída', valor: `${projeto.area} m²` },
    { rotulo: 'Ano de entrega', valor: String(projeto.ano) },
    { rotulo: 'Local', valor: projeto.local },
    { rotulo: 'Tipo', valor: projeto.tipo },
  ]

  return (
    <>
      <section className="px-3 sm:px-4">
        <div className="mx-auto max-w-6xl px-8 pb-12 pt-8 lg:pb-16 lg:pt-10">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-terracota-escura"
          >
            <span aria-hidden="true">←</span> Todos os projetos
          </Link>

          <p className={`mt-8 ${rotulo}`}>
            {projeto.tipo} · {projeto.ano}
          </p>
          <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-normal leading-tight tracking-tight lg:text-5xl">
            {projeto.titulo}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-grafite/80">
            {projeto.resumo}
          </p>

          <FotoOuLogo
            key={projeto.capa.src}
            src={projeto.capa.src}
            alt={projeto.capa.alt}
            prioridade
            className="mt-10 aspect-4/3 sm:aspect-16/9 md:rounded-4xl"
          />

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <dl className="space-y-6 self-start">
              {ficha.map((item) => (
                <div
                  key={item.rotulo}
                  className="border-t-2 border-oliva/20 pt-5"
                >
                  <dt className={tituloFicha}>{item.rotulo}</dt>
                  <dd className="mt-2 text-lg">{item.valor}</dd>
                </div>
              ))}
            </dl>

            <div className="space-y-5 text-base leading-relaxed text-grafite/80 lg:pt-5">
              {projeto.descricao.map((paragrafo) => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 pb-3 sm:px-4 sm:pb-4">
        <div className="rounded-4xl bg-areia md:rounded-[2.5rem]">
          <div className="mx-auto max-w-6xl px-8 py-8 lg:py-12">
            <p className={rotulo}>Galeria</p>
            <h2 className="mt-4 font-display text-3xl font-normal leading-tight tracking-tight lg:text-4xl">
              Mais imagens do projeto.
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projeto.galeria.map((foto) => (
                <FotoOuLogo
                  key={foto.src}
                  src={foto.src}
                  alt={foto.alt}
                  className="aspect-4/5"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-4">
        <div className="mx-auto max-w-6xl px-8 py-10 lg:py-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className={rotulo}>Outros projetos</p>
              <h2 className="mt-4 font-display text-3xl font-normal leading-tight tracking-tight lg:text-4xl">
                Continue explorando.
              </h2>
            </div>
            <Link
              to="/projetos"
              className="inline-flex shrink-0 justify-center rounded-full border-2 border-grafite/70 px-7 py-3 font-medium hover:bg-grafite hover:text-concreto"
            >
              Ver todos os projetos
            </Link>
          </div>

          <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {outros.map((item) => (
              <ProjetoCard key={item.slug} projeto={item} />
            ))}
          </div>
        </div>
      </section>

      <ChamadaFinal />
    </>
  )
}