/**
 * 全站唯一事实来源:品牌、联系方式、导航、JSON-LD 构造器。
 * 联系方式改动时,记得同步 api/src/index.ts 里的 lead 回复文案。
 */

export const site = {
  name: 'B2Binsights',
  legalName: '厦门涌潮智能科技有限公司',
  url: 'https://b2binsights.io',
  title: 'B2Binsights — AI FDE 团队 · AI 咨询与落地改造',
  description:
    'B2Binsights 是一支 AI FDE 团队：AI 咨询定方向，FDE 驻场交付——获客、智能体搭建、知识问答、流程自动化都能做。部署本地或云端，按项目收费。',
  wechat: 'XiongX0110',
  email: 'xiongbojian007@gmail.com',
} as const

export type PageKey = 'home' | 'ai-consulting' | 'fde' | 'trade-leads' | 'about'

export const navLinks: ReadonlyArray<{ key: PageKey; href: string; label: string }> = [
  { key: 'ai-consulting', href: '/ai-consulting', label: 'AI 咨询' },
  { key: 'fde', href: '/fde', label: 'FDE 改造' },
  { key: 'trade-leads', href: '/trade-leads', label: '外贸获客' },
  { key: 'about', href: '/about', label: '关于我们' },
]

export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness', 'ProfessionalService'],
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/og-image.png`,
    description: site.description,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: '厦门',
      addressCountry: 'CN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: site.email,
        availableLanguage: ['zh-CN'],
      },
    ],
    inLanguage: 'zh-CN',
    areaServed: 'CN',
    serviceType: ['AI 咨询', 'FDE 驻场 AI 改造', '外贸 AI 获客系统定制开发'],
    knowsAbout: [
      'AI 咨询',
      'AI Agent 智能体搭建',
      '企业知识库问答',
      '外贸获客自动化',
      'AI 流程自动化',
      'Forward Deployed Engineer',
    ],
  }
}

export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: 'zh-CN',
    publisher: { '@id': `${site.url}/#organization` },
  }
}

export interface FaqItem {
  q: string
  a: string
}

export function faqPageLd(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function breadcrumbLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  }
}

export function serviceLd({ name, description, path }: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${site.url}${path}`,
    provider: { '@id': `${site.url}/#organization` },
    areaServed: 'CN',
    inLanguage: 'zh-CN',
  }
}
