import { useEffect, useState } from 'react'

// Retorna a % de rolagem, se a página rolou e qual seção está ativa.
export default function useScrollSpy(ids) {
  const [state, setState] = useState({ progress: 0, scrolled: false, current: ids[0] })

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const h = document.documentElement.scrollHeight - window.innerHeight
      let current = ids[0]
      ids.forEach(id => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) current = id
      })
      setState({ progress: h > 0 ? (y / h) * 100 : 0, scrolled: y > 30, current })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])

  return state
}
