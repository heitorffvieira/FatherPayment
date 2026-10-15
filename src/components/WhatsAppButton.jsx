import { WHATSAPP_URL } from '../constants'
import { WhatsAppFill } from './Icons'

export default function WhatsAppButton() {
  return (
    <a className="wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar no WhatsApp">
      <WhatsAppFill />
    </a>
  )
}
