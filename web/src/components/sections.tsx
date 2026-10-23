import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { navLinks, site, type PageKey } from '@/lib/site'
import { homeFaqs } from '@/lib/content'
import { PlanTable } from '@/components/plan-table'
import { FaqList } from '@/components/faq-list'

export function Nav({ active }: { active?: PageKey }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 mix-blend-difference max-sm:px-5 max-sm:py-3">
      <a href={active === 'home' ? '#' : '/'} className="text-lg font-bold tracking-tight text-white">
        B2Binsights
      </a>
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-6 max-sm:hidden">
          {navLinks.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className={cn(
                'text-sm transition-colors',
                active === l.key ? 'font-semibold text-white' : 'text-white/55 hover:text-white'
              )}
            >
              {l.label}
            </a>
          ))}
        </div>
        <button
          onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
          className="rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brand-400"
        >
          预约 AI 咨询
        </button>
      </div>
    </nav>
  )
}

/** 子页面通用页头:深色底 + eyebrow + H1 + 导语。 */
export function PageHero({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub: string }) {
  return (
    <section className="bg-navy-950 text-white px-8 pt-36 pb-20 max-sm:px-5 max-sm:pt-28 max-sm:pb-14">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-semibold tracking-widest text-brand-500">{eyebrow}</p>
        <h1 className="text-[clamp(30px,4.5vw,48px)] font-extrabold leading-tight tracking-tight mb-5">{title}</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-white/65">{sub}</p>
      </div>
    </section>
  )
}

