import { Link } from 'react-router'

export default function ChamadaFinal() {
  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="rounded-4xl bg-oliva text-concreto md:rounded-[2.5rem]">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-8 py-8 lg:flex-row lg:items-center lg:justify-between lg:py-12">
          <div className="max-w-xl">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-areia">
              Contato
            </p>
            <h2 className="mt-4 font-display text-3xl font-normal leading-tight tracking-tight lg:text-4xl">
              Vamos conversar sobre o seu projeto?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-concreto/90">
              Conte o que você tem em mente. A primeira conversa é sem
              compromisso.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link
              to="/contato"
              className="rounded-full bg-concreto px-7 py-4 text-center font-medium text-grafite hover:bg-areia"
            >
              Falar com o escritório
            </Link>
            <Link
              to="/projetos"
              className="rounded-full border-2 border-concreto/70 px-7 py-4 text-center font-medium hover:bg-concreto/10"
            >
              Ver projetos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}