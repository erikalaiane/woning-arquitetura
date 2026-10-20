import { Link } from 'react-router'

const numeros = [
  { valor: '12', rotulo: 'anos de atuação' },
  { valor: '80+', rotulo: 'projetos entregues' },
  { valor: '15 mil m²', rotulo: 'de área construída' },
  { valor: '95%', rotulo: 'de clientes que nos indicam' },
]

export default function Sobre() {
  return (
    <section className="px-3 sm:px-4">
        <div className="mx-auto grid max-w-6xl gap-12 px-8 py-10 lg:grid-cols-2 lg:gap-16 lg:py-14">
            <div>
          <p className="font-display text-sm font-medium font-medium uppercase tracking-[0.3em] text-terracota-escura">
            Sobre o escritório
          </p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight tracking-tight lg:text-4xl">
            Arquitetura que parte de como as pessoas vivem.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-grafite/80">
            Somos um escritório de arquitetura dedicado a projetos residenciais
            e comerciais. Acompanhamos cada etapa, do primeiro desenho à
            entrega da obra, para que o espaço final seja confortável, bonito e
            feito sob medida para quem vai usá-lo.
          </p>
          <Link
            to="/escritorio"
            className="mt-8 inline-flex rounded-full border-2 border-grafite/70 px-7 py-3 font-medium hover:bg-grafite hover:text-concreto"
          >
            Conheça o escritório
          </Link>
        </div>

        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 self-center">
          {numeros.map((item) => (
            <div
              key={item.rotulo}
              className="flex flex-col-reverse border-t-2 border-oliva/20 pt-5"
            >
              <dt className="mt-1 text-sm text-grafite/70">{item.rotulo}</dt>
              <dd className="font-display text-4xl font-normal lg:text-5xl">
                {item.valor}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}