import { EMAIL, WHATSAPP_URL } from '../constants'

const FAQS = [
  {
    question: 'Não consigo fazer o saque',
    answer: (
      <>
        Fale com nosso suporte pelo{' '}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp (11) 9123-7717</a>
        {' ou por '}
        <a href={'mailto:' + EMAIL}>{EMAIL}</a>, de segunda a sexta-feira, das 9h às 18h.
      </>
    ),
  },
  {
    question: 'Acho que fui vítima de uma fraude ou golpe',
    answer: 'Não clique em links nem faça pagamentos. Não enviamos boletos por e-mail, mensagem ou SMS e não pedimos senhas ou códigos. Confirme tudo pelos nossos canais oficiais.',
  },
  {
    question: 'Comprei um produto, voucher, passagem, parcela e não recebi',
    answer: (
      <>
        Entre em contato com nosso suporte pelos canais oficiais (
        <a href={'mailto:' + EMAIL}>{EMAIL}</a>
        {' ou '}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp (11) 9123-7717</a>
        ) para que possamos ajudar.
      </>
    ),
  },
  {
    question: 'Fiz um pix para a pessoa errada',
    answer: (
      <>
        Procure nossos canais oficiais (
        <a href={'mailto:' + EMAIL}>{EMAIL}</a>
        {' ou '}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp (11) 9123-7717</a>
        ). Antes de qualquer Pix, confirme a legitimidade do recebedor.
      </>
    ),
  },
]

export default function Faq() {
  return (
    <section id="faq" className="lt" style={{ paddingTop: 20 }}>
      <div className="wrap c">
        <span className="chip rv">FAQ</span>
        <h2 className="rv">Principais <span className="ac">dúvidas</span></h2>
        <div className="faq">
          {FAQS.map(({ question, answer }) => (
            <details className="rv" key={question}>
              <summary>{question}</summary>
              <div>{answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
