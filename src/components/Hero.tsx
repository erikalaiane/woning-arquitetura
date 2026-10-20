import { Link } from 'react-router'
import heroImg from '../assets/heroimg.webp'

const destaque = [
  { valor: '180 m²', rotulo: 'área construída' },
  { valor: '2025', rotulo: 'ano de entrega' },
  { valor: 'RJ', rotulo: 'localização' },
]

export default function Hero() {
  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4">      
    <div className="relative flex min-h-144 flex-col justify-end overflow-hidden rounded-4xl bg-grafite text-concreto md:min-h-[min(42rem,calc(100svh-6rem))] md:rounded-[2.5rem]">
            <img
          src={heroImg}
          alt="Casa moderna com grandes janelas cercada por vegetação"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[65%_50%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-grafite/95 from-30% via-grafite/65 via-60% to-transparent lg:from-grafite/90 lg:from-0% lg:via-grafite/45 lg:via-50%"
        />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-8 pb-10 pt-16 lg:flex-row lg:items-end lg:justify-between lg:pb-12">          <div className="max-w-2xl">
            <p className="inline-block rounded-full border border-concreto/30 bg-grafite/35 px-4 py-2 font-display text-xs uppercase tracking-[0.3em] text-concreto backdrop-blur-sm">
              Escritório de arquitetura
            </p>
            <h1 className="mt-5 font-display text-4xl font-normal leading-[1.1] tracking-tight [text-shadow:0_2px_24px_rgba(0,0,0,0.45)] lg:text-5xl">
              Espaços pensados para a vida que acontece dentro deles.
            </h1>
            <p className="mt-5 hidden max-w-lg text-base text-concreto/90 sm:block lg:text-lg">
              Projetos residenciais e comerciais, do primeiro desenho à entrega
              da obra.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projetos"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-terracota-escura py-2 pl-7 pr-2 font-medium text-white hover:bg-concreto hover:text-grafite"
              >
                Ver projetos
                <span
                  aria-hidden="true"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/contato"
                className="rounded-full border-2 border-concreto/70 px-7 py-4 text-center font-medium hover:bg-concreto/10"
              >
                Conversar sobre o projeto
              </Link>
            </div>
          </div>

          <div className="hidden rounded-2xl border border-concreto/25 bg-concreto/10 p-5 backdrop-blur-md lg:block lg:w-104">
            <p className="font-display text-xs uppercase tracking-[0.25em] text-areia">
              Projeto em destaque
            </p>
            <p className="mt-1 font-display text-xl">Casa Pátio</p>
            <dl className="mt-4 grid grid-cols-3 gap-4 border-t-2 border-concreto/20 pt-4">
              {destaque.map((item) => (
                <div key={item.rotulo} className="flex flex-col-reverse">
                  <dt className="text-xs text-concreto/70">{item.rotulo}</dt>
                  <dd className="font-display text-xl">{item.valor}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}