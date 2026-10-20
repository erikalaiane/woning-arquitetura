import { etapas } from '../data/etapas'
import ChamadaFinal from '../components/ChamadaFinal'

const perguntas = [
  {
    pergunta: 'Quanto tempo leva um projeto?',
    resposta:
      'Depende do tamanho e da complexidade. Como referência, um projeto residencial costuma levar de dois a quatro meses até o projeto executivo ficar pronto. A obra tem prazo próprio, definido no cronograma.',
  },
  {
    pergunta: 'Como é feito o orçamento?',
    resposta:
      'Depois da conversa inicial, enviamos uma proposta com escopo, etapas e valores. Só começamos o trabalho quando você aprova.',
  },
  {
    pergunta: 'Vocês acompanham a obra?',
    resposta:
      'Sim. O acompanhamento faz parte do processo, com visitas frequentes e conversa direta com a equipe que executa.',
  },
  {
    pergunta: 'Posso contratar só o projeto, sem a obra?',
    resposta:
      'Pode. Entregamos o projeto completo e você escolhe quem executa. Se quiser, indicamos equipes de confiança.',
  },
  {
    pergunta: 'Vocês atendem fora do Rio de Janeiro?',
    resposta:
      'Atendemos principalmente o estado do Rio de Janeiro. Para outras cidades, conversamos caso a caso.',
  },
]

export default function Process() {
  return (
    <>
      <section className="px-3 sm:px-4">
        <div className="mx-auto max-w-6xl px-8 pb-20 pt-12 lg:pb-28 lg:pt-16">
          <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-terracota-escura">
            Processo
          </p>
          <h1 className="mt-4 max-w-6xl font-display text-4xl font-normal leading-tight tracking-tight lg:text-5xl">
            Cada etapa explicada, do primeiro encontro à entrega.
          </h1>
          <p className="mt-6 max-w-5xl text-base leading-relaxed text-grafite/80">
            Um projeto fica mais tranquilo quando você sabe o que vem a seguir.
            Veja como trabalhamos e o que você recebe em cada fase.
          </p>

          <ol className="mt-16">
            {etapas.map((etapa, i) => (
              <li
                key={etapa.titulo}
                className="grid gap-4 border-t-2 border-oliva/20 py-8 lg:grid-cols-[6rem_1fr_1fr] lg:gap-10"
              >
                <span
                  aria-hidden="true"
                  className="font-display text-4xl text-terracota-escura"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 className="font-display text-2xl font-normal">
                    {etapa.titulo}
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-grafite/80">
                    {etapa.detalhe}
                  </p>
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.25em] text-oliva">
                    Você recebe
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-grafite/80">
                    {etapa.entrega}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-3 pb-3 sm:px-4 sm:pb-4">
        <div className="rounded-4xl bg-areia md:rounded-[2.5rem]">
          <div className="mx-auto max-w-3xl px-8 py-16 lg:py-24">
            <h2 className="font-display text-3xl font-normal leading-tight tracking-tight lg:text-4xl">
              Perguntas frequentes
            </h2>

            <div className="mt-10">
              {perguntas.map((item) => (
                <details
                  key={item.pergunta}
                  className="group border-t-2 border-oliva/20 py-5 last:border-b-2"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg [&::-webkit-details-marker]:hidden">
                    {item.pergunta}
                    <span aria-hidden="true" className="text-2xl leading-none">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:inline">−</span>
                    </span>
                  </summary>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-grafite/80">
                    {item.resposta}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ChamadaFinal />
    </>
  )
}