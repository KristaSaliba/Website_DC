import Link from "next/link" 
import Image from "next/image" 
 
export default function Footer() { 
  return ( 
    <footer className="bg-neutral-900 py-12 px-6"> 
      <div className="max-w-7xl mx-auto"> 
        <div className="flex flex-col md:flex-row justify-between items-start gap-8"> 
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12"> 
            <div className="flex flex-col gap-2"> 
              <h3 className="mb-2 uppercase text-neutral-400 text-xs">Company</h3> 
              <Link href="/about" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">About Us</Link> 
              <Link href="/team" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">Our Team</Link> 
              <Link href="/contact" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">Contact</Link> 
            </div> 
            <div className="flex flex-col gap-2"> 
              <h3 className="mb-2 uppercase text-neutral-400 text-xs">Investments</h3> 
              <Link href="/portfolio" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">Portfolio</Link> 
              <Link href="/how-we-operate" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">Our Approach</Link> 
              <Link href="/insights" className="text-white hover:text-neutral-400 transition-colors duration-300 text-sm">Insights</Link> 
            </div> 
          </div> 
          <div className="flex flex-col items-start gap-4"> 
            <img src="/logo-fancy.svg" alt="Darius Cubed Logo" className="h-24 w-auto" /> 
            <p className="text-white text-sm">© 2025 Darius Cubed. All rights reserved.</p> 
          </div> 
        </div> 
      </div> 
    </footer> 
  ) 
}
