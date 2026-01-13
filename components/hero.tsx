import Image from "next/image"  
import Header from "./header"  
  
export default function Hero() {  
  return (  
    <div className="h-screen overflow-hidden">  
      <Header />  
      <div className="relative h-full">  
        <Image src="/images/image1-docklands.png" fill alt="Professional business background" style={{ objectFit: "cover" }} />  
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />  
        <div className="absolute inset-0 flex items-center justify-start z-10">  
          <div className="text-left text-white max-w-3xl px-6">  
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Building Legacy Through Strategic Investment</h1>  
            <p className="text-sm md:text-base leading-relaxed">A family office at the intersection of venture capital, venture building, and private equity. We don't just invest, we partner deeply with exceptional founders and visionary teams to build enduring companies that transcend market cycles. Our approach combines patient capital with hands on operational expertise, creating lasting value through strategic partnerships and purposeful growth.</p>  
          </div>  
        </div>  
      </div>  
    </div>  
  )  
} 
