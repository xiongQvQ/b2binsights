import { cn } from '@/lib/utils'
import type { FaqItem } from '@/lib/site'

export type { FaqItem }

interface FaqListProps {
  items: FaqItem[]
  className?: string
}

/** details/summary 手风琴,无需 JS 即可展开,正文始终可被爬虫读取。 */
export function FaqList({ items, className }: FaqListProps) {
  return (
    <div className={cn('flex flex-col', className)}>
      {items.map((f) => (
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
  )
}
