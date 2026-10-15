import { EMAIL, WHATSAPP_URL, WHATSAPP_LABEL, LOGO } from '../constants'

const TERMS = [
  'Política de privacidade',
  'Política de segurança',
  'Política de PDL e FT',
  'Política de Due Diligence',
  'Código de Ética e Conduta',
  'Política de Fornecedores',
  'Política de Privacidade e Tratamento de Dados',
  'Política de Anticorrupção, Antissuborno e de Relacionamento com Autoridades Públicas',
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
            <img src={LOGO} alt="Father Payment®" />
            <p><b style={{ color: '#fff' }}>Father Payment®</b></p>
            <p>CNPJ: 50.911.706/0001-83</p>
          </div>
          <div>
            <h4>Contato</h4>
            <p><a href={'mailto:' + EMAIL}>{EMAIL}</a></p>
            <p><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp: {WHATSAPP_LABEL}</a></p>
            <p>Seg. a sex., das 9h às 18h</p>
          </div>
          <div>
            <h4>Termos</h4>
            <ul>{TERMS.map(t => <li key={t}>{t}</li>)}</ul>
          </div>
        </div>
        <div className="bot">
          Father Payment® · Todos os direitos reservados.<br />
          Father Payment é um produto da Success Connect.
          <div className="credit">
            Desenvolvido por{' '}
            <a href="https://www.instagram.com/crystallcode/" target="_blank" rel="noopener noreferrer">Crystal Code</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
