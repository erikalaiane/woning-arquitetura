import { useState } from 'react'
import type { FormEvent } from 'react'
import LogoMark from '../components/LogoMark'
import { site } from '../data/site'

const campo =
  'mt-2 w-full rounded-xl border-2 border-grafite/15 bg-concreto px-4 py-3 text-base text-grafite placeholder:text-grafite/40 focus:border-terracota-escura focus:outline-none focus:ring-4 focus:ring-terracota/20'

const rotulo = 'block text-sm font-medium'

export default function Contact() {
  const [enviado, setEnviado] = useState(false)

  function aoEnviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEnviado(true)
  }

  return (
    <>
      <section className="px-3 sm:px-4">
        <div className="mx-auto max-w-6xl px-8 pb-12 pt-10 lg:pb-16 lg:pt-12">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-terracota-escura">
            Contato
          </p>
          <h1 className="mt-4 max-w-2xl text-balance font-display text-4xl font-normal leading-tight tracking-tight lg:text-5xl">
            Conte o que você tem em mente.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-grafite/80">
            Escreva sobre o espaço que quer projetar, mesmo que ainda seja só
            uma ideia. Respondemos em até dois dias úteis.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <dl className="space-y-8 self-start">
              <div className="border-t-2 border-oliva/20 pt-5">
                <dt className="font-display text-xs uppercase tracking-[0.25em] text-oliva">
                  E-mail
                </dt>
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
                <dt className="font-display text-xs uppercase tracking-[0.25em] text-oliva">
                  Telefone
                </dt>
                <dd className="mt-2 text-lg">{site.phone}</dd>
              </div>
              <div className="border-t-2 border-oliva/20 pt-5">
                <dt className="font-display text-xs uppercase tracking-[0.25em] text-oliva">
                  Horário
                </dt>
                <dd className="mt-2 text-lg">Segunda a sexta, das 9h às 18h</dd>
              </div>
            </dl>

            <div className="rounded-3xl bg-areia p-6 sm:p-8">
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

      <section className="px-3 pb-3 sm:px-4 sm:pb-4">
        <div className="rounded-4xl bg-oliva text-concreto md:rounded-[2.5rem]">
          <div className="mx-auto grid max-w-6xl gap-10 px-8 py-8 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-12">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.3em] text-areia">
                Localização
              </p>
              <h2 className="mt-4 font-display text-3xl font-normal leading-tight tracking-tight lg:text-4xl">
                Venha conhecer o escritório.
              </h2>
              <address className="mt-6 text-base not-italic leading-relaxed text-concreto/90">
                {site.address}
              </address>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-concreto/80">
                Recebemos clientes com hora marcada, para conversar com calma e
                olhar projetos e materiais juntos.
              </p>
            </div>

            <div className="grid aspect-4/3 place-items-center rounded-2xl border border-concreto/25 bg-concreto/10">
              <LogoMark className="h-16 w-auto text-concreto/40" />
              {/*
                Para um mapa de verdade, troque o bloco acima por:
                <iframe
                  title="Mapa da localização do escritório"
                  src="https://www.google.com/maps?q=Rio+de+Janeiro&output=embed"
                  loading="lazy"
                  className="h-full w-full rounded-2xl border-0"
                />
              */}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}