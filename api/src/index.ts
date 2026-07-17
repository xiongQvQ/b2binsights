import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors({
  origin: ['https://b2binsights.io', 'http://localhost:5173'],
  allowMethods: ['POST', 'GET', 'OPTIONS'],
}))

// Health check
app.get('/api/health', (c) => c.json({ ok: true }))

// Contact / lead sample request
app.post('/api/lead', async (c) => {
  const body = await c.req.json<{ name?: string; contact?: string; industry?: string; target?: string }>()

  // In production, this would send a WeChat notification or store to a database
  console.log('New lead request:', JSON.stringify(body))

  return c.json({
    success: true,
    message: '收到你的需求，我们会尽快联系你。也可以直接加微信：XiongX0110',
  })
})

export default app
