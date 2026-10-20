import { Link } from 'react-router'

export default function Hero() {
  return (
    <section className="px-5 pt-6 md:pt-10">
      <div className="relative mx-auto flex min-h-[32rem] max-w-6xl flex-col justify-end overflow-hidden rounded-3xl bg-oliva p-6 text-concreto md:min-h-[38rem] md:p-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-grafite/80 via-grafite/30 to-transparent"
        />

        <div className="relative max-w-2xl">
          <p className="font-display text-xs uppercase tracking-[0.35em] text-areia">
            Escritório de arquitetura
          </p>
          <h1 className="mt-4 font-display text-4xl font-normal leading-[1.1] tracking-tight md:text-6xl">
            Espaços pensados para a vida que acontece dentro deles.
          </h1>
          <p className="mt-5 max-w-lg text-base text-concreto/85 md:text-lg">
            Projetos residenciais e comerciais, do primeiro desenho à entrega da
            obra.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/projetos"
              className="rounded-full bg-terracota-escura px-7 py-3.5 text-center font-medium text-white hover:bg-grafite"
            >
              Ver projetos
            </Link>
            <Link
              to="/contato"
              className="rounded-full border-2 border-concreto/70 px-7 py-3.5 text-center font-medium hover:bg-concreto/10"
            >
              Conversar sobre o projeto
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}