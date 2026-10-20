import { Link } from 'react-router'
import heroImg from '../assets/heroimg.webp'

const destaque = [
  { valor: '180 m²', rotulo: 'área construída' },
  { valor: '2025', rotulo: 'ano de entrega' },
  { valor: 'RJ', rotulo: 'localização' },
]

export default function Hero() {
  return (
    <section className="px-5 pt-6 md:pt-10">
      <div className="relative mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-end overflow-hidden rounded-3xl bg-oliva p-6 text-concreto md:min-h-[42rem] md:p-12">
        <img
          src={heroImg}
          alt="Casa moderna com grandes janelas, luzes quentes, quintal gramado e estruturas de pedra"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-grafite/80 via-grafite/25 to-transparent"
        />

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-xs uppercase tracking-[0.35em] text-areia">
              Escritório de arquitetura
            </p>
            <h1 className="mt-4 font-display text-4xl font-normal leading-[1.1] tracking-tight md:text-6xl">
              Espaços pensados para a vida que acontece dentro deles.
            </h1>
            <p className="mt-5 max-w-lg text-base text-concreto/85 md:text-lg">
              Projetos residenciais e comerciais, do primeiro desenho à entrega
              da obra.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/projetos"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-terracota-escura py-2 pl-7 pr-2 font-medium text-white hover:bg-grafite"
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

          <div className="rounded-2xl border border-concreto/25 bg-concreto/15 p-5 backdrop-blur-md lg:w-[26rem]">
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