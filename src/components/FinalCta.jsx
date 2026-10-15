import { EMAIL, WHATSAPP_URL } from '../constants'

export default function FinalCta() {
  return (
    <section className="lt c" style={{ padding: '90px 0 120px' }}>
      <div className="wrap">
        <h2 className="rv" style={{ maxWidth: 760, margin: '0 auto 14px', color: 'var(--tx)' }}>
          O sucesso das suas transações digitais começa com uma <span className="ac">boa conversa.</span>
        </h2>
        <p className="sub rv" style={{ marginBottom: 30 }}>Fale com a Father Payment e conheça nossas soluções.</p>
        <div className="cta rv">
          <a className="btn n" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Falar pelo WhatsApp</a>
          <a className="btn w" href={'mailto:' + EMAIL}>Enviar e-mail</a>
        </div>
      </div>
    </section>
  )
}
