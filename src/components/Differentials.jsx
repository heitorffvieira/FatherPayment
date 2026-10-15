import { Eye, Bolt, Shield, Users } from './Icons'

const ROWS = [
  { Icon: Eye, title: 'Transparência', text: 'Prioridade em todas as transações.' },
  { Icon: Bolt, title: 'Inovação', text: 'Evolução constante na forma de processar pagamentos.' },
  { Icon: Shield, title: 'Segurança de ponta', text: 'Investimento em tecnologias de segurança.' },
  { Icon: Users, title: 'Foco no cliente', text: 'Do comerciante ao consumidor, em toda a operação.' },
]

export default function Differentials() {
  return (
    <section id="diferenciais" style={{ background: 'linear-gradient(180deg,var(--bg),var(--bg2) 50%,var(--bg))' }}>
      <div className="wrap split differences">
        <div id="header-diferenciais">
          <span className="chip rv">Nossos diferenciais</span>
          <h2 className="rv">Por trás de cada pagamento existe uma <span className="ac">operação bem construída.</span></h2>
          <p className="sub rv">Escolha uma plataforma para uma parceria baseada em confiança, eficiência e excelência, impulsionando o sucesso em suas transações digitais.</p>
        </div>
        <div className="rows rv" style={{ '--d': '.15s' }}>
          {ROWS.map(({ Icon, title, text }) => (
            <div className="row" key={title}>
              <span className="ic"><Icon /></span>
              <div><b>{title}</b><span>{text}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
