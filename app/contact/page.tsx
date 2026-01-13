"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Contact() {
  useEffect(() => {
    const inquiryType = document.getElementById('inquiry_type')
    if (inquiryType) {
      const handleChange = function() {
        const startupFields = document.getElementById('startup_fields')
        const equityFields = document.getElementById('equity_fields')
        const ventureFields = document.getElementById('venture_fields')
        if (startupFields) startupFields.classList.add('hidden')
        if (equityFields) equityFields.classList.add('hidden')
        if (ventureFields) ventureFields.classList.add('hidden')
        if (this.value === 'startup' && startupFields) {
          startupFields.classList.remove('hidden')
        } else if (this.value === 'equity' && equityFields) {
          equityFields.classList.remove('hidden')
        } else if (this.value === 'venture' && ventureFields) {
          ventureFields.classList.remove('hidden')
        }
      }
      inquiryType.addEventListener('change', handleChange)
      return () => inquiryType.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <main>
      <Header />
      <section className="min-h-screen relative">
        <img src="/images/Image 5 - contact.png" alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="relative z-10 pt-48 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">Let's Build Something Great Together</h1>
            <div className="h-1 bg-[#c9a227] mb-8 w-24"></div>
            <p className="text-lg md:text-xl text-gray-200 mb-12">Tell us about your opportunity and we'll get back to you within 48 hours.</p>
            <form action="https://formspree.io/f/xvgzjyqk" method="POST" encType="multipart/form-data" className="space-y-8 bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">First Name *</label>
                  <input type="text" name="first_name" required className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">Last Name *</label>
                  <input type="text" name="last_name" required className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Email Address *</label>
                <input type="email" name="email" required className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Company Name</label>
                <input type="text" name="company" className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">I am a... *</label>
                <select name="inquiry_type" id="inquiry_type" required className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black bg-white">
                  <option value="">Select your role</option>
                  <option value="startup">Startup Founder</option>
                  <option value="equity">Equity Partner</option>
                  <option value="venture">Venture Builder</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              <div id="startup_fields" className="hidden space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">Company Stage *</label>
                  <select name="company_stage" className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black bg-white">
                    <option value="">Select stage</option>
                    <option value="pre-seed">Pre-Seed</option>
                    <option value="seed">Seed</option>
                    <option value="series-a">Series A</option>
                    <option value="series-b">Series B+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">Funding Amount *</label>
                  <select name="funding_amount" className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black bg-white">
                    <option value="">Select amount</option>
                    <option value="100k-250k">€100k - €250k</option>
                    <option value="250k-500k">€250k - €500k</option>
                    <option value="500k-750k">€500k - €750k</option>
                    <option value="750k-1m">€750k - €1m</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">Industry Sector *</label>
                  <select name="industry" className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black bg-white">
                    <option value="">Select sector</option>
                    <option value="fintech">Fintech</option>
                    <option value="tradetech">Tradetech</option>
                    <option value="digital-infrastructure">Digital Infrastructure</option>
                    <option value="crypto">Crypto/Blockchain</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div id="equity_fields" className="hidden space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">Investment Focus *</label>
                  <select name="investment_focus" className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black bg-white">
                    <option value="">Select focus</option>
                    <option value="venture-capital">Venture Capital</option>
                    <option value="private-equity">Private Equity</option>
                    <option value="venture-building">Venture Building</option>
                    <option value="mixed">Mixed Strategy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">Investment Capacity *</label>
                  <select name="investment_capacity" className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black bg-white">
                    <option value="">Select capacity</option>
                    <option value="100k-500k">€100k - €500k</option>
                    <option value="500k-1m">€500k - €1m</option>
                    <option value="1m-5m">€1m - €5m</option>
                    <option value="5m+">€5m+</option>
                  </select>
                </div>
              </div>
              <div id="venture_fields" className="hidden space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">Venture Type *</label>
                  <select name="venture_type" className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black bg-white">
                    <option value="">Select type</option>
                    <option value="new-venture">New Venture Creation</option>
                    <option value="corporate-venture">Corporate Venture</option>
                    <option value="spin-off">Spin-off</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">Industry Sector *</label>
                  <select name="venture_industry" className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black bg-white">
                    <option value="">Select sector</option>
                    <option value="fintech">Fintech</option>
                    <option value="tradetech">Tradetech</option>
                    <option value="digital-infrastructure">Digital Infrastructure</option>
                    <option value="crypto">Crypto/Blockchain</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="border-t border-neutral-200 pt-8">
                <h3 className="text-lg font-semibold mb-6 text-gray-900">Upload Documents</h3>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-900">Documents</label>
                  <input type="file" name="documents" accept=".pdf,.ppt,.pptx,.doc,.docx,.xls,.xlsx,.csv,.zip,.rar" className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black" />
                  <p className="text-xs text-neutral-500 mt-1">Pitch decks, financial documents, business plans, or any supporting materials (max 10MB)</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-900">Message *</label>
                <textarea name="message" rows="5" required className="w-full px-4 py-3 border border-neutral-300 focus:outline-none focus:border-black" placeholder="Tell us about your opportunity..."></textarea>
              </div>
              <button type="submit" className="w-full bg-black text-white border border-black px-8 py-4 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
