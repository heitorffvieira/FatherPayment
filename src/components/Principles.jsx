import { Check, Bolt, Star, Eye, Bulb, Lock } from './Icons'

const VALUES = [
  { Icon: Check, label: 'Confiança' },
  { Icon: Bolt, label: 'Eficiência', d: '.06s' },
  { Icon: Star, label: 'Excelência', d: '.12s' },
  { Icon: Eye, label: 'Transparência', d: '.18s' },
  { Icon: Bulb, label: 'Inovação', d: '.24s' },
  { Icon: Lock, label: 'Segurança', d: '.3s' },
]

export default function Principles() {
  return (
    <section style={{ padding: '20px 0 100px' }}>
      <div className="wrap c">
        <span className="chip rv">Nossos princípios</span>
        <h2 className="rv">Confiança, eficiência e excelência, <span className="ac">sem exageros</span></h2>
        <div className="vals">
          {VALUES.map(({ Icon, label, d }) => (
            <div className="v rv" key={label} style={d ? { '--d': d } : undefined}>
              <i><Icon /></i>{label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
