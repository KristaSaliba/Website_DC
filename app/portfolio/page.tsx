import Header from "@/components/header" 
 
export default function Portfolio() { 
  return ( 
    <main> 
      <Header /> 
      <section className="pt-40 pb-20 md:pb-32 px-6 md:px-12 lg:px-20 bg-neutral-50"> 
        <div className="max-w-7xl mx-auto"> 
          <div className="text-center mb-16"> 
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>Portfolio</h1> 
            <div className="h-1 w-24 bg-[#c9a227] mx-auto" /> 
          </div> 
          <div className="text-center"> 
            <p className="text-xl text-gray-600">Our portfolio companies are coming soon.</p> 
          </div> 
        </div> 
      </section> 
    </main> 
  ) 
}
