import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { initRevealOnScroll } from "./lib/reveal"
import { initParallax } from "./lib/scroll"

// debug: ensure main module runs
try { console.log && console.log('[main] entry') } catch (e) {}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// initialize reveal animations once app mounts
if (typeof window !== 'undefined') {
  // small timeout to ensure SSR hydration is complete (if any)
  window.requestAnimationFrame(() => {
    try { console.log && console.log('[main] rAF init') } catch (e) {}
    initRevealOnScroll(document)
    initParallax(document)
  })
}

// optional visual debug overlay when ?debug=1 is in the URL
try {
  if (typeof window !== 'undefined' && window.location && window.location.search.indexOf('debug=1') !== -1) {
    const panel = document.createElement('div')
    panel.id = 'dev-debug-panel'
    panel.style.position = 'fixed'
    panel.style.right = '12px'
    panel.style.bottom = '12px'
    panel.style.zIndex = '99999'
    panel.style.background = 'rgba(16,20,32,0.88)'
    panel.style.color = 'white'
    panel.style.fontSize = '12px'
    panel.style.padding = '8px 10px'
    panel.style.borderRadius = '8px'
    panel.style.maxWidth = '320px'
    panel.style.fontFamily = 'monospace'
    panel.style.pointerEvents = 'none'
    document.body.appendChild(panel)

    function updatePanel() {
      const pEls = Array.from(document.querySelectorAll('[data-parallax]')) as HTMLElement[]
      const rEls = Array.from(document.querySelectorAll('[data-reveal]')) as HTMLElement[]
      const revealed = rEls.filter(e => e.classList.contains('revealed')).length
      const firstP = pEls[0]
      let firstPTransform = '—'
      if (firstP) {
        const style = window.getComputedStyle(firstP)
        firstPTransform = style.transform || firstP.style.transform || 'none'
        // add a visible outline so it's obvious
        firstP.style.outline = '2px dashed rgba(255,255,255,0.12)'
      }
      panel.innerText = `parallax: ${pEls.length} | reveal: ${rEls.length} (${revealed} revealed)\nfirst parallax transform: ${firstPTransform}`
      requestAnimationFrame(updatePanel)
    }
    requestAnimationFrame(updatePanel)
  }
} catch (e) { /* ignore */ }
