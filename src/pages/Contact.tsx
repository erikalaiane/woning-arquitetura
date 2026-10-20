import { useState } from 'react'
import type { FormEvent } from 'react'
import { site } from '../data/site'

const campo =
  'mt-2 w-full rounded-xl border-2 border-grafite/15 bg-concreto px-4 py-3 text-base text-grafite placeholder:text-grafite/40 focus:border-terracota-escura focus:outline-none focus:ring-4 focus:ring-terracota/20'

const rotulo = 'block text-sm font-medium'

const tituloItem =
  'font-display text-xs uppercase tracking-[0.25em] text-oliva'

// Mapa ilustrativo. Para um mapa de verdade, troque o conteúdo por:
// <iframe
//   title="Mapa da localização do escritório"
//   src="https://www.google.com/maps?q=Rio+de+Janeiro&output=embed"
//   loading="lazy"
//   className="h-full w-full border-0"
// />
function Mapa() {
  return (
    <div
      role="img"
      aria-label="Mapa ilustrativo da localização do escritório"
      className="relative aspect-16/10 overflow-hidden rounded-2xl bg-areia"
    >
      <svg
        viewBox="0 0 400 250"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
        className="h-full w-full text-oliva/30"
      >
        <path d="M-10 70 L410 40" stroke="currentColor" strokeWidth="10" />
        <path d="M-10 185 L410 205" stroke="currentColor" strokeWidth="14" />
        <path d="M110 -10 L90 260" stroke="currentColor" strokeWidth="10" />
        <path d="M290 -10 L310 260" stroke="currentColor" strokeWidth="12" />
        <path d="M-10 125 L410 120" stroke="currentColor" strokeWidth="4" />
        <path d="M200 -10 L205 260" stroke="currentColor" strokeWidth="4" />
        <rect
          x="315"
          y="68"
          width="70"
          height="44"
          rx="8"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
      <span className="absolute left-[52%] top-[48%] grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-terracota-escura ring-8 ring-terracota/25">
        <span className="h-3 w-3 rounded-full bg-white" />
      </span>
    </div>
  )
}

export default function Contact() {
  const [enviado, setEnviado] = useState(false)

  function aoEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <section className="px-3 sm:px-4">
      <div className="mx-auto max-w-6xl px-8 pb-12 pt-10 lg:pb-16 lg:pt-12">
        <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-terracota-escura">
          Contato
        </p>
        <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-normal leading-tight tracking-tight lg:text-5xl">
          Conte o que você tem em mente.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-grafite/80">
          Escreva sobre o espaço que quer projetar, mesmo que ainda seja só uma
          ideia. Respondemos em até dois dias úteis.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div className="order-2 space-y-8 self-start lg:order-1">
            <dl className="space-y-6">
              <div className="border-t-2 border-oliva/20 pt-5">
                <dt className={tituloItem}>E-mail</dt>
                <dd className="mt-2 text-lg">
                  <a
                    href={`mailto:${site.email}`}
                    className="hover:text-terracota-escura"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="border-t-2 border-oliva/20 pt-5">
                <dt className={tituloItem}>Telefone</dt>
                <dd className="mt-2 text-lg">{site.phone}</dd>
              </div>
              <div className="border-t-2 border-oliva/20 pt-5">
                <dt className={tituloItem}>Horário</dt>
                <dd className="mt-2 text-lg">Segunda a sexta, das 9h às 18h</dd>
              </div>
            </dl>

            <div className="border-t-2 border-oliva/20 pt-5">
              <p className={tituloItem}>Localização</p>
              <div className="mt-4">
                <Mapa />
              </div>
              <address className="mt-4 text-base not-italic text-grafite/85">
                {site.address}
              </address>
              <p className="mt-1 text-sm text-grafite/70">
                Recebemos clientes com hora marcada.
              </p>
            </div>
          </div>

          <div className="order-1 rounded-3xl bg-areia p-6 sm:p-8 lg:order-2">
            <div aria-live="polite">
              {enviado ? (
                <div className="py-8">
                  <h2 className="font-display text-2xl font-normal">
                    Mensagem recebida!
                  </h2>
                  <p className="mt-3 max-w-md text-base leading-relaxed text-grafite/80">
                    Obrigada pelo contato. Este é um site conceito, então a
                    mensagem não foi enviada de verdade, mas é assim que a
                    confirmação apareceria.
                  </p>
                  <button
                    type="button"
                    onClick={() => setEnviado(false)}
                    className="mt-6 rounded-full border-2 border-grafite/70 px-6 py-2.5 text-sm font-medium hover:bg-grafite hover:text-concreto"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={aoEnviar} className="space-y-5">
                  <div>
                    <label htmlFor="nome" className={rotulo}>
                      Nome
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      autoComplete="name"
                      className={campo}
                    />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className={rotulo}>
                        E-mail
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={campo}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefone" className={rotulo}>
                        Telefone{' '}
                        <span className="font-normal text-grafite/60">
                          (opcional)
                        </span>
                      </label>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        autoComplete="tel"
                        className={campo}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="tipo" className={rotulo}>
                      Tipo de projeto
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      defaultValue="Residencial"
                      className={campo}
                    >
                      <option>Residencial</option>
                      <option>Comercial</option>
                      <option>Ainda não sei</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensagem" className={rotulo}>
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={5}
                      required
                      className={campo}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="rounded-full bg-terracota-escura px-8 py-3.5 font-medium text-white hover:bg-grafite"
                    >
                      Enviar mensagem
                    </button>
                    <p className="mt-4 text-xs text-grafite/60">
                      Site conceito: a mensagem não é enviada de verdade.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}