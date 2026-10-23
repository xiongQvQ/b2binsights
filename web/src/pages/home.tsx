import {
  Nav, Hero, Problem, Demo, How, Local,
  Product, Scenarios, Compare, Faq, Cta, Footer,
} from '@/components/sections'
import { JsonLd } from '@/components/json-ld'
import { organizationLd, websiteLd, faqPageLd } from '@/lib/site'
import { homeFaqs } from '@/lib/content'

export default function HomePage() {
  return (
    <>
      <Nav active="home" />
      <main>
        <Hero />
        <div className="h-px bg-gray-200" />
        <Problem />
        <div className="h-px bg-gray-200" />
        <Demo />
        <How />
        <Local />
        <div className="h-px bg-gray-200" />
        <Product />
        <div className="h-px bg-gray-200" />
        <Scenarios />
        <div className="h-px bg-gray-200" />
        <Compare />
        <Faq />
        <Cta />
        <Footer />
      </main>
      <JsonLd data={organizationLd()} />
      <JsonLd data={websiteLd()} />
      <JsonLd data={faqPageLd(homeFaqs)} />
    </>
  )
}
