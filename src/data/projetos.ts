export type Foto = {
  src: string
  alt: string
}

export type Projeto = {
  slug: string
  titulo: string
  tipo: 'Residencial' | 'Comercial'
  local: string
  ano: number
  area: number
  resumo: string
  descricao: string[]
  capa: Foto
  galeria: Foto[]
  destaque: boolean
}

// As imagens ficam em public/projetos/<slug>/ (capa.webp, 1.webp, 2.webp, 3.webp)
const foto = (slug: string, nome: string, alt: string): Foto => ({
  src: `/projetos/${slug}/${nome}.webp`,
  alt,
})

export const projetos: Projeto[] = [
  {
    slug: 'casa-patio',
    titulo: 'Casa Pátio',
    tipo: 'Residencial',
    local: 'Rio de Janeiro, RJ',
    ano: 2025,
    area: 180,
    resumo: 'Casa em dois níveis que se abre para o jardim.',
    descricao: [
      'A Casa Pátio organiza os ambientes em dois níveis ao redor de um jardim, que fica à vista de quase todos os cômodos.',
      'A pedra, a madeira e os grandes vãos de vidro conversam com a vegetação do entorno e deixam a luz natural entrar durante o dia todo.',
    ],
    capa: foto('casa-patio', 'capa', 'Fachada da Casa Pátio ao entardecer, com varandas e pedra aparente'),
    galeria: [
      foto('casa-patio', '1', 'Varanda do segundo pavimento da Casa Pátio'),
      foto('casa-patio', '2', 'Sala de estar integrada ao jardim'),
      foto('casa-patio', '3', 'Escada de pedra que liga o jardim à casa'),
    ],
    destaque: true,
  },
  {
    slug: 'casa-mirante',
    titulo: 'Casa Mirante',
    tipo: 'Residencial',
    local: 'Petrópolis, RJ',
    ano: 2024,
    area: 240,
    resumo: 'Casa de montanha voltada para a vista do vale.',
    descricao: [
      'Implantada em um terreno em declive, a Casa Mirante aproveita o desnível para criar áreas sociais com vista aberta para o vale.',
      'A estrutura aparente e os beirais profundos protegem do sol e da chuva sem perder a relação com a paisagem.',
    ],
    capa: foto('casa-mirante', 'capa', 'Casa Mirante vista de frente, com a montanha ao fundo'),
    galeria: [
      foto('casa-mirante', '1', 'Varanda da Casa Mirante com vista para o vale'),
      foto('casa-mirante', '2', 'Sala com pé-direito duplo'),
      foto('casa-mirante', '3', 'Detalhe da estrutura aparente'),
    ],
    destaque: true,
  },
  {
    slug: 'residencia-jardim',
    titulo: 'Residência Jardim',
    tipo: 'Residencial',
    local: 'Niterói, RJ',
    ano: 2023,
    area: 150,
    resumo: 'Casa térrea com ambientes ligados por um jardim central.',
    descricao: [
      'A Residência Jardim é toda térrea e gira em torno de um jardim central, que ventila e ilumina os quartos e a sala.',
      'Os materiais são simples e duráveis, como concreto aparente, madeira clara e piso de cimento queimado.',
    ],
    capa: foto('residencia-jardim', 'capa', 'Fachada térrea da Residência Jardim com muro de concreto'),
    galeria: [
      foto('residencia-jardim', '1', 'Jardim central da Residência Jardim'),
      foto('residencia-jardim', '2', 'Cozinha integrada à sala'),
      foto('residencia-jardim', '3', 'Quarto com porta de correr para o jardim'),
    ],
    destaque: false,
  },
  {
    slug: 'loft-atelier',
    titulo: 'Loft Atelier',
    tipo: 'Residencial',
    local: 'Rio de Janeiro, RJ',
    ano: 2022,
    area: 85,
    resumo: 'Loft de pé-direito alto, pensado para morar e trabalhar.',
    descricao: [
      'O Loft Atelier ocupa um antigo galpão e mantém o pé-direito alto, com um mezanino que abriga o dormitório.',
      'Uma bancada de trabalho junto à janela divide o espaço sem criar paredes e mantém o ambiente aberto.',
    ],
    capa: foto('loft-atelier', 'capa', 'Interior do Loft Atelier com mezanino e janela grande'),
    galeria: [
      foto('loft-atelier', '1', 'Mezanino do Loft Atelier visto de baixo'),
      foto('loft-atelier', '2', 'Bancada de trabalho junto à janela'),
      foto('loft-atelier', '3', 'Cozinha aberta para o living'),
    ],
    destaque: false,
  },
  {
    slug: 'escritorio-vao-livre',
    titulo: 'Escritório Vão Livre',
    tipo: 'Comercial',
    local: 'Rio de Janeiro, RJ',
    ano: 2025,
    area: 320,
    resumo: 'Escritório corporativo de planta aberta e muita luz natural.',
    descricao: [
      'O Escritório Vão Livre foi desenhado como um grande salão sem divisões fixas, que se reorganiza conforme a equipe cresce.',
      'Salas de reunião envidraçadas e áreas de pausa ficam nas bordas, e o centro continua livre para o trabalho em grupo.',
    ],
    capa: foto('escritorio-vao-livre', 'capa', 'Planta aberta do Escritório Vão Livre com mesas coletivas'),
    galeria: [
      foto('escritorio-vao-livre', '1', 'Sala de reunião envidraçada'),
      foto('escritorio-vao-livre', '2', 'Área de pausa com banco corrido'),
      foto('escritorio-vao-livre', '3', 'Recepção do escritório'),
    ],
    destaque: true,
  },
  {
    slug: 'cafe-concreto',
    titulo: 'Café Concreto',
    tipo: 'Comercial',
    local: 'Niterói, RJ',
    ano: 2024,
    area: 95,
    resumo: 'Cafeteria acolhedora com balcão em concreto e madeira.',
    descricao: [
      'O Café Concreto combina concreto aparente e madeira escura para criar um ambiente aconchegante, apesar de simples.',
      'O balcão central é o ponto de encontro do espaço, e as mesas ficam junto às janelas para aproveitar a rua.',
    ],
    capa: foto('cafe-concreto', 'capa', 'Interior do Café Concreto com balcão central'),
    galeria: [
      foto('cafe-concreto', '1', 'Balcão de concreto e madeira do Café Concreto'),
      foto('cafe-concreto', '2', 'Mesas junto à janela'),
      foto('cafe-concreto', '3', 'Detalhe da iluminação pendente'),
    ],
    destaque: true,
  },
  {
    slug: 'clinica-luz',
    titulo: 'Clínica Luz',
    tipo: 'Comercial',
    local: 'Rio de Janeiro, RJ',
    ano: 2023,
    area: 210,
    resumo: 'Clínica com ambientes calmos e iluminação natural.',
    descricao: [
      'A Clínica Luz foi pensada para acalmar quem chega, com cores suaves, ambientes bem ventilados e luz natural em quase todas as salas.',
      'O percurso entre a recepção e os consultórios é curto e claro, e ajuda a pessoa a se orientar sem esforço.',
    ],
    capa: foto('clinica-luz', 'capa', 'Recepção da Clínica Luz com iluminação natural'),
    galeria: [
      foto('clinica-luz', '1', 'Corredor de consultórios da Clínica Luz'),
      foto('clinica-luz', '2', 'Sala de espera com poltronas'),
      foto('clinica-luz', '3', 'Consultório com janela ampla'),
    ],
    destaque: false,
  },
  {
    slug: 'casa-da-serra',
    titulo: 'Casa da Serra',
    tipo: 'Residencial',
    local: 'Teresópolis, RJ',
    ano: 2022,
    area: 200,
    resumo: 'Casa de fim de semana em meio à mata.',
    descricao: [
      'A Casa da Serra é um refúgio de fim de semana, com estrutura de madeira e grandes varandas cobertas.',
      'A casa fica elevada do chão para preservar a vegetação existente e reduzir o impacto no terreno.',
    ],
    capa: foto('casa-da-serra', 'capa', 'Casa da Serra elevada em meio à vegetação'),
    galeria: [
      foto('casa-da-serra', '1', 'Varanda coberta da Casa da Serra'),
      foto('casa-da-serra', '2', 'Sala com lareira'),
      foto('casa-da-serra', '3', 'Estrutura de madeira aparente'),
    ],
    destaque: false,
  },
  {
    slug: 'pousada-pedra-azul',
    titulo: 'Pousada Pedra Azul',
    tipo: 'Comercial',
    local: 'Paraty, RJ',
    ano: 2021,
    area: 450,
    resumo: 'Pousada de chalés espalhados entre jardins e pedras.',
    descricao: [
      'A Pousada Pedra Azul reúne oito chalés espalhados pelo terreno, ligados por caminhos de pedra entre jardins e árvores antigas.',
      'Cada chalé tem uma varanda própria e fica de costas para os vizinhos, o que garante privacidade sem fechar a vista.',
    ],
    capa: foto('pousada-pedra-azul', 'capa', 'Chalés da Pousada Pedra Azul entre jardins e pedras'),
    galeria: [
      foto('pousada-pedra-azul', '1', 'Caminho de pedra entre os chalés'),
      foto('pousada-pedra-azul', '2', 'Varanda de um dos chalés'),
      foto('pousada-pedra-azul', '3', 'Área comum da pousada'),
    ],
    destaque: false,
  },
    {
    slug: 'casa-da-praia',
    titulo: 'Casa da Praia',
    tipo: 'Residencial',
    local: 'Búzios, RJ',
    ano: 2025,
    area: 170,
    resumo: 'Casa de praia aberta para o mar e para a brisa.',
    descricao: [
      'A Casa da Praia tem os ambientes sociais voltados para o mar, com grandes portas de correr que deixam a sala e a varanda funcionarem como um só espaço.',
      'Os materiais resistem bem à maresia, como madeira tratada, concreto claro e esquadrias de alumínio, e a casa foi pensada para ventilar sem precisar de ar-condicionado.',
    ],
    capa: foto('casa-da-praia', 'capa', 'Casa da Praia com varanda aberta para o mar'),
    galeria: [
      foto('casa-da-praia', '1', 'Varanda da Casa da Praia com vista para o mar'),
      foto('casa-da-praia', '2', 'Sala integrada à varanda por portas de correr'),
      foto('casa-da-praia', '3', 'Deck de madeira com chuveiro externo'),
    ],
    destaque: false,
  },
  {
    slug: 'restaurante-brasa',
    titulo: 'Restaurante Brasa',
    tipo: 'Comercial',
    local: 'Rio de Janeiro, RJ',
    ano: 2023,
    area: 140,
    resumo: 'Restaurante com cozinha aberta e ambiente acolhedor.',
    descricao: [
      'No Restaurante Brasa, a cozinha aberta é o centro do salão: quem chega vê o fogo, o balcão e o movimento dos cozinheiros.',
      'A iluminação é baixa e quente, com tijolo aparente e madeira escura, e as mesas ficam organizadas para receber tanto casais quanto grupos grandes.',
    ],
    capa: foto('restaurante-brasa', 'capa', 'Salão do Restaurante Brasa com cozinha aberta ao fundo'),
    galeria: [
      foto('restaurante-brasa', '1', 'Balcão da cozinha aberta do Restaurante Brasa'),
      foto('restaurante-brasa', '2', 'Mesas coletivas sob iluminação pendente'),
      foto('restaurante-brasa', '3', 'Parede de tijolo aparente com nicho de vinhos'),
    ],
    destaque: false,
  },
  {
    slug: 'showroom-trama',
    titulo: 'Showroom Trama',
    tipo: 'Comercial',
    local: 'Niterói, RJ',
    ano: 2024,
    area: 260,
    resumo: 'Showroom de móveis com ambientes montados como casas.',
    descricao: [
      'O Showroom Trama apresenta os móveis em ambientes montados como cômodos de verdade, para que o cliente imagine as peças na própria casa.',
      'Paredes baixas e vãos largos guiam o percurso sem fechar o espaço, e a luz natural vem de uma claraboia longa no centro do galpão.',
    ],
    capa: foto('showroom-trama', 'capa', 'Interior do Showroom Trama com ambientes de móveis montados'),
    galeria: [
      foto('showroom-trama', '1', 'Ambiente de sala montado no Showroom Trama'),
      foto('showroom-trama', '2', 'Claraboia central iluminando o galpão'),
      foto('showroom-trama', '3', 'Corredor entre os ambientes de quarto'),
    ],
    destaque: false,
  },
]

export const projetosDestaque = projetos.filter((p) => p.destaque)

export const projetoHero = projetos.find((p) => p.slug === 'casa-patio')!

export function getProjeto(slug: string) {
  return projetos.find((p) => p.slug === slug)
}