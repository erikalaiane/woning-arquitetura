import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import Process from './pages/Process'
import Office from './pages/Office'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projetos" element={<Projects />} />
      <Route path="/projetos/:slug" element={<ProjectDetail />} />
      <Route path="/processo" element={<Process />} />
      <Route path="/escritorio" element={<Office />} />
      <Route path="/contato" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}