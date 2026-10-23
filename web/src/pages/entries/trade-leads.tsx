import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import TradeLeadsPage from '@/pages/trade-leads'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TradeLeadsPage />
  </StrictMode>,
)
