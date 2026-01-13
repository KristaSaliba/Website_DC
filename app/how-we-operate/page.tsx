import Header from "@/components/header" 
 
export default function HowWeOperate() { 
  return ( 
    <main> 
      <Header /> 
      <section className="pt-40 pb-20 md:pb-32 px-6 md:px-12 lg:px-20 bg-neutral-50"> 
        <div className="max-w-7xl mx-auto"> 
          <div className="text-center mb-16"> 
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>How We Operate</h1> 
            <div className="h-1 w-24 bg-[#c9a227] mx-auto" /> 
          </div> 
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"> 
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-full"> 
              <h2 className="text-2xl font-bold mb-6 text-[#c9a227]" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>Early-stage, High Conviction</h2> 
              <ul className="space-y-4"> 
                <li className="flex items-start"><span className="text-[#c9a227] mr-2">•</span><span className="text-gray-700">Check size €100k - 1m</span></li> 
                <li className="flex items-start"><span className="text-[#c9a227] mr-2">•</span><span className="text-gray-700">Pre-seed to Series A</span></li> 
                <li className="flex items-start"><span className="text-[#c9a227] mr-2">•</span><span className="text-gray-700">Sector-agnostic, with a sweet spot in fintech, tradetech, digital infrastructure, and crypto/blockchain</span></li> 
                <li className="flex items-start"><span className="text-[#c9a227] mr-2">•</span><span className="text-gray-700">Opportunities where we can be a true value-add partner</span></li> 
              </ul> 
            </div> 
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-full"> 
              <h2 className="text-2xl font-bold mb-6 text-[#c9a227]" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>What We Look For</h2> 
              <ul className="space-y-4"> 
                <li className="flex items-start"><span className="text-[#c9a227] mr-2">•</span><span className="text-gray-700">Ambitious founders with differentiated vision</span></li> 
                <li className="flex items-start"><span className="text-[#c9a227] mr-2">•</span><span className="text-gray-700">Technology as a business enabler</span></li> 
                <li className="flex items-start"><span className="text-[#c9a227] mr-2">•</span><span className="text-gray-700">Markets where our expertise can unlock growth</span></li> 
                <li className="flex items-start"><span className="text-[#c9a227] mr-2">•</span><span className="text-gray-700">Authentic, open partnerships with long-term alignment</span></li> 
              </ul> 
            </div> 
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-full"> 
              <h2 className="text-2xl font-bold mb-6 text-[#c9a227]" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>What We Offer</h2> 
              <ul className="space-y-4"> 
                <li className="flex items-start"><span className="text-[#c9a227] mr-2">•</span><span className="text-gray-700">Strategic capital from a single decision-making partner</span></li> 
                <li className="flex items-start"><span className="text-[#c9a227] mr-2">•</span><span className="text-gray-700">Brand, marketing, and growth expertise</span></li> 
                <li className="flex items-start"><span className="text-[#c9a227] mr-2">•</span><span className="text-gray-700">Network effects: founders, talent, follow-on capital</span></li> 
                <li className="flex items-start"><span className="text-[#c9a227] mr-2">•</span><span className="text-gray-700">Deep respect for your vision and your cap table</span></li> 
              </ul> 
            </div> 
          </div> 
        </div> 
      </section> 
    </main> 
  ) 
}
