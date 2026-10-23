/**
 * 构建后预渲染:把每个页面的 React 组件渲染成静态 HTML,注入 dist 里对应的 HTML 文件。
 * 客户端 JS 仍会正常挂载(挂载后的 DOM 与预渲染结果一致,视觉无变化),
 * 但不执行 JS 的爬虫(AI 引擎、部分搜索)也能直接读到全文。
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { renderToStaticMarkup } from 'react-dom/server'

import HomePage from '../src/pages/home'
import AiConsultingPage from '../src/pages/ai-consulting'
import FdePage from '../src/pages/fde'
import TradeLeadsPage from '../src/pages/trade-leads'
import AboutPage from '../src/pages/about'

const dist = join(import.meta.dir, '..', 'dist')

const pages = {
  'index.html': <HomePage />,
  'ai-consulting/index.html': <AiConsultingPage />,
  'fde/index.html': <FdePage />,
  'trade-leads/index.html': <TradeLeadsPage />,
  'about/index.html': <AboutPage />,
}

for (const [file, element] of Object.entries(pages)) {
  const p = join(dist, file)
  const html = readFileSync(p, 'utf8')
  const marker = '<div id="root"></div>'
  if (!html.includes(marker)) {
    throw new Error(`prerender: marker not found in ${file}`)
  }
  const markup = renderToStaticMarkup(element)
  writeFileSync(p, html.replace(marker, `<div id="root">${markup}</div>`))
  console.log(`prerendered ${file} (${markup.length} bytes)`)
}
