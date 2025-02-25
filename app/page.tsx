"use client"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FDFBF6]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

