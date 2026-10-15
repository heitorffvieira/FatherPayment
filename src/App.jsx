import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Solutions from './components/Solutions'
import Differentials from './components/Differentials'
import Principles from './components/Principles'
import Contact from './components/Contact'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import useReveal from './hooks/useReveal'
import useScrollSpy from './hooks/useScrollSpy'

const SECTION_IDS = ['inicio', 'sobre', 'solucoes', 'diferenciais', 'contato', 'faq']

export default function App() {
  useReveal()
  const { progress, scrolled, current } = useScrollSpy(SECTION_IDS)

  return (
    <>
      <div id="prog" style={{ width: progress + '%' }}></div>
      <Header scrolled={scrolled} current={current} />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Differentials />
        <Principles />
        <Contact />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
