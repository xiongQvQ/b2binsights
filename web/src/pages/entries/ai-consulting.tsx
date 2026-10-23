import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import AiConsultingPage from '@/pages/ai-consulting'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AiConsultingPage />
  </StrictMode>,
)
