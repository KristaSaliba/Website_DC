import Hero from "@/components/hero"
import Featured from "@/components/featured"
import Promo from "@/components/promo"
import Footer from "@/components/footer"
import Stats from "@/components/stats"

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Stats />
      <Promo />
      <Footer />
    </main>
  )
}
