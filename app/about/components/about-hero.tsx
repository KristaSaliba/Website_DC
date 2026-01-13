import Image from "next/image"  
  
export default function AboutHero() {  
  return (  
    <div className="h-screen overflow-hidden">  
      <div className="relative h-full">  
        <Image src="/images/image4-story.png" fill alt="Professional collaboration showcasing legacy and innovation" style={{ objectFit: "cover" }} />  
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />  
        <div className="absolute inset-0 flex items-center justify-start z-10 pt-32">  
          <div className="text-left text-white max-w-4xl px-6 md:px-12 lg:px-20">  
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Our Story</h1>  
            <div className="h-1 bg-[#c9a227] mb-8 w-24" />  
            <p className="text-lg md:text-xl font-light mb-6 italic" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>A Legacy of Building</p>  
            <p className="text-sm md:text-base leading-relaxed mb-4 text-gray-200">Forged from a decade of hands-on experience scaling ventures at the intersection of technology, finance, and brand-driven innovation, Darius Cubed emerged from a fundamental truth: capital alone is never enough.</p>  
            <p className="text-sm md:text-base leading-relaxed mb-4 text-gray-200">We partner with exceptional founders from the earliest stages, weaving deep operational expertise with a trusted, long-term perspective. Our approach combines strategic insight with genuine partnership—transforming ambitious visions into enduring enterprises.</p>  
            <p className="text-sm md:text-base leading-relaxed text-gray-200">Privately held, founder-led, and intentionally small, we move with agility while thinking in generations. This deliberate scale enables us to cultivate meaningful relationships and build lasting value alongside the companies we back.</p>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
} 
