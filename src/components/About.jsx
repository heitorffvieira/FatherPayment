import { LOGO } from '../constants'

export default function About() {
  return (
    <section id="sobre">
      <div className="wrap split">
        <div className="logocard rv"><img src={LOGO} alt="Logo Father Payment®" /></div>
        <div className="txt">
          <span className="chip rv">Sobre nós</span>
          <h2 className="rv">Mais que processar pagamentos, somos uma <span className="ac">ponte confiável.</span></h2>
          <p className="rv">Representamos uma plataforma de processamento de pagamentos, simplificando e melhorando a intermediação financeira para produtos e serviços digitais. Comprometemo-nos a proporcionar uma experiência segura e eficiente, agindo como uma ponte confiável entre fornecedores e consumidores.</p>
          <p className="rv">Damos prioridade à transparência e à inovação, investindo em tecnologias de segurança de ponta.</p>
          <p className="rv">Nosso foco no cliente se reflete em todos os aspectos da operação, desde a integração simplificada para os comerciantes até a conveniência para os consumidores.</p>
        </div>
      </div>
    </section>
  )
}