export function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-navy-950 text-white py-28 max-sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-20 px-8 max-sm:grid-cols-1 max-sm:gap-10">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-widest text-brand-500">
            AI FDE 团队 · AI 咨询 × 驻场交付
          </p>
          <h1 className="mb-4 text-[clamp(38px,5vw,58px)] font-extrabold leading-none tracking-tight">
            把<span className="text-brand-500"> AI </span>真正装进你的业务
            <span className="mt-5 block text-[clamp(16px,2vw,22px)] font-semibold leading-snug text-white/70">
              AI 咨询定方向，FDE 驻场交付，按项目收费
            </span>
          </h1>
          <p className="mb-10 max-w-md text-lg leading-relaxed text-white/65">
            我们是 AI FDE（Forward Deployed Engineer）团队。先用咨询把方向定准，再驻场把系统建到你的业务里。按项目收费，交付跑得起来的东西，不是 PPT。
          </p>
          <div className="mb-10 flex flex-col gap-3">
            {['先咨询后改造，方向不跑偏', '获客、智能体、知识问答，FDE 项目都能做', '按项目一口价，本地 / 云端部署随你选'].map((t) => (
              <span key={t} className="flex items-center gap-2.5 text-sm text-white/50">
                <span className="h-1 w-1 rounded-full bg-emerald-500 shrink-0" />
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 rounded-md bg-brand-500 px-7 py-3.5 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-brand-400"
            >
              聊聊你的业务
            </button>
            <button
              onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/20 bg-transparent px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/5"
            >
              先看看交付物长什么样 ↓
            </button>
          </div>
        </div>

        {/* Terminal */}
        <div className="rounded border border-white/[0.08] bg-white/[0.03] p-6 font-mono text-xs leading-loose text-white/70 max-sm:hidden">
          <div className="mb-1"><span className="text-white/30">$ </span><span className="text-green-400">描述你的业务痛点</span></div>
          <div className="ml-3"><span className="text-white/30">›</span> 报价单处理全靠人肉，每天 3 小时</div>
          <div className="ml-3"><span className="text-white/30">›</span> 想要：AI 自动读邮件 → 生成报价 → 录入</div>
          <div className="ml-3 mb-1"><span className="text-white/30">›</span> 要求：接进现有流程，不用换系统</div>
          <div><span className="text-white/30">$ </span><span className="text-white/50">咨询诊断中...</span></div>
          <div><span className="text-white/30">$ </span><span className="text-white/50">已梳理 </span><span className="text-brand-500">3 个可改造环节</span><span className="text-white/50">，方案已出 ✓</span></div>
          <div><span className="text-white/30">$ </span><span className="text-white/50">FDE 驻场开发 · 第 5 天...</span></div>
          <div className="mb-1"><span className="text-white/30">$ </span><span className="text-brand-500">报价助手</span><span className="text-white/50"> 已上线，今日处理 42 单 ✓</span></div>
          <div><span className="text-white/30">$ </span><span className="animate-pulse">▊</span></div>
        </div>
      </div>
    </section>
  )
}

export function Problem() {
  const items = [
    { n: '01', title: 'AI 分享会听了一堆，回到自己业务还是不知道从哪下手。', desc: '别人讲的是别人的场景。哪些环节值得上 AI、先做哪个、要花多少钱——没人替你算过。' },
    { n: '02', title: '买了一堆 AI 工具，没有一个真正用起来。', desc: '工具是通用的，你的流程是自己的。SaaS 卖给你就完事了，怎么接进业务全靠自己摸索。' },
    { n: '03', title: '想招 AI 工程师，招不到，也养不起。', desc: '懂 AI 的人薪资高，还不懂你的行业；懂业务的人不会 AI。中间永远断着一层。' },
    { n: '04', title: '外包做完就交付，系统越用越不好用。', desc: 'AI 系统要边用边调。按文档开发、验收走人的外包，留给你一个没人维护的黑盒。' },
  ]

  return (
    <section className="py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-16 items-start max-sm:grid-cols-1 max-sm:gap-8">
        <div>
          <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-6">
            想上 AI，却<br />一直上不了车？
          </h2>
          <p className="text-base text-gray-500 leading-relaxed max-w-sm">
            不是 AI 没用，是没人把它真正装进你的业务里。
          </p>
        </div>
        <div className="flex flex-col gap-7">
          {items.map((item) => (
            <div key={item.n} className="border-l-2 border-gray-200 pl-5 transition-colors hover:border-brand-500">
              <div className="text-xs text-gray-300 font-semibold mb-1.5">{item.n}</div>
              <h4 className="text-base font-bold mb-1.5">{item.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Demo() {
  return (
    <section id="demo" className="bg-gray-50 py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-3">
          咨询交付的不是 PPT，<br />是一份能直接开工的改造清单。
        </h2>
        <p className="text-base text-gray-500 mb-12 max-sm:mb-8">
          每个环节都写清楚：现状怎么做、AI 怎么改、预期收益多少、优先级怎么排。
        </p>
        <PlanTable />
      </div>
    </section>
  )
}

export function How() {
  const steps = [
    { n: 1, title: 'AI 咨询：先把方向定准。', desc: '我们梳理你的业务流程，找出最值得上 AI 的环节，给出方案、成本和优先级。咨询按次收费——但聊要聊透，方向错了后面全是浪费。' },
    { n: 2, title: 'FDE 驻场改造：直接在你的业务里干。', desc: 'FDE = Forward Deployed Engineer，就是直接在客户场景里干活的工程师。系统按你的要求部署在本地、内网或云端，边用边调，直到真的能用。' },
    { n: 3, title: '上线陪跑，然后把系统交还给你。', desc: '陪你把系统跑通，写好交接文档，教会你的团队。代码和文档都在你手里，不被我们绑定，想找谁迭代都行。' },
  ]

  return (
    <section className="bg-white py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-12">怎么做？三步。</h2>
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
  )
}

export function Local() {
  const items = [
    { title: '本地 / 内网部署：数据不出门', desc: '对数据敏感的团队，系统建在你自己的电脑或服务器上，邮件、报价、客户资料都不经过第三方。' },
    { title: '云端部署：随时随地能用', desc: '想团队协作、手机上也能用？部署到线上，配好账号和权限，打开浏览器就能用。' },
    { title: '用你自己的 AI 账号', desc: '不管哪种部署，用量和成本都走你自己的账号，透明可控。' },
    { title: '交接后完全归你', desc: '代码和文档在你手里，部署在哪、以后找谁迭代，都是你说了算。' },
  ]

  return (
    <section className="bg-navy-950 text-white py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-20 items-center max-sm:grid-cols-1 max-sm:gap-10">
        <div>
          <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-4">
            部署在哪？你说了算。
          </h2>
          <p className="text-base text-white/55 leading-relaxed mb-9">
            我们不强推某一种架构。数据敏感就本地或内网，团队协作就云端——按你的业务和合规要求选，我们把系统建到符合你情况的地方。
          </p>
          <div className="flex flex-col gap-5">
            {items.map((item) => (
              <div key={item.title} className="flex gap-4 items-start">
                <span className="text-emerald-500 text-base shrink-0 mt-0.5">✓</span>
                <div>
                  <h5 className="text-[15px] font-semibold mb-0.5">{item.title}</h5>
                  <p className="text-[13px] text-white/40">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded border border-white/[0.06] bg-white/[0.03] p-10 text-center">
          <div className="text-6xl mb-4">🧭</div>
          <h4 className="text-lg font-bold mb-2">部署方式跟着业务走。</h4>
          <p className="text-sm text-white/40 mb-5">拿不准选哪种？咨询阶段我们会把两种方案的利弊、成本、数据流向讲清楚，再一起定。</p>
          <span className="inline-block px-5 py-2 border border-emerald-500/25 text-emerald-500 text-[13px] font-semibold rounded-sm">
            本地 / 内网 / 云端 都支持
          </span>
        </div>
      </div>
    </section>
  )
}

export function Product() {
  const coreFeatures = [
    '业务流程梳理，找出最值得上 AI 的环节',
    'AI 方案清单：怎么做、用什么做、多少钱',
    '投入产出测算与优先级排序',
    '落地路线图：先做什么、后做什么',
  ]

  const addonFeatures = [
    '定制开发，直接对接你现有的流程和系统',
    '部署方式你选：本地 / 内网 / 云端',
    '上线陪跑，直到你团队真的用起来',
    '交接文档 + 团队培训，系统归你',
  ]

  return (
    <section className="bg-white py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-3">怎么合作？怎么收费？</h2>
        <p className="text-base text-gray-500 mb-12">两段式：先咨询定方向，再改造做落地。都收费，但先聊清楚需求、再给报价——不搞免费试用，也不按人天烧钱。</p>
        <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
          {/* Consulting */}
          <div className="rounded border border-gray-200 p-9 max-sm:p-6 hover:border-gray-400 transition-colors">
            <h3 className="text-xl font-bold mb-1">AI 咨询</h3>
            <p className="text-[13px] text-gray-400 mb-6">适合还没想清楚从哪下手的企业</p>
            <ul className="flex flex-col gap-2.5 mb-6">
              {coreFeatures.map((f) => (
                <li key={f} className="text-sm text-gray-600 pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-300 leading-relaxed">{f}</li>
              ))}
            </ul>
            <div className="pt-5 border-t border-gray-200 flex items-baseline gap-1.5 mb-4">
              <span className="text-2xl font-extrabold">按次收费</span>
              <span className="text-[13px] text-gray-400">· 聊完需求就报价</span>
            </div>
            <a
              href="/ai-consulting/"
              className="w-full text-center block rounded-md border border-gray-300 bg-white px-7 py-3.5 text-[15px] font-semibold text-gray-900 transition-colors hover:border-gray-400"
            >
              了解 AI 咨询服务 →
            </a>
          </div>
          {/* FDE */}
          <div className="rounded border-2 border-brand-500 p-9 max-sm:p-6">
            <h3 className="text-xl font-bold mb-1">FDE 驻场改造</h3>
            <p className="text-[13px] text-gray-400 mb-6">适合方案已定、要真正落地的团队</p>
            <ul className="flex flex-col gap-2.5 mb-6">
              {addonFeatures.map((f) => (
                <li key={f} className="text-sm text-gray-600 pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-300 leading-relaxed">{f}</li>
              ))}
            </ul>
            <div className="pt-5 border-t border-gray-200 flex items-baseline gap-1.5 mb-4">
              <span className="text-2xl font-extrabold">按项目一口价</span>
              <span className="text-[13px] text-gray-400">· 中途不加价</span>
            </div>
            <a
              href="/fde/"
              className="w-full text-center block rounded-md bg-brand-500 px-7 py-3.5 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-brand-400"
            >
              了解 FDE 驻场改造 →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Scenarios() {
  const cards = [
    { icon: '🤖', title: '业务智能体搭建', desc: '把重复流程交给 AI Agent——搜索、整理、录入、跟进，按你的业务流程定制。' },
    { icon: '📚', title: '企业知识问答', desc: '基于你的产品手册、制度、历史资料搭建知识库问答，新人和客服随问随答。' },
    { icon: '🌍', title: '外贸获客系统（招牌场景）', desc: '自动搜客户、验证真实性、深挖决策人，交付能直接打电话的名单。' },
    { icon: '📧', title: '询盘与邮件自动化', desc: 'AI 读邮件、分优先级、按你的话术起草回复，人来确认后发出。' },
    { icon: '📄', title: '单据与文档处理', desc: '报价单、合同、发票自动解析、录入、生成，把复制粘贴从流程里消灭掉。' },
    { icon: '💡', title: '你的项目，我们评估', desc: '说一个最耗人力的环节，我们告诉你能不能做、值不值得做。' },
  ]

  return (
    <section className="bg-gray-50 py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-3">能做的 FDE 项目，不止一种。</h2>
        <p className="text-base text-gray-500 mb-12">智能体搭建、知识问答、流程自动化……凡是「重复、有规律、耗人」的环节，都值得聊一聊。</p>
        <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
          {cards.map((c) => (
            <div key={c.title} className="rounded border border-gray-200 bg-white p-7 transition-colors hover:border-gray-300 max-sm:p-5">
              <div className="text-3xl mb-3">{c.icon}</div>
              <h4 className="text-base font-bold mb-1.5">{c.title}</h4>
              <p className="text-[13px] text-gray-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
          <a href="/fde/" className="text-brand-600 transition-colors hover:text-brand-500">
            FDE 驻场改造：这些项目怎么交付 →
          </a>
          <a href="/trade-leads/" className="text-brand-600 transition-colors hover:text-brand-500">
            外贸获客系统详情 →
          </a>
        </div>
      </div>
    </section>
  )
}

export function Compare() {
  const rows = [
    { label: '你最后拿到什么', g: '✕ 一份报告', m: '△ 一个通用工具', p: '△ 看招到什么人', us: '✓ 跑起来的系统' },
    { label: '懂不懂你的业务', g: '✕ 说完就走', m: '✕ 不懂你的流程', p: '△ 要磨合很久', us: '✓ 驻场边用边调' },
    { label: '数据在哪', g: '✕ 在咨询公司手里', m: '✕ 在工具的云上', p: '△ 自己管', us: '✓ 你的电脑 / 内网' },
    { label: '费用结构', g: '✕ 几十万起步', m: '△ 年费 + 按量', p: '✕ 高薪 + 招聘周期', us: '✓ 项目一口价' },
    { label: '做完之后', g: '✕ 落地靠你自己', m: '✕ 迭代看平台', p: '✓ 人留在团队', us: '✓ 交接文档 + 培训，不被绑定' },
  ]

  const colorClass = (val: string) => {
    if (val.startsWith('✓')) return 'text-emerald-500 font-bold'
    if (val.startsWith('✕')) return 'text-red-500'
    if (val.startsWith('△')) return 'text-amber-600'
    return ''
  }

  return (
    <section className="bg-white py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-3">为什么选 FDE 团队？</h2>
        <p className="text-base text-gray-500 mb-10">左边是常见的三种做法，右边是 B2Binsights。</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[680px]">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider border-b-2 border-gray-200" />
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider border-b-2 border-gray-200">请大厂顾问</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider border-b-2 border-gray-200">买通用 AI 工具</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider border-b-2 border-gray-200">自己招 AI 工程师</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-brand-500 uppercase tracking-wider border-b-2 border-gray-200 bg-brand-50/30">B2Binsights FDE</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-gray-100">
                  <td className="px-4 py-3 font-semibold text-gray-900">{r.label}</td>
                  <td className={cn('px-4 py-3', colorClass(r.g))}>{r.g}</td>
                  <td className={cn('px-4 py-3', colorClass(r.m))}>{r.m}</td>
                  <td className={cn('px-4 py-3', colorClass(r.p))}>{r.p}</td>
                  <td className={cn('px-4 py-3 bg-brand-50/20', colorClass(r.us))}>{r.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section className="bg-gray-50 py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-10">你可能会问</h2>
        <FaqList items={homeFaqs} />
      </div>
    </section>
  )
}

export function Cta() {
  return (
    <section id="cta" className="bg-navy-950 text-white text-center py-24 px-8 max-sm:py-16 max-sm:px-5">
      <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight tracking-tight mb-3">说说你最想用 AI 解决的那件事</h2>
      <p className="text-lg text-white/55 leading-relaxed mb-9">
        加微信或发邮件，简单描述你的业务和痛点。<br />我们直话直说：能不能做、值不值得做、多少钱、多久交付。
      </p>
      <div className="inline-flex flex-col items-center gap-4">
        <img
          src="/WechatIMG1288.jpeg"
          alt={`B2Binsights 联系微信 ${site.wechat} 的二维码`}
          className="w-40 h-40 rounded-xl border-2 border-white/10"
        />
        <div>
          <p className="text-base text-white/80 font-semibold">微信号：{site.wechat}</p>
          <p className="text-sm text-white/40 mt-1">邮箱：{site.email}</p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/[0.06] py-10 text-center text-[13px] text-white/25 px-5">
      <div className="mb-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] text-white/40">
        <a href="/" className="transition-colors hover:text-white/70">首页</a>
        {navLinks.map((l) => (
          <a key={l.key} href={l.href} className="transition-colors hover:text-white/70">{l.label}</a>
        ))}
      </div>
      <p>© 2026 {site.legalName} · {site.name}</p>
      <p className="mt-1">AI FDE 团队 · 微信 {site.wechat} · {site.email}</p>
    </footer>
  )
}
