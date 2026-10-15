import { Card, Send, Swap, Link, Phone, Headset } from './Icons'

const ITEMS = [
  { Icon: Card, title: 'Processamento de recebimentos', text: 'Receba pelos seus produtos e serviços digitais por meio de uma plataforma especializada.' },
  { Icon: Send, title: 'Processamento de pagamentos', text: 'Pagamentos por plataformas digitais de serviços, com experiência segura e eficiente.', d: '.08s' },
  { Icon: Swap, title: 'Intermediação financeira', text: 'Simplificamos e melhoramos a intermediação para produtos e serviços digitais.', d: '.16s' },
  { Icon: Link, title: 'Integração para comerciantes', text: 'Integração simplificada, para vender sem complicar a operação.' },
  { Icon: Phone, title: 'Conveniência para consumidores', text: 'Transações pensadas para facilitar o dia a dia de quem paga.', d: '.08s' },
  { Icon: Headset, title: 'Suporte ao cliente', text: 'Atendimento por e-mail e WhatsApp, das 9h às 18h, de segunda a sexta-feira.', d: '.16s' },
]

function SolutionCard({ n, Icon, title, text, d }) {
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--x', e.clientX - r.left + 'px')
    e.currentTarget.style.setProperty('--y', e.clientY - r.top + 'px')
  }
  return (
    <div className="card rv" style={d ? { '--d': d } : undefined} onPointerMove={onMove}>
      <div className="top">
        <span className="nm">{String(n).padStart(2, '0')}</span>
        <span className="ic"><Icon /></span>
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default function Solutions() {
  return (
    <section id="solucoes" style={{ paddingTop: 20 }}>
      <div className="wrap c">
        <span className="chip rv">O que fazemos</span>
        <h2 className="rv">Do recebimento ao pagamento, <span className="ac">tudo em um só lugar</span></h2>
        <p className="sub rv">Soluções para quem vende e para quem paga.</p>
        <div className="grid3">
          {ITEMS.map((it, i) => <SolutionCard key={it.title} n={i + 1} {...it} />)}
        </div>
      </div>
    </section>
  )
}
