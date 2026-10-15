import { useState } from 'react'
import { LOGO } from '../constants'

const LINKS = [
  ['inicio', 'Início'],
  ['sobre', 'Sobre nós'],
  ['solucoes', 'Soluções'],
  ['diferenciais', 'Diferenciais'],
  ['contato', 'Contato'],
  ['faq', 'FAQ'],
]

export default function Header({ scrolled, current }) {
  const [open, setOpen] = useState(false)

  return (
    <header className={scrolled ? 's' : ''}>
      <div className="nav">
        <a href="#inicio" aria-label="Father Payment – início">
          <img src={LOGO} alt="Father Payment®" />
        </a>
        <nav className={'links' + (open ? ' o' : '')} aria-label="Principal">
          {LINKS.map(([id, label]) => (
            <a key={id} href={'#' + id} className={current === id ? 'on' : ''} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="btn p" href="#contato">Falar com a Father Payment</a>
        <button
          className={'burger' + (open ? ' o' : '')}
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
