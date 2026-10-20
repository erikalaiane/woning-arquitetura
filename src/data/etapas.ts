export type Etapa = {
  titulo: string
  resumo: string
  detalhe: string
  entrega: string
}

export const etapas: Etapa[] = [
  {
    titulo: 'Conversa inicial',
    resumo:
      'Ouvimos como você vive ou trabalha, o que precisa e quanto quer investir. Se for preciso, visitamos o terreno ou o espaço.',
    detalhe:
      'É a etapa mais importante. Queremos entender a rotina de quem vai usar o espaço, o estilo que você gosta e o orçamento que faz sentido, e visitamos o local para ver luz, vizinhança e limitações.',
    entrega: 'Uma proposta com escopo, etapas, prazos e valores.',
  },
  {
    titulo: 'Projeto',
    resumo:
      'Desenvolvemos plantas, cortes e imagens junto com você, ajustando o desenho até ele fazer sentido.',
    detalhe:
      'Começamos pelo estudo preliminar, com a ideia geral e a distribuição dos ambientes. Depois de aprovado, detalhamos materiais, instalações e acabamentos, sempre conversando com você a cada passo.',
    entrega: 'Estudo preliminar, imagens e projeto executivo completo.',
  },
  {
    titulo: 'Aprovações',
    resumo:
      'Cuidamos da documentação e das aprovações na prefeitura e nos demais órgãos, sem você precisar correr atrás.',
    detalhe:
      'Preparamos os documentos, acompanhamos os processos e respondemos às exigências dos órgãos responsáveis, para que a obra comece com tudo em dia.',
    entrega: 'Projeto aprovado e licenças para iniciar a obra.',
  },
  {
    titulo: 'Obra',
    resumo:
      'Acompanhamos a execução de perto, visitando a obra e conversando com a equipe até a entrega.',
    detalhe:
      'Visitamos a obra com frequência, tiramos dúvidas da equipe, conferimos se o projeto está sendo seguido e resolvemos imprevistos junto com você, antes que virem problemas.',
    entrega: 'Relatórios de visita e a entrega final com tudo conferido.',
  },
]