// Simple reveal-on-scroll helper using IntersectionObserver.
// Watches elements with [data-reveal] and adds the "revealed" class
// when they enter the viewport. Optionally supports data-delay in ms.
try { console.log && console.log('[reveal] module loaded') } catch(e){}
export function initRevealOnScroll(root: Element | Document = document) {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

  const doc = root as Document

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const el = entry.target as HTMLElement
      if (entry.isIntersecting) {
        const delay = parseInt(el.dataset.delay || '0', 10)
        if (delay) {
          setTimeout(() => el.classList.add('revealed'), delay)
        } else {
          el.classList.add('revealed')
        }
        io.unobserve(el)
  // debug
  try { console.log && console.log('[reveal] revealed', el, 'delay=', delay) } catch(e){}
      }
    })
  }, { threshold: 0.12 })

  function observeEl(el: Element) {
    if (!(el instanceof HTMLElement)) return
    // don't observe if already revealed
    if (el.classList.contains('revealed')) return
    io.observe(el)
  }

  // observe existing elements
  const existing = Array.from(doc.querySelectorAll('[data-reveal]')) as HTMLElement[]
  if (existing.length) {
    existing.forEach(observeEl)
  }
  try { console.log && console.log('[reveal] init, existing count=', existing.length) } catch(e){}

  // watch for future elements being added (single MutationObserver)
  if ('MutationObserver' in window) {
    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach(node => {
          if (!(node instanceof Element)) return
          if (node.hasAttribute && node.hasAttribute('data-reveal')) {
            observeEl(node)
          }
          // also check descendants
          node.querySelectorAll && node.querySelectorAll('[data-reveal]').forEach(observeEl)
        })
      }
    })
    mo.observe(doc, { childList: true, subtree: true })
  }
}

export default initRevealOnScroll
