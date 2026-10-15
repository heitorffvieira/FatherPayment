const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
}

const make = children => props => <svg {...base} {...props}>{children}</svg>

export const Arrow = props => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const Card = make(<><rect x="2" y="5" width="20" height="14" rx="3" /><path d="M2 10h20M6 15h4" /></>)
export const Send = make(<path d="M4 12h16M14 6l6 6-6 6" />)
export const Swap = make(<path d="M7 7h13l-3-3M17 17H4l3 3" />)
export const Link = make(<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.700l1-1" />)
export const Phone = make(<><rect x="6" y="2" width="12" height="20" rx="3" /><path d="M11 18h2" /></>)
export const Headset = make(<path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h3v5H4zM17 14h3v5h-3z" />)
export const Eye = make(<><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></>)
export const Bolt = make(<path d="M13 2L4 14h7l-1 8 9-12h-7z" />)
export const Shield = make(<><path d="M12 2l8 3v6c0 5-3.500 9-8 11-4.500-2-8-6-8-11V5z" /><path d="M9 12l2 2 4-4" /></>)
export const Users = make(<><circle cx="9" cy="8" r="3.500" /><path d="M2 20c0-4 3-6 7-6s7 2 7 6M17 11a3 3 0 1 0-1-5.800M22 20c0-3-1.500-5-4-5.700" /></>)
export const Check = make(<><path d="M8 12l3 3 5-6" /><circle cx="12" cy="12" r="9" /></>)
export const Star = make(<path d="M12 3l2.700 5.500 6 .9-4.400 4.200 1 6-5.300-2.800L6.700 19.600l1-6L3.300 9.400l6-.9z" />)
export const Bulb = make(<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.500c.7.700 1 1.500 1 2.500h6c0-1 .3-1.800 1-2.500A6 6 0 0 0 12 3z" />)
export const Lock = make(<><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></>)
export const Mail = make(<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>)
export const Chat = make(<path d="M4 20l1.300-4A8 8 0 1 1 8 18.800z" />)
export const Clock = make(<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>)

export const WhatsAppFill = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="M12 2a10 10 0 0 0-8.600 15L2 22l5.200-1.400A10 10 0 1 0 12 2zm5.200 14.200c-.2.600-1.300 1.200-1.800 1.200-.5.100-1 .2-3.300-.7-2.800-1.100-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.2.1.4 0 .5l-.4.600-.3.300c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.5.100.6-.1l.9-1.100c.2-.3.4-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.200.1.800-.1 1.400z" />
  </svg>
)
