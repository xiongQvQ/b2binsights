interface JsonLdProps {
  data: object
}

/** 以 JSON-LD 形式输出结构化数据。预渲染后会进入静态 HTML,爬虫无需执行 JS。 */
export function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
