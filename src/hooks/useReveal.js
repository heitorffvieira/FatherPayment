import { useEffect } from 'react'

// Aplica a animação de entrada (.rv -> .rv.in) em todos os elementos marcados.
export default function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(x => {
        if (x.isIntersecting) {
          x.target.classList.add('in')
          io.unobserve(x.target)
        }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.rv').forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}
