import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { initRevealOnScroll } from "./lib/reveal"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
)

// initialize reveal animations once app mounts
if (typeof window !== 'undefined') {
  // small timeout to ensure SSR hydration is complete (if any)
  window.requestAnimationFrame(() => initRevealOnScroll(document))
}
