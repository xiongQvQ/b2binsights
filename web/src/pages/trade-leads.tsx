import { Nav, PageHero, Local, Cta, Footer } from '@/components/sections'
import { FaqList } from '@/components/faq-list'
import { JsonLd } from '@/components/json-ld'
import { organizationLd, breadcrumbLd, serviceLd, type FaqItem } from '@/lib/site'

const pains = [
  { n: '01', title: '海关数据、名录买了一堆，还是靠人肉筛。', desc: '名单越买越多，真正值得联系的那批客户，还是要业务员一家家搜、一家家看。' },
  { n: '02', title: '展会名片几百张，回来就没人整理。', desc: '照片拍了一堆、表格对不齐，等整理完，热度早过了。' },
  { n: '03', title: '开发信群发，回复率越来越低。', desc: '不背调就群发，发出去的邮件石沉大海，还伤域名和邮箱信誉。' },
  { n: '04', title: '背调没有标准，能力全看个人。', desc: '老业务员会查，新业务员不会。客户资料散在各人手里，离职就带走。' },
]

const steps = [
  { n: 1, title: '定画像', desc: '和业务负责人对齐：品类、地区、渠道、规模门槛。什么样的是好客户，先说清楚。' },
  { n: 2, title: '批量搜索与初筛', desc: 'AI 按画像批量搜索目标客户，自动过滤掉贸易商、零售商这类不对口的，留下整机厂、品牌商。' },
  { n: 3, title: '逐家深挖与验证', desc: '对每家做背调：官网、领英、工商档案，验证真实性和规模，找采购与研发决策人，标注新产品开发、召回、扩产这类高意向信号。' },
  { n: 4, title: '交付可跟进的名单', desc: '产出带出处、带可信度标注的跟进清单——联系谁、为什么是他、邮箱从哪来，每条都写得明白。' },
]

const outputs = [
  { title: '能直接打电话、发邮件的名单', desc: '不是一堆公司名，是「公司 + 决策人 + 联系方式 + 出处」的完整线索。' },
  { title: '每家客户的背调档案', desc: '规模、产品线、采购线索、高意向信号，一条条整理好，谁接手都能看懂。' },
  { title: '跟进优先级', desc: '按意向信号和匹配度排序，业务员先攻最值得攻的那批。' },
]

const faqs: FaqItem[] = [
  { q: '这个系统和买 SaaS 获客工具有什么区别？', a: 'SaaS 卖给你一个通用的搜索框，怎么用、筛得准不准全靠自己。我们按你的品类和地区定制整个流程——画像、搜索逻辑、背调深度、输出格式都对着你的业务来，而且部署在你自己的环境里。' },
  { q: '找到的联系方式可信吗？', a: '每条联系方式都带出处（来自哪个页面），并按可信度分级标注。没有出处的信息不进名单——宁可少一条，不给一堆猜出来的邮箱。' },
  { q: '我的客户名单会泄露吗？', a: '不会。系统部署在你自己的电脑、内网或云端，名单和数据都在你手里，不经过我们，也不进任何第三方的池子。' },
]

export default function TradeLeadsPage() {
  return (
    <>
      <Nav active="trade-leads" />
      <main>
        <PageHero
          eyebrow="B2Binsights · 招牌场景"
          title={<>外贸 AI 获客：<br className="max-sm:hidden" />让系统替你找出「该联系谁」。</>}
          sub="给外贸团队定制的 AI 获客系统：自动搜客户、验证真实性、深挖决策人，交付能直接打电话、发邮件的跟进名单。FDE 驻场定制，数据部署在你自己的环境。"
        />

        <section className="py-24 px-8 max-sm:py-16 max-sm:px-5">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-16 items-start max-sm:grid-cols-1 max-sm:gap-8">
            <div>
              <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-6">
                获客最大的成本，<br />是业务员的时间。
              </h2>
              <p className="text-base text-gray-500 leading-relaxed max-w-sm">
                名单不缺，缺的是「值得联系、怎么联系」的那部分。这些场景你一定不陌生：
              </p>
            </div>
            <div className="flex flex-col gap-7">
              {pains.map((p) => (
                <div key={p.n} className="border-l-2 border-gray-200 pl-5 transition-colors hover:border-brand-500">
                  <div className="text-xs text-gray-300 font-semibold mb-1.5">{p.n}</div>
                  <h4 className="text-base font-bold mb-1.5">{p.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white border-y border-gray-200 py-24 px-8 max-sm:py-16 max-sm:px-5">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-12">系统怎么工作？四步。</h2>
            <div className="flex flex-col gap-8">
              {steps.map((s) => (
                <div key={s.n} className="grid grid-cols-[56px_1fr] gap-6 items-start max-sm:gap-4">
                  <div className="w-14 h-14 rounded-full border-2 border-navy-950 flex items-center justify-center text-xl font-extrabold text-navy-950 shrink-0">
                    {s.n}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{s.title}</h4>
                    <p className="text-sm text-gray-400 max-w-lg leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-8 max-sm:py-16 max-sm:px-5">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-3">最后你拿到什么？</h2>
            <p className="text-base text-gray-500 mb-12">一个能直接开工的跟进清单，不是一堆要二次加工的原始数据。</p>
            <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
              {outputs.map((o) => (
                <div key={o.title} className="rounded border border-gray-200 bg-white p-7 transition-colors hover:border-gray-300 max-sm:p-5">
                  <h4 className="text-base font-bold mb-1.5">{o.title}</h4>
                  <p className="text-[13px] text-gray-400 leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Local />

        <section className="bg-gray-50 py-20 px-8 max-sm:py-14 max-sm:px-5">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-4">怎么收费？</h2>
            <p className="text-base text-gray-500 leading-relaxed">
              这是 FDE 驻场改造的一个典型项目，<span className="font-semibold text-gray-900">按项目一口价</span>交付。
              你的品类、地区、目标客户画像不同，系统的搜索逻辑和输出格式都会定制——先聊需求，再报价。
            </p>
            <a href="/fde/" className="inline-block mt-4 text-sm font-semibold text-brand-600 hover:text-brand-500">
              了解 FDE 驻场改造 →
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
        name: '外贸 AI 获客系统',
        description: '为外贸团队定制的 AI 获客系统：自动搜索目标客户、验证真实性与规模、深挖决策人联系方式，交付带出处的可跟进名单。FDE 驻场定制，本地/内网/云端部署。',
        path: '/trade-leads/',
      })} />
      <JsonLd data={breadcrumbLd([
        { name: '首页', path: '/' },
        { name: '外贸 AI 获客系统', path: '/trade-leads/' },
      ])} />
    </>
  )
}
