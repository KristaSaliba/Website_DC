import Link from "next/link"  
  
export default function Header() {  
  return (  
    <header className="fixed top-0 left-0 right-0 z-50 p-6 bg-black/50 backdrop-blur-sm">  
      <div className="flex justify-between items-center">  
        <Link href="/" className="flex items-center">  
          <img src="/logo-fancy.svg" alt="Darius Cubed Logo" className="h-24 w-auto" />  
        </Link>  
        <nav className="flex gap-8">  
          <Link href="/" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">Home</Link>  
          <Link href="/about" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">About</Link>  
          <Link href="/team" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">Team</Link>  
          <Link href="/portfolio" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">Portfolio</Link>  
          <Link href="/contact" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">Contact</Link>  
        </nav>  
      </div>  
    </header>  
  )  
} 
