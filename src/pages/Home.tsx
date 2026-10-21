import Hero from '../components/Hero'
import Sobre from '../components/Sobre'
import Projetos from '../components/Projetos'
import ComoTrabalhamos from '../components/ComoTrabalhamos'
import Depoimentos from '../components/Depoimentos'
import ChamadaFinal from '../components/ChamadaFinal'
import usePageTitle from '../hooks/usePageTitle'

export default function Home() {
  usePageTitle(
    'Projetos residenciais e comerciais pensados a partir de como as pessoas vivem os espaços.',
  )
  return (
    <>
      <Hero />
      <Sobre />
      <Projetos />
      <ComoTrabalhamos />
      <Depoimentos />
      <ChamadaFinal />
    </>
  )
}