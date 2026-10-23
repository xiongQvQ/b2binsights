import { Nav, PageHero, Cta, Footer } from '@/components/sections'
import { PlanTable } from '@/components/plan-table'
import { FaqList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { organizationLd, faqPageLd, breadcrumbLd, serviceLd, type FaqItem } from '@/lib/site'

const deliverables = [
  { n: '01', title: '业务流程梳理', desc: '把你的核心流程过一遍：谁在做、每一步花多少时间、卡在哪个环节。' },
  { n: '02', title: 'AI 方案清单', desc: '每个环节写清楚：能不能上 AI、怎么做、用什么做、大概要多少钱。' },
  { n: '03', title: '投入产出与优先级', desc: '算清每一项的预期收益和成本，排出先做哪个、后做哪个。' },
  { n: '04', title: '落地路线图', desc: '一份能直接开工的改造清单（就像下面这张表），不写空话。' },
]

const fits = [
  { title: '还没想清楚从哪下手的企业', desc: '知道 AI 重要，但不知道自己业务里哪几个环节值得先做。' },
  { title: '买了一堆工具却没落地的团队', desc: 'AI 分享会听了不少，SaaS 也买过，就是没接进自己的流程。' },
  { title: '被各种报价搞晕的老板', desc: '外面的方案从几万到几十万都有，需要一个第三方帮你把账算明白。' },
]

const steps = [
  { n: 1, title: '加微信，描述你的业务。', desc: '简单说你是做什么的、最想用 AI 解决哪件事。这一步不收费，我们先判断值不值得往下聊。' },
  { n: 2, title: '深度访谈，把流程过透。', desc: '一到两次沟通：过流程、看单据、算人力和时间成本。聊要聊透——方向错了后面全是浪费。' },
  { n: 3, title: '交付改造清单 + 讲解。', desc: '给你一份写清「现状、AI 方案、成本、优先级」的清单，并约一次讲解，确保你能拿着它直接做决定。' },
  { n: 4, title: '之后怎么落地，你自己定。', desc: '可以自己干、找别人干，也可以交给我们做 FDE 驻场改造——报告写得足够细，谁拿去都能开工。' },
]

const faqs: FaqItem[] = [
  { q: '可以只要咨询、不要改造吗？', a: '可以。你可以拿着咨询报告自己落地，或者找任何人做。报告里的方案、成本和优先级我们写得足够细，能直接开工。' },
  { q: '我完全不懂技术，能合作吗？', a: '能。需求沟通、方案确认、验收交付全程用你能看懂的语言。你要做的只是描述你的业务、判断结果对不对——技术部分是我们的事。' },
  { q: '咨询完，你们会不会强推改造？', a: '不会。咨询和改造是分开收费的两段，我们按次收咨询费，靠这个吃饭，不需要靠「必须找我们做」来赚钱。值得自己干的，我们会直说。' },
]

export default function AiConsultingPage() {
  return (
    <>
      <Nav active="ai-consulting" />
      <main>
        <PageHero
          eyebrow="B2Binsights · 服务一"
          title={<>AI 咨询：先想清楚，<br className="max-sm:hidden" />再动手。</>}
          sub="花小钱把方向定准。我们梳理你的业务流程，找出最值得上 AI 的环节，交付一份写清方案、成本和优先级的改造清单。按次收费，聊完需求就报价。"
        />

        <section className="py-24 px-8 max-sm:py-16 max-sm:px-5">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-3">你拿到的是什么？</h2>
            <p className="text-base text-gray-500 mb-12">不是一份 PPT，是一份能直接开工的改造清单。</p>
            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
              {deliverables.map((d) => (
                <div key={d.n} className="border-l-2 border-gray-200 pl-5 transition-colors hover:border-brand-500">
                  <div className="text-xs text-gray-300 font-semibold mb-1.5">{d.n}</div>
                  <h4 className="text-base font-bold mb-1.5">{d.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-24 px-8 max-sm:py-16 max-sm:px-5">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-3">
              交付物长什么样？<br />看一段真实样例。
            </h2>
            <p className="text-base text-gray-500 mb-12 max-sm:mb-8">
              每个环节都写清楚：现状怎么做、AI 怎么改、预期收益多少、优先级怎么排。
            </p>
            <PlanTable />
          </div>
        </section>

        <section className="py-24 px-8 max-sm:py-16 max-sm:px-5">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-12">适合谁来聊？</h2>
            <div className="flex flex-col gap-7">
              {fits.map((f) => (
                <div key={f.title} className="grid grid-cols-[56px_1fr] gap-6 items-start max-sm:gap-4">
                  <span className="h-14 w-14 rounded-full border-2 border-navy-950 flex items-center justify-center shrink-0 text-xl text-navy-950">?</span>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-400 max-w-lg">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-gray-200 py-24 px-8 max-sm:py-16 max-sm:px-5">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-12">怎么进行？四步。</h2>
            <div className="flex flex-col gap-8">
              {steps.map((s) => (
                <div key={s.n} className="grid grid-cols-[56px_1fr] gap-6 items-start max-sm:gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-navy-950 flex items-center justify-center text-xl font-extrabold text-navy-950 shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{s.title}</h4>
                    <p className="text-sm text-gray-400 max-w-lg">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 px-8 max-sm:py-14 max-sm:px-5">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-4">怎么收费？</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-2">
              按次收费，聊完需求就报价。<span className="font-semibold text-gray-900">不做免费试用</span>——免费的方案没人当真，付费的咨询我们才会真的把账算透。
            </p>
            <a href="/fde/" className="inline-block mt-4 text-sm font-semibold text-brand-600 hover:text-brand-500">
              方案定了想落地？看看 FDE 驻场改造 →
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
      <JsonLd data={faqPageLd(faqs)} />
      <JsonLd data={serviceLd({
        name: 'AI 咨询',
        description: '梳理业务流程，找出最值得上 AI 的环节，交付含方案、成本测算与优先级的改造清单。按次收费。',
        path: '/ai-consulting/',
      })} />
      <JsonLd data={breadcrumbLd([
        { name: '首页', path: '/' },
        { name: 'AI 咨询', path: '/ai-consulting/' },
      ])} />
    </>
  )
}
