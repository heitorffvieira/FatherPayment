import { useState } from 'react'
import { EMAIL, WHATSAPP_URL, WHATSAPP_LABEL } from '../constants'
import { Mail, Chat, Clock } from './Icons'

export default function Contact() {
  const [note, setNote] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = `Nome/Razão social: ${f.get('n')}\nE-mail: ${f.get('e')}\nTelefone: ${f.get('t') || '-'}\nCNPJ: ${f.get('c') || '-'}\n\n${f.get('m')}`
    setNote('Abrindo seu aplicativo de e-mail para finalizar o envio…')
    window.location.href =
      `mailto:${EMAIL}?subject=` + encodeURIComponent('Contato pelo site – ' + f.get('n')) +
      '&body=' + encodeURIComponent(body)
  }

  return (
    <section id="contato" className="lt">
      <div className="wrap c">
        <span className="chip rv">Contato</span>
        <h2 className="rv">Contrate nossos <span className="ac">serviços</span></h2>
        <p className="sub rv">Preencha o formulário que entraremos em contato o mais breve possível, ou fale direto conosco.</p>
        <div className="contact">
          <div className="rv">
            <a className="lc ct" href={'mailto:' + EMAIL}>
              <span className="ic"><Mail /></span>
              <span><small>E-mail</small><b>{EMAIL}</b></span>
            </a>
            <a className="lc ct" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <span className="ic"><Chat /></span>
              <span><small>WhatsApp</small><b>{WHATSAPP_LABEL}</b></span>
            </a>
            <div className="lc ct">
              <span className="ic"><Clock /></span>
              <span><small>Horário de atendimento</small><b>9h às 18h, de segunda a sexta-feira</b></span>
            </div>
          </div>
          <form className="lc rv" style={{ '--d': '.15s' }} onSubmit={onSubmit}>
            <div className="fr">
              <label>Nome ou razão social<input name="n" required autoComplete="name" /></label>
              <label>E-mail<input name="e" type="email" required autoComplete="email" /></label>
            </div>
            <div className="fr">
              <label>Telefone<input name="t" type="tel" autoComplete="tel" /></label>
              <label>CNPJ (opcional)<input name="c" /></label>
            </div>
            <label>Mensagem<textarea name="m" required></textarea></label>
            <button className="btn n" type="submit" style={{ justifyContent: 'center' }}>Enviar mensagem</button>
            <p className="note" role="status">{note}</p>
          </form>
        </div>
      </div>
    </section>
  )
}
