import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <div className="min-h-screen bg-concreto">
      <ScrollToTop />
      <div className="mx-auto flex min-h-screen max-w-[88rem] flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}