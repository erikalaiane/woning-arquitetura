const depoimentos = [
  {
    texto:
      'Eles entenderam como a nossa família vive antes de desenhar a primeira linha. A casa ficou do jeito que a gente nem sabia explicar que queria.',
    nome: 'Marina Duarte',
    projeto: 'Casa Pátio',
  },
  {
    texto:
      'O escritório ficou mais claro e mais organizado, e a equipe notou a diferença logo na primeira semana. A obra terminou no prazo combinado.',
    nome: 'Rafael Quintanilha',
    projeto: 'Escritório Vão Livre',
  },
  {
    texto:
      'Do orçamento à entrega, tudo foi explicado com clareza. Já indicamos o Woning para três amigos.',
    nome: 'Helena Prado',
    projeto: 'Café Concreto',
  },
]

export default function Depoimentos() {
  return (
    <section className="px-3 pb-3 sm:px-4 sm:pb-4">
      <div className="rounded-4xl bg-areia md:rounded-[2.5rem]">
        <div className="mx-auto max-w-6xl px-8 py-8 lg:py-12">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-terracota-escura">
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
                <figcaption className="mt-8 border-t-2 border-oliva/20 pt-4">
                  <p className="font-display text-lg">{item.nome}</p>
                  <p className="text-sm text-grafite/70">{item.projeto}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}