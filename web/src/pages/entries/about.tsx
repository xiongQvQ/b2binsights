import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import AboutPage from '@/pages/about'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AboutPage />
  </StrictMode>,
)
