import { cn } from '@/lib/utils'

const rows = [
  { step: '询盘邮件分类回复', plan: 'LLM 读邮件 + 自动起草回复', gain: '每天省 2 小时', hi: true },
  { step: '报价单生成', plan: '表单化 + AI 带出历史价格', gain: '30 分钟 → 3 分钟', hi: true },
  { step: '展会名片整理', plan: 'OCR + 自动结构化入库', gain: '500 张当天清完', hi: true },
  { step: '客户资料背调', plan: '自动搜官网 / 领英生成档案', gain: '陌拜成功率提升', hi: false },
  { step: '合同关键信息提取', plan: '文档抽取 + 人工复核', gain: '录入错误率大幅下降', hi: false },
  { step: '展会名单清洗跟进', plan: '表格照片批量结构化', gain: '当天变成可跟进清单', hi: false },
]

/** ai_plan.md 改造清单样例——首页 Demo 与 AI 咨询页共用。 */
export function PlanTable() {
  return (
    <div className="rounded border border-gray-200 bg-white overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 border-b border-gray-200">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="text-xs text-gray-400 ml-1.5">ai_plan.md — 改造方案（节选）</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[13px] border-collapse">
          <thead>
            <tr>
              {['业务环节', 'AI 方案', '预期收益', '优先级'].map((h) => (
                <th key={h} className="px-3.5 py-3 text-left text-[11px] font-semibold text-gray-400 uppercase tracking-wider bg-gray-50 border-b border-gray-200">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.step} className="border-b border-gray-100 last:border-0">
                <td className="px-3.5 py-3 font-semibold text-gray-900">{r.step}</td>
                <td className="px-3.5 py-3 text-gray-700">{r.plan}</td>
                <td className="px-3.5 py-3 text-gray-700">{r.gain}</td>
                <td className="px-3.5 py-3">
                  <span className={cn(
                    'inline-block px-2.5 py-0.5 rounded-sm text-[11px] font-semibold',
                    r.hi ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                  )}>
                    {r.hi ? 'P0 先做' : 'P1 排期'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
