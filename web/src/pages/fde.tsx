import { Nav, PageHero, Scenarios, How, Local, Cta, Footer } from '@/components/sections'
import { FaqList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { organizationLd, breadcrumbLd, serviceLd, type FaqItem } from '@/lib/site'

const points = [
  { title: 'FDE = Forward Deployed Engineer', desc: '直接在客户场景里干活的工程师。不是远程写文档的外包，也不是讲完就走的顾问——我们在你的业务里，把系统建出来、调到能用。' },
  { title: '按你的流程定制，不套模板', desc: '系统对接你现有的表单、表格、邮箱和软件。不要求你换系统、改流程来适应工具。' },
  { title: '边用边调，直到真的能用', desc: 'AI 系统上线只是开始。我们陪跑调整，直到你的团队每天真的在用它。' },
]

const faqs: FaqItem[] = [
  { q: '我的数据安全吗？', a: '部署方式由你选：数据敏感就本地或内网部署，业务数据不出门；要团队协作就上云端，账号权限你来管。用你自己的 AI 账号，成本和数据流向都透明。' },
  { q: '做完你们还管吗？', a: '管。包含上线陪跑和团队培训，交付完整交接文档。系统归你，不被绑定；后面想加功能，随时再聊。' },
  { q: '报价前需要我准备什么？', a: '不用准备材料。把最耗人力的环节讲清楚就行——我们会在需求沟通里把现状、目标、边界一条条对齐，再给报价。' },
]

export default function FdePage() {
  return (
    <>
      <Nav active="fde" />
      <main>
        <PageHero
          eyebrow="B2Binsights · 服务二"
          title={<>FDE 驻场改造：<br className="max-sm:hidden" />把系统建到你的业务里。</>}
          sub="方案定了，就要真的落地。FDE（Forward Deployed Engineer）驻场开发——在你现有的流程和系统里定制 AI 应用，部署在本地、内网或云端，按项目一口价。"
        />

        <section className="py-24 px-8 max-sm:py-16 max-sm:px-5">
          <div className="mx-auto max-w-6xl flex flex-col gap-8">
            {points.map((p) => (
              <div key={p.title} className="grid grid-cols-[56px_1fr] gap-6 items-start max-sm:gap-4">
                <div className="w-14 h-14 rounded-full border-2 border-navy-950 flex items-center justify-center text-xl font-extrabold text-navy-950 shrink-0">F</div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{p.title}</h4>
                  <p className="text-sm text-gray-400 max-w-lg leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Scenarios />
        <How />
        <Local />

        <section className="bg-gray-50 py-20 px-8 max-sm:py-14 max-sm:px-5">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-4">怎么收费？</h2>
            <p className="text-base text-gray-500 leading-relaxed">
              <span className="font-semibold text-gray-900">按项目一口价，中途不加价。</span>
              先聊清楚需求再报价——范围、交付物、验收标准白纸黑字写下来。不按人天烧钱，也不搞免费试用。
            </p>
            <a href="/ai-consulting/" className="inline-block mt-4 text-sm font-semibold text-brand-600 hover:text-brand-500">
              还没定方案？先做一次 AI 咨询 →
            </a>
          </div>
        </section>

        <section className="py-20 px-8 max-sm:py-14 max-sm:px-5">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-10">你可能会问</h2>
            <FaqList items={faqs} />
          </div>
        </section>

        <Cta />
        <Footer />
      </main>
      <JsonLd data={organizationLd()} />
      <JsonLd data={serviceLd({
        name: 'FDE 驻场 AI 改造',
        description: '在你现有的流程和系统里定制开发 AI 应用：智能体搭建、知识问答、邮件与单据自动化。本地/内网/云端部署，按项目一口价。',
        path: '/fde/',
      })} />
      <JsonLd data={breadcrumbLd([
        { name: '首页', path: '/' },
        { name: 'FDE 驻场改造', path: '/fde/' },
      ])} />
    </>
  )
}
