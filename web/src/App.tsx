import {
  Nav, Hero, Problem, Demo, How, Local,
  Product, Scenarios, Compare, Faq, Cta, Footer,
} from '@/components/sections'

export default function App() {
  return (
    <>
      <Nav />
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
    </>
  )
}
