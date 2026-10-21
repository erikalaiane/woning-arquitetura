import FotoOuLogo from '../components/FotoOuLogo'
import ChamadaFinal from '../components/ChamadaFinal'
import usePageTitle from '../hooks/usePageTitle'

const rotulo =
  'font-display text-sm font-medium uppercase tracking-[0.25em] text-terracota-escura'

const valores = [
  {
    titulo: 'Escuta antes do traço',
    texto:
      'Cada projeto começa entendendo a rotina de quem vai usar o espaço. O desenho só vem depois.',
  },
  {
    titulo: 'Clareza em cada etapa',
    texto:
      'Prazos, custos e decisões são explicados com calma, para que você saiba sempre o que vem a seguir.',
  },
  {
    titulo: 'Cuidado com o detalhe',
    texto:
      'Materiais, luz e proporção são pensados juntos, porque é nos detalhes que o espaço se torna confortável.',
  },
]

const equipe = [
  {
    slug: 'livia-andrade',
    nome: 'Lívia Andrade',
    cargo: 'Arquiteta e sócia-fundadora',
  },
  {
    slug: 'tomas-reis',
    nome: 'Tomás Reis',
    cargo: 'Arquiteto e sócio',
  },
  {
    slug: 'beatriz-moura',
    nome: 'Beatriz Moura',
    cargo: 'Arquiteta de interiores',
  },
  {
    slug: 'caio-nogueira',
    nome: 'Caio Nogueira',
    cargo: 'Coordenador de obras',
  },
]


export default function Office() {
  usePageTitle(
  'Conheça a história, os valores e a equipe do Woning Arquitetura.',
  'Escritório',
)

  return (
    <>
      <section className="px-3 sm:px-4">
        <div className="mx-auto max-w-6xl px-8 pb-12 pt-10 lg:pb-16 lg:pt-12">
          <p className={rotulo}>Escritório</p>
          <h1 className="mt-4 max-w-6xl text-balance font-display text-4xl font-normal leading-tight tracking-tight lg:text-5xl">
            Um escritório pequeno, com atenção em cada projeto.
          </h1>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_1.1fr] lg:items-center lg:gap-16">
            <FotoOuLogo
              src="/escritorio/sede.webp"
              alt="Equipe do Woning reunida em volta da mesa de projetos"
              className="aspect-square"
            />

            <div>
              <h2 className="font-display text-2xl font-normal leading-tight lg:text-3xl">
                Nossa história
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-grafite/80">
                <p>
                  O Woning nasceu em 2014, como um escritório de duas pessoas
                  que queriam projetar casas e espaços de trabalho com mais
                  conversa e menos pressa.
                </p>
                <p>
                  Hoje somos uma equipe pequena, que acompanha cada projeto do
                  primeiro desenho à entrega da obra. Ficar pequenos é uma
                  escolha: assim, quem projeta é também quem visita o terreno,
                  conversa com você e confere a obra.
                </p>
                <p>
                  O nome vem do alemão <em>Wohnung</em>, que quer dizer
                  moradia. É essa ideia que guia o trabalho: pensar o espaço a
                  partir de como as pessoas vivem nele.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 pb-3 sm:px-4 sm:pb-4">
        <div className="rounded-4xl bg-areia md:rounded-[2.5rem]">
          <div className="mx-auto max-w-6xl px-8 py-8 lg:py-12">
            <p className={rotulo}>Valores</p>
            <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-normal leading-tight tracking-tight lg:text-4xl">
              O que guia o nosso trabalho.
            </h2>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {valores.map((item) => (
                <div key={item.titulo} className="rounded-2xl bg-concreto p-7">
                  <h3 className="font-display text-xl font-normal">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-grafite/80">
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-3 sm:px-4">
        <div className="mx-auto max-w-6xl px-8 py-10 lg:py-14">
          <p className={rotulo}>Equipe</p>
          <h2 className="mt-4 max-w-xl text-balance font-display text-3xl font-normal leading-tight tracking-tight lg:text-4xl">
            Quem vai estar com você no projeto.
          </h2>

          <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((pessoa) => (
              <li key={pessoa.slug}>
                <FotoOuLogo
                  src={`/equipe/${pessoa.slug}.webp`}
                  alt={`Retrato de ${pessoa.nome}`}
                  className="aspect-4/5"
                />
                <h3 className="mt-4 font-display text-xl font-normal">
                  {pessoa.nome}
                </h3>
                <p className="mt-1 text-sm text-grafite/70">{pessoa.cargo}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ChamadaFinal
        imagem={{
          src: '/projetos/casa-patio/capa.webp',
          alt: 'Fachada da Casa Pátio ao entardecer, com varandas e pedra aparente',
        }}
      />
    </>
  )
}