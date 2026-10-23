import { Nav, PageHero, How, Cta, Footer } from '@/components/sections'
import { JsonLd } from '@/components/json-ld'
import { organizationLd, breadcrumbLd, site } from '@/lib/site'

const can = [
  '定制开发流程类 AI 应用：获客系统、业务智能体、知识库问答、邮件与单据自动化',
  'AI 咨询：流程梳理、方案与成本测算、落地路线图',
  '按你的要求部署在本地、内网或云端，用你自己的 AI 账号',
  '上线陪跑、团队培训、完整交接文档',
]

const cannot = [
  '不做通用 SaaS 产品——我们按项目做定制，不卖软件订阅',
  '不按人天卖时间，也不做免费的「方案 PPT」',
  '不承诺「保证效果」——能不能做、值不值得做，咨询阶段直话直说',
  '不绑定客户——代码和文档都归你，之后想找谁迭代都行',
]

export default function AboutPage() {
  return (
    <>
      <Nav active="about" />
      <main>
        <PageHero
          eyebrow={`关于 ${site.name}`}
          title={<>一支把 AI 装进业务的<br className="max-sm:hidden" />FDE 团队。</>}
          sub="B2Binsights 不卖概念，交付跑得起来的系统。先咨询定方向，再驻场做落地——做完把系统完整交还给你。"
        />

        <section className="py-24 px-8 max-sm:py-16 max-sm:px-5">
          <div className="mx-auto max-w-6xl grid grid-cols-2 gap-16 items-start max-sm:grid-cols-1 max-sm:gap-10">
            <div>
              <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-6">我们是谁</h2>
              <div className="text-base text-gray-500 leading-relaxed flex flex-col gap-4">
                <p>
                  B2Binsights 是{site.legalName}的 AI 服务品牌。我们是一支
                  FDE（Forward Deployed Engineer，前置部署工程师）团队：
                  不当顾问卖 PPT，也不卖个软件就跑，而是直接进你的业务，
                  把 AI 系统建出来、跑到你的团队真的在用。
                </p>
                <p>
                  我们的客户大多是外贸和制造类企业——他们不需要「AI 战略报告」，
                  需要的是报价单自动生成、询盘自动回复、获客名单自动整理这些
                  <span className="font-semibold text-gray-900">看得见省时省力的改造</span>。
                </p>
              </div>
            </div>
            <div className="rounded border border-gray-200 bg-gray-50 p-8">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-5">基本信息</h3>
              <dl className="flex flex-col gap-3 text-sm">
                <div className="flex gap-3">
                  <dt className="text-gray-400 w-20 shrink-0">公司</dt>
                  <dd className="text-gray-900 font-semibold">{site.legalName}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-gray-400 w-20 shrink-0">品牌</dt>
                  <dd className="text-gray-900 font-semibold">{site.name}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-gray-400 w-20 shrink-0">业务</dt>
                  <dd className="text-gray-900">AI 咨询 · FDE 驻场 AI 改造</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-gray-400 w-20 shrink-0">服务语言</dt>
                  <dd className="text-gray-900">中文（普通话）</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-gray-400 w-20 shrink-0">联系</dt>
                  <dd className="text-gray-900">
                    微信 {site.wechat}
                    <br />
                    {site.email}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <How />

        <section className="bg-white border-y border-gray-200 py-24 px-8 max-sm:py-16 max-sm:px-5">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-3">能力和边界</h2>
            <p className="text-base text-gray-500 mb-12">直话直说是我们的工作方式，这条页面也不例外。</p>
            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
              <div className="rounded border border-gray-200 p-8">
                <h3 className="text-lg font-bold mb-5 text-emerald-600">✓ 我们能做</h3>
                <ul className="flex flex-col gap-2.5">
                  {can.map((c) => (
                    <li key={c} className="text-sm text-gray-600 pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-300 leading-relaxed">{c}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded border border-gray-200 p-8">
                <h3 className="text-lg font-bold mb-5 text-red-500">✕ 我们不做</h3>
                <ul className="flex flex-col gap-2.5">
                  {cannot.map((c) => (
                    <li key={c} className="text-sm text-gray-600 pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-300 leading-relaxed">{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20 px-8 max-sm:py-14 max-sm:px-5">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-4">两种合作方式</h2>
            <p className="text-base text-gray-500 leading-relaxed mb-8">
              AI 咨询按次收费，交付能直接开工的改造清单；
              FDE 驻场改造按项目一口价，交付跑得起来的系统。
              先聊清楚需求，再给报价。
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/ai-consulting/" className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:border-gray-400">
                了解 AI 咨询 →
              </a>
              <a href="/fde/" className="rounded-md bg-brand-500 px-6 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-brand-400">
                了解 FDE 驻场改造 →
              </a>
            </div>
          </div>
        </section>

        <Cta />
        <Footer />
      </main>
      <JsonLd data={organizationLd()} />
      <JsonLd data={breadcrumbLd([
        { name: '首页', path: '/' },
        { name: '关于我们', path: '/about/' },
      ])} />
    </>
  )
}
