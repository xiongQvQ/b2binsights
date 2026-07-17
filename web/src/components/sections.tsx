import { cn } from '@/lib/utils'

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 mix-blend-difference max-sm:px-5 max-sm:py-3">
      <a href="#" className="text-lg font-bold tracking-tight text-white">
        B2Binsights
      </a>
      <button
        onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
        className="rounded-md bg-brand-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-brand-400"
      >
        加微信聊聊
      </button>
    </nav>
  )
}

export function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-navy-950 text-white py-28 max-sm:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center gap-20 px-8 max-sm:grid-cols-1 max-sm:gap-10">
        <div>
          <h1 className="mb-4 text-[clamp(38px,5vw,58px)] font-extrabold leading-none tracking-tight">
            帮<span className="text-brand-500">外贸人</span>找客户
          </h1>
          <p className="mb-10 max-w-md text-lg leading-relaxed text-white/65">
            告诉我们你要找什么样的客户，我们给你一份能直接打电话、写邮件的联系名单。部署在你自己的电脑上，客户数据不出门。
          </p>
          <div className="mb-10 flex flex-col gap-3">
            {['数据留在你自己电脑里', '每条线索附带证据来源', '按你的行业和客户画像定制'].map((t) => (
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
              免费拿一份线索样本
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
          <div className="mb-1"><span className="text-white/30">$ </span><span className="text-green-400">描述你的目标客户</span></div>
          <div className="ml-3"><span className="text-white/30">›</span> 消费电子进口商和分销商</div>
          <div className="ml-3"><span className="text-white/30">›</span> 目标国家：英国、德国、法国、北欧</div>
          <div className="ml-3"><span className="text-white/30">›</span> 决策人：采购总监、采购负责人</div>
          <div className="ml-3 mb-1"><span className="text-white/30">›</span> 排除：一件代发、纯平台卖家</div>
          <div><span className="text-white/30">$ </span><span className="text-white/50">搜索中...</span></div>
          <div><span className="text-white/30">$ </span><span className="text-white/50">已找到 </span><span className="text-brand-500">47 家公司</span><span className="text-white/50">，正在验证</span></div>
          <div><span className="text-white/30">$ </span><span className="text-white/50">正在提取决策人联系方式...</span></div>
          <div className="mb-1"><span className="text-white/30">$ </span><span className="text-brand-500">线索报告.csv</span><span className="text-white/50"> 已生成 ✓</span></div>
          <div><span className="text-white/30">$ </span><span className="animate-pulse">▊</span></div>
        </div>
      </div>
    </section>
  )
}

export function Problem() {
  const items = [
    { n: '01', title: 'Google 搜半天，找到的公司要么没官网，要么不是真买家。', desc: '个人卖家、皮包公司、关停的网站——你花的时间大部分都浪费在筛垃圾上。' },
    { n: '02', title: '买来的所谓「精准名单」，电话打过去全是前台。', desc: '名录商会告诉你他们有采购总监的联系方式——但那个人可能三年前就离职了。' },
    { n: '03', title: '最懂获客的那个人离职了，方法也跟着走了。', desc: '每个公司都有一个特别会找客户的业务员。但他怎么找的？没人问过，也没人记下来。' },
    { n: '04', title: 'B2B 平台年费越来越贵，询盘质量越来越差。', desc: '不是平台不好，是上面的人太多了。你花几万块买会员，换来一堆比价的。' },
  ]

  return (
    <section className="py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-16 items-start max-sm:grid-cols-1 max-sm:gap-8">
        <div>
          <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-6">
            还在手工搜客户？<br />你不是一个人。
          </h2>
          <p className="text-base text-gray-500 leading-relaxed max-w-sm">
            干外贸的，谁没在 Google 上翻过几十页结果，最后发现能用的没几个。
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
  const rows = [
    { company: 'TechTronics Ltd', site: 'techtronics.co.uk', name: 'James Davidson', role: 'Procurement Director', email: 'j.davidson@...', score: '9.2', good: true, sources: '3个来源' },
    { company: 'HomeDecor GmbH', site: 'homedecor.de', name: 'Maria Keller', role: 'VP Sourcing', email: 'm.keller@...', score: '8.8', good: true, sources: '2个来源' },
    { company: 'Nordic Electronics', site: 'nordicelec.se', name: 'Erik Lindholm', role: 'Head of Buying', email: 'e.lindholm@...', score: '9.1', good: true, sources: '3个来源' },
    { company: 'IndusParts France', site: 'indusparts.fr', name: 'Thomas Schmitt', role: 'CEO', email: 't.schmitt@...', score: '8.5', good: false, sources: '2个来源' },
    { company: 'Mediterraneo Import', site: 'medimport.it', name: 'Chiara Rossi', role: 'Purchasing Manager', email: 'c.rossi@...', score: '7.9', good: false, sources: '2个来源' },
    { company: 'Oslo Consumer AS', site: 'osloconsumer.no', name: 'Anders Vik', role: 'Category Manager', email: 'a.vik@...', score: '8.6', good: true, sources: '2个来源' },
  ]

  return (
    <section id="demo" className="bg-gray-50 py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-3">
          你拿到的不是一张名单，<br />是一份能打电话的客户档案。
        </h2>
        <p className="text-base text-gray-500 mb-12 max-sm:mb-8">
          每条线索都有公司名、官网、决策人姓名职位、邮箱、LinkedIn、证据来源——以及评分。
        </p>
        <div className="rounded border border-gray-200 bg-white overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span className="text-xs text-gray-400 ml-1.5">leads_report.csv</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-[13px] border-collapse">
              <thead>
                <tr>
                  {['公司名', '官网', '决策人', '职位', '邮箱', '评分', '证据'].map((h) => (
                    <th key={h} className="px-3.5 py-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-200">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.company} className="border-b border-gray-100 last:border-0">
                    <td className="px-3.5 py-3 font-semibold text-gray-900">{r.company}</td>
                    <td className="px-3.5 py-3 text-blue-600 text-xs">{r.site}</td>
                    <td className="px-3.5 py-3 text-gray-700">{r.name}</td>
                    <td className="px-3.5 py-3 text-gray-700">{r.role}</td>
                    <td className="px-3.5 py-3 text-blue-600 text-xs">{r.email}</td>
                    <td className="px-3.5 py-3">
                      <span className={cn(
                        'inline-block px-2.5 py-0.5 rounded-sm text-[11px] font-semibold',
                        r.good ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                      )}>
                        {r.score}
                      </span>
                    </td>
                    <td className="px-3.5 py-3 text-gray-400 text-xs">{r.sources}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

export function How() {
  const steps = [
    { n: 1, title: '你告诉我，你想找什么样的客户。', desc: '跟交代业务员一样——什么行业、哪几个国家、要找采购经理还是老板、有没有要排除的。三句话的事。' },
    { n: 2, title: 'AI 去搜、去验证，不用你盯着。', desc: '自动在 Google、LinkedIn、B2B 平台、公司官网搜索匹配的公司，交叉核验真实性，深挖关键决策人的联系方式。搜完标记好风险和质量评分。' },
    { n: 3, title: '你收到一份 CSV 报告，拿来就能用。', desc: '里面是公司信息、决策人姓名职位邮箱 LinkedIn、证据来源链接、评分。导入 CRM 也行，打印出来打电话也行。' },
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
    { title: 'API Key 是你自己的', desc: '你用你的 AI 账号，不需要把密钥给我们。' },
    { title: '搜索记录直接走你的网络', desc: '从你的电脑到搜索引擎，不经过任何中间服务器。' },
    { title: '挖掘结果存你本地', desc: '所有客户数据都在你自己的硬盘上，没有「云端同步」这回事。' },
    { title: '不需要上传客户名单', desc: '你想搜什么客户，只有你自己知道。' },
  ]

  return (
    <section className="bg-navy-950 text-white py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-20 items-center max-sm:grid-cols-1 max-sm:gap-10">
        <div>
          <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-4">
            为什么部署在你电脑上很重要？
          </h2>
          <p className="text-base text-white/55 leading-relaxed mb-9">
            市面上大多数获客工具都是 SaaS——你的客户名单、搜索记录，全在别人服务器上。我们是本地部署的。你的数据从头到尾不经过我们。
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
          <div className="text-6xl mb-4">🏠</div>
          <h4 className="text-lg font-bold mb-2">没有服务器，就没有泄露。</h4>
          <p className="text-sm text-white/40 mb-5">适合对客户数据敏感的外贸团队，也适合有自己获客方法论、不想把客户资源交给平台的团队。</p>
          <span className="inline-block px-5 py-2 border border-emerald-500/25 text-emerald-500 text-[13px] font-semibold rounded-sm">
            数据 100% 在你手里
          </span>
        </div>
      </div>
    </section>
  )
}

export function Product() {
  const coreFeatures = [
    '客户画像配置（行业 / 国家 / 角色 / 排除条件）',
    '多渠道线索挖掘（Google / LinkedIn / B2B 平台 / 官网）',
    '决策人深挖（姓名 / 职位 / 邮箱 / LinkedIn 主页）',
    '线索评分 + 风险标签 + 证据来源',
    'CSV 报告导出',
    '帮你部署好 + 陪你跑通第一次',
  ]

  const addonFeatures = [
    '竞品渠道分析',
    '展会名单结构化清洗',
    '供应商背调',
    '对接你的 CRM',
    '开发信草稿生成',
    '飞书 / 企微 / 钉钉入口',
  ]

  return (
    <section className="bg-white py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-3">怎么卖？</h2>
        <p className="text-base text-gray-500 mb-12">一套核心引擎覆盖大部分需求。如果你的场景比较特殊，可以加模块。</p>
        <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
          {/* Core */}
          <div className="rounded border-2 border-brand-500 p-9 max-sm:p-6">
            <h3 className="text-xl font-bold mb-1">核心引擎</h3>
            <p className="text-[13px] text-gray-400 mb-6">覆盖外贸获客的全流程</p>
            <ul className="flex flex-col gap-2.5 mb-6">
              {coreFeatures.map((f) => (
                <li key={f} className="text-sm text-gray-600 pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-300 leading-relaxed">{f}</li>
              ))}
            </ul>
            <div className="pt-5 border-t border-gray-200 flex items-baseline gap-1.5 mb-4">
              <span className="text-2xl font-extrabold">咨询报价</span>
              <span className="text-[13px] text-gray-400">· 一次性收费</span>
            </div>
            <button
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full justify-center rounded-md bg-brand-500 px-7 py-3.5 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-brand-400"
            >
              问问多少钱 →
            </button>
          </div>
          {/* Add-ons */}
          <div className="rounded border border-gray-200 p-9 max-sm:p-6 hover:border-gray-400 transition-colors">
            <h3 className="text-xl font-bold mb-1">可加模块 <small className="text-[13px] text-gray-400 font-normal ml-1.5">按需选购</small></h3>
            <p className="text-[13px] text-gray-400 mb-6">核心引擎以外的特殊需求</p>
            <ul className="flex flex-col gap-2.5 mb-6">
              {addonFeatures.map((f) => (
                <li key={f} className="text-sm text-gray-600 pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-gray-300 leading-relaxed">{f}</li>
              ))}
              <li className="text-sm text-brand-500 font-semibold pl-4 relative before:content-['–'] before:absolute before:left-0 leading-relaxed">
                你提需求，我们评估能不能做
              </li>
            </ul>
            <div className="pt-5 border-t border-gray-200 flex items-baseline gap-1.5 mb-4">
              <span className="text-2xl font-extrabold">按需报价</span>
              <span className="text-[13px] text-gray-400">· 按复杂度评估</span>
            </div>
            <button
              onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full justify-center rounded-md border border-gray-300 bg-white px-7 py-3.5 text-[15px] font-semibold text-gray-900 transition-colors hover:border-gray-400"
            >
              聊聊你的需求 →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Scenarios() {
  const cards = [
    { icon: '🌍', title: '外贸工厂找海外品牌商 / 进口商', desc: '按产品品类 + 目标国家 + 客户类型，挖出采购决策人的联系方式。' },
    { icon: '🎯', title: '猎头公司找初创企业做 BD', desc: '定向挖刚融资的初创公司，找到 CEO / CTO，精准触达潜在客户。' },
    { icon: '🏭', title: '工业品企业找采购方', desc: '汽车零部件、化工、机械……定向找到潜在采购商和他们的工程/采购负责人。' },
    { icon: '💼', title: 'SaaS 公司做出海获客', desc: '找海外目标行业的潜在客户，定位 IT 决策者，支持英文搜索和本地化信息。' },
    { icon: '📊', title: '投资 / 咨询做行业调研', desc: '快速摸清一个行业：有哪些公司？谁是关键人物？竞品格局怎么样？' },
    { icon: '💡', title: '你说，我们评估', desc: '你的行业可能不在上面。没关系，告诉我们你想找谁，我们看看能做不。' },
  ]

  return (
    <section className="bg-gray-50 py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-3">不只能找外贸客户。</h2>
        <p className="text-base text-gray-500 mb-12">只要你的生意需要「找到某类公司里的某个人」，就能用。</p>
        <div className="grid grid-cols-3 gap-5 max-sm:grid-cols-1">
          {cards.map((c) => (
            <div key={c.title} className="rounded border border-gray-200 bg-white p-7 transition-colors hover:border-gray-300 max-sm:p-5">
              <div className="text-3xl mb-3">{c.icon}</div>
              <h4 className="text-base font-bold mb-1.5">{c.title}</h4>
              <p className="text-[13px] text-gray-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Compare() {
  const rows = [
    { label: '决策人联系方式', g: '✕ 难找', m: '✕ 不准确', p: '△ 有限', us: '✓ 多源交叉验证' },
    { label: '数据新鲜度', g: '△ 看运气', m: '✕ 买完就过时', p: '△ 平台说了算', us: '✓ 实时搜索' },
    { label: '按你的行业定制', g: '✕', m: '✕', p: '✕', us: '✓ 核心能力' },
    { label: '客户数据在谁手里', g: '✓ 在你手里', m: '✕ 不知道转了几手', p: '✕ 平台持有', us: '✓ 在你电脑上' },
    { label: '结果能不能验证', g: '△ 能，但费时间', m: '✕ 没法验证', p: '✕ 黑盒', us: '✓ 每条附证据链接' },
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
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-3">跟我们有什么区别？</h2>
        <p className="text-base text-gray-500 mb-10">左边是常用的获客方式，右边是 B2Binsights。</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse min-w-[680px]">
            <thead>
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider border-b-2 border-gray-200" />
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider border-b-2 border-gray-200">手工搜 Google</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider border-b-2 border-gray-200">买名单</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider border-b-2 border-gray-200">B2B 平台会员</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-brand-500 uppercase tracking-wider border-b-2 border-gray-200 bg-brand-50/30">B2Binsights</th>
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
  const faqs = [
    { q: '一次能找到多少条线索？', a: '一般 30 到 80 条，看你的行业和客户画像。我们不追求数量，每条都有验证、有证据来源、人还在那个职位上。' },
    { q: '质量怎么保证？', a: '每条线索后面都附了证据来源链接——官网页面、LinkedIn 主页、B2B 平台页面等。你可以点开自己验证。我们还给每条线索打分，帮你排跟进优先级。' },
    { q: '我不懂技术，能用吗？', a: '能。我们帮你部署好、配置好，你只需要会用浏览器和 Excel 就行。获客策略的设置就是描述你的目标客户——跟你给业务员交代任务一样。' },
    { q: '我的客户数据真的安全吗？', a: '部署在你电脑上，API Key 是你自己的，搜索记录走你的网络，结果存你本地。你的客户数据从头到尾不经过我们。这不是 SaaS。' },
    { q: '怎么买？怎么付？', a: '加微信 XiongX0110 或发邮件到 xiongbojian007@gmail.com 联系我们就行。交付格式为 CSV 报告。标准版一次性收费，定制模块按需报价。支持对公转账和微信支付。' },
    { q: '买完你们还管吗？', a: '管。标准版包含部署 + 帮你跑通第一次获客策略，确认拿到线索。后面如果你想加开发信、接 CRM 这些模块，再聊。' },
  ]

  return (
    <section className="bg-gray-50 py-24 px-8 max-sm:py-16 max-sm:px-5">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-[clamp(26px,3.5vw,36px)] font-bold leading-tight tracking-tight mb-10">你可能会问</h2>
        <div className="flex flex-col">
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-gray-200 first:border-t">
              <summary className="py-4 text-[15px] font-semibold cursor-pointer flex items-center justify-between select-none marker:content-none">
                {f.q}
                <span className="text-lg text-gray-400 group-open:hidden">+</span>
                <span className="text-lg text-gray-400 hidden group-open:inline">−</span>
              </summary>
              <p className="pb-4 text-sm text-gray-500 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Cta() {
  return (
    <section id="cta" className="bg-navy-950 text-white text-center py-24 px-8 max-sm:py-16 max-sm:px-5">
      <h2 className="text-[clamp(28px,4vw,40px)] font-bold leading-tight tracking-tight mb-3">拿不准适不适合你？</h2>
      <p className="text-lg text-white/55 leading-relaxed mb-9">
        加微信，说一下你的行业和目标客户。<br />我们免费帮你跑一批线索样本，你先看质量。
      </p>
      <div className="inline-flex flex-col items-center gap-4">
        <img
          src="/WechatIMG1288.jpeg"
          alt="微信二维码"
          className="w-40 h-40 rounded-xl border-2 border-white/10"
        />
        <div>
          <p className="text-base text-white/80 font-semibold">微信号：XiongX0110</p>
          <p className="text-sm text-white/40 mt-1">邮箱：xiongbojian007@gmail.com</p>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/[0.06] py-8 text-center text-[13px] text-white/25">
      © 2024 B2Binsights · 微信 XiongX0110 · xiongbojian007@gmail.com
    </footer>
  )
}
