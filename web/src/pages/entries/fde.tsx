import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import FdePage from '@/pages/fde'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FdePage />
  </StrictMode>,
)
