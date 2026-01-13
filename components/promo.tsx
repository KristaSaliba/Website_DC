import Image from "next/image"  
  
export default function Section() {  
  return (  
    <div className="relative flex items-center justify-center h-screen overflow-hidden">  
      <div className="absolute inset-0">  
        <Image src="/images/image3-philosophy.png" fill alt="Abstract geometric pattern" style={{ objectFit: "cover" }} />  
      </div>  
      <h3 className="absolute top-12 right-6 text-black uppercase z-10 text-sm md:text-base lg:text-lg">Our Philosophy</h3>  
      <p className="absolute bottom-12 right-6 text-black text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-5xl z-10">We believe true wealth is built, not traded. Our philosophy centers on disciplined capital deployment, deep operational partnership, and unwavering commitment to long term value creation. We seek opportunities where our decade of experience scaling ventures can accelerate growth, mitigate risk, and transform promising ideas into category defining businesses. Every investment is a partnership, every partnership, a commitment to building generational impact.</p>  
    </div>  
  )  
} 
