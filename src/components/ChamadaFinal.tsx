import { useState } from 'react'
import { Link } from 'react-router'

type Props = {
  imagem?: { src: string; alt: string }
}

const imagemPadrao = {
  src: '/escritorio/sede.webp',
  alt: 'Fachada do escritório Woning Arquitetura, com letreiro escuro e vitrine iluminada',
}

export default function ChamadaFinal({ imagem = imagemPadrao }: Props) {
  const [semFoto, setSemFoto] = useState(false)

  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="rounded-4xl bg-oliva text-concreto md:rounded-[2.5rem]">
        <div
          className={`mx-auto grid max-w-6xl gap-10 px-8 py-8 lg:py-12 ${
            semFoto ? '' : 'lg:grid-cols-2 lg:items-center lg:gap-16'
          }`}
        >
          <div className="max-w-xl">
            <p className="font-display text-sm font-medium uppercase tracking-[0.25em] text-areia">
              Contato
            </p>
            <h2 className="mt-4 font-display text-3xl font-normal leading-tight tracking-tight lg:text-4xl">
              Vamos conversar sobre o seu projeto?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-concreto/90">
              Conte o que você tem em mente. A primeira conversa é sem
              compromisso.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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

          {!semFoto && (
            <img
              src={imagem.src}
              alt={imagem.alt}
              loading="lazy"
              onError={() => setSemFoto(true)}
              className="aspect-4/3 w-full rounded-2xl object-cover"
            />
          )}
        </div>
      </div>
    </section>
  )
}