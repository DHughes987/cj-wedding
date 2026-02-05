// Tiny parallax scroll helper.
// Finds elements with [data-parallax] and applies a translateY based on element position and data-speed.
try { console.log && console.log('[parallax] module loaded') } catch(e){}
export function initParallax(root: Element | Document = document) {
  if (typeof window === 'undefined') return

  const doc = root as Document
  const els = () => Array.from(doc.querySelectorAll('[data-parallax]')) as HTMLElement[]
  if (!('requestAnimationFrame' in window)) return

  let running = false
  let pointerX = 0
  let pointerY = 0
  let mouseEnabled = window.innerWidth > 800 && window.matchMedia && window.matchMedia('(pointer: fine)').matches

  function frame() {
    running = false
    const viewportHeight = window.innerHeight
    els().forEach(el => {
      const speed = parseFloat(el.dataset.speed || '0.15')
      const rect = el.getBoundingClientRect()
      // early exit if offscreen (minor perf improvement)
      if (rect.bottom < -100 || rect.top > viewportHeight + 100) return

      // normalized position of center relative to viewport center (-1 .. 1)
      const center = (rect.top + rect.height / 2) - viewportHeight / 2
      const norm = center / (viewportHeight / 2)
      // increase the multiplier for a more visible parallax effect
      const translateY = norm * 300 * speed // tweakable multiplier (stronger for visible effect)

      // mouse-based parallax (additional offset)
      let mouseOffsetX = 0
      let mouseOffsetY = 0
      if (mouseEnabled) {
        const mouseSpeed = parseFloat(el.dataset.mouseSpeed || '0.02')
        mouseOffsetX = pointerX * 80 * mouseSpeed
        mouseOffsetY = pointerY * 40 * mouseSpeed
      }

      el.style.transform = `translate3d(${mouseOffsetX}px, ${translateY + mouseOffsetY}px, 0)`
    })
    // one-time debug to indicate frame ran
    if (typeof (frame as any).__ran === 'undefined') {
      try { console.log && console.log('[parallax] frame run') } catch(e){}
      ;(frame as any).__ran = true
    }
  }

  try { console.log && console.log('[parallax] init, elements=', els().length) } catch(e){}

  function onScroll() {
    if (running) return
    running = true
    requestAnimationFrame(frame)
  }

  // initial frame
  requestAnimationFrame(frame)
  // pointer-based parallax for desktop
  function onPointer(e: PointerEvent) {
    pointerX = (e.clientX / window.innerWidth - 0.5) * 2 // -1 .. 1
    pointerY = (e.clientY / window.innerHeight - 0.5) * 2 // -1 .. 1
  }
  if (mouseEnabled) window.addEventListener('pointermove', onPointer)
  // re-evaluate on resize
  window.addEventListener('resize', () => {
    mouseEnabled = window.innerWidth > 800 && window.matchMedia && window.matchMedia('(pointer: fine)').matches
  })
  // watch for elements added after init and trigger a frame when they appear
  if ('MutationObserver' in window) {
    const mo = new MutationObserver((mutations) => {
      let found = false
      for (const m of mutations) {
        m.addedNodes.forEach(node => {
          if (!(node instanceof Element)) return
          if (node.hasAttribute && node.hasAttribute('data-parallax')) found = true
          if (node.querySelectorAll) {
            if (node.querySelectorAll('[data-parallax]').length) found = true
          }
        })
      }
      if (found) {
        try { console.log && console.log('[parallax] new elements detected, running frame, total=', els().length) } catch(e){}
        requestAnimationFrame(frame)
      }
    })
    mo.observe(doc, { childList: true, subtree: true })
  }
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
}

export default initParallax
