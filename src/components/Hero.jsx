import { useRef } from 'react'
import { Arrow } from './Icons'

export default function Hero() {
  const glow = useRef(null)

  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect()
    if (glow.current) {
      glow.current.style.left = e.clientX - r.left + 'px'
      glow.current.style.top = e.clientY - r.top + 'px'
    }
  }

  return (
    <section className="hero" id="inicio" onPointerMove={onMove}>
      <div className="glow" ref={glow}></div>
      <div className="wrap">
        <span className="chip rv">Father Payment® · Gestor de pagamento</span>
        <h1 className="rv" style={{ '--d': '.1s' }}>
          Recebimentos e pagamentos digitais <span className="ac">com transparência e segurança</span>
        </h1>
        <p className="lead rv" style={{ '--d': '.2s' }}>
          Somos uma empresa especializada em facilitar transações financeiras, com foco particular em processamento de recebimentos e pagamentos através de plataformas digitais de serviços.
        </p>
        <div className="cta rv" style={{ '--d': '.3s' }}>
          <a className="btn p" href="#contato">Entre em contato <Arrow /></a>
          <a className="btn g" href="#solucoes">Conhecer nossas soluções</a>
        </div>
        <div className="tags rv" style={{ '--d': '.45s' }}>
          <span>Recebimentos</span><span>Pagamentos</span><span>Intermediação financeira</span><span>Plataformas digitais</span><span>Integração</span>
        </div>
      </div>
    </section>
  )
}
