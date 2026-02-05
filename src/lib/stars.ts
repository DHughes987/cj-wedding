// Small starfield generator
// Appends a .stars-layer container with a number of .star elements positioned randomly.
export function initStars(root: Element | Document = document, count = 120) {
  if (typeof window === 'undefined') return

  const doc = root as Document
  // ensure we don't duplicate
  if (doc.getElementById('stars-layer')) return

  const container = doc.createElement('div')
  container.id = 'stars-layer'
  container.className = 'stars-layer'
  // mark so parallax can special-case it
  container.setAttribute('data-stars', 'true')
  container.dataset.speed = '0.02'

  // note: current implementation places stars using percent positions; we keep width/height only for future variants

  for (let i = 0; i < count; i++) {
    const s = doc.createElement('span')
    s.className = 'star'

    // occasionally create a larger, brighter star
    const isLarge = Math.random() < 0.08
    const size = isLarge ? (2 + Math.random() * 6) : (Math.random() * 2.6 + 0.8) // large: 2-8px, normal: 0.8-3.4px
    const left = Math.random() * 100
    const top = Math.random() * 220 - 60 // allow some beyond top so they scroll in
    const opacity = isLarge ? (0.8 + Math.random() * 0.2) : (0.55 + Math.random() * 0.45)
    const glow = isLarge ? (12 + Math.random() * 36) : (6 + Math.random() * 18)
    s.style.width = `${size}px`
    s.style.height = `${size}px`
    s.style.left = `${left}%`
    s.style.top = `${top}%`
    s.style.opacity = `${opacity}`
    s.style.boxShadow = `0 0 ${glow}px rgba(156,216,255,0.22), 0 0 ${Math.min(glow * 0.8, 48)}px rgba(255,214,160,0.12)`
    if (isLarge) {
      s.classList.add('star-large')
    }
    // give some variety in speed for depth perception
    s.setAttribute('data-speed', (0.01 + Math.random() * 0.08).toFixed(3))
    container.appendChild(s)
  }

  // insert as the first child of body so background
  const body = doc.body || doc.documentElement
  body.insertBefore(container, body.firstChild)
}

export default initStars
