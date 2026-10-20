import Hero from '../components/Hero'
import Sobre from '../components/Sobre'
import Projetos from '../components/Projetos'
import ComoTrabalhamos from '../components/ComoTrabalhamos'
import Depoimentos from '../components/Depoimentos'
import ChamadaFinal from '../components/ChamadaFinal'

export default function Home() {
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