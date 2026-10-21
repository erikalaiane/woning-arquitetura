import { useState } from 'react'

function Avatar({ nome, src }: { nome: string; src: string }) {
  const [semFoto, setSemFoto] = useState(false)
  const iniciais = nome
    .split(' ')
    .map((parte) => parte[0])
    .slice(0, 2)
    .join('')

  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden rounded-full bg-oliva font-display text-sm font-medium text-concreto">
      {semFoto ? (
        <span aria-hidden="true">{iniciais}</span>
      ) : (
        <img
          src={src}
          alt=""
          loading="lazy"
          onError={() => setSemFoto(true)}
          className="h-full w-full object-cover"
        />
      )}
    </span>
  )
}

const depoimentos = [
  {
    texto:
      'Eles entenderam como a nossa família vive antes de desenhar a primeira linha. A casa ficou do jeito que a gente nem sabia explicar que queria.',
    nome: 'Marina Duarte',
    projeto: 'Casa Pátio',
    foto: '/clientes/marina-duarte.webp',
  },
  {
    texto:
      'O escritório ficou mais claro e mais organizado, e a equipe notou a diferença logo na primeira semana. A obra terminou no prazo combinado.',
    nome: 'Rafael Quintanilha',
    projeto: 'Escritório Vão Livre',
    foto: '/clientes/marina-duarte.webp',
  },
  {
    texto:
      'Do orçamento à entrega, tudo foi explicado com clareza. Já indicamos o Woning para três amigos.',
    nome: 'Helena Prado',
    projeto: 'Café Concreto',
    foto: '/clientes/marina-duarte.webp',
  },
]

export default function Depoimentos() {
  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="rounded-4xl bg-areia md:rounded-[2.5rem]">
        <div className="mx-auto max-w-6xl px-8 py-8 lg:py-12">
          <p className="font-display text-sm font-medium uppercase tracking-[0.3em] text-terracota-escura">
            Depoimentos
          </p>
        <h2 className="mt-4 max-w-2xl text-balance font-display text-3xl font-normal leading-tight tracking-tight lg:text-4xl">
            Quem já passou por aqui conta como foi.
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {depoimentos.map((item) => (
              <figure
                key={item.nome}
                className="flex flex-col justify-between rounded-2xl bg-concreto p-7"
              >
                <blockquote className="text-base leading-relaxed text-grafite/85">
                  “{item.texto}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t-2 border-oliva/20 pt-4">
                <Avatar nome={item.nome} src={item.foto} />
                <div>
                  <p className="font-display text-lg">{item.nome}</p>
                  <p className="text-sm text-grafite/70">{item.projeto}</p>
                </div>
              </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}