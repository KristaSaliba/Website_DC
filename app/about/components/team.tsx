import Image from "next/image"  
  
export default function Team() {  
  const team = [  
    { name: "PJ Impey", role: "Principal", description: "Championing opportunities, operational insight, and network growth.", linkedin: "https://www.linkedin.com/in/pj-impey-1bb22556/?skipRedirect=true", image: "/images/PJ.jpeg" },  
    { name: "Nicole Morton", role: "CFO", description: "International finance and treasury leadership.", linkedin: "https://www.linkedin.com/in/nicole-morton-41823a74/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BY8qJLOV5Sdi2%2Fv%2By9CpTyg%3D%3D", image: "/images/Nicole.jpeg" },  
    { name: "Krista Saliba", role: "Project Director", description: "Corporate governance lead, portfolio support, and growth enabler.", linkedin: "https://www.linkedin.com/in/krista-saliba-494aa746/", image: "/images/Krista.jpeg" }  
  ]  
  return (  
    <section className="pt-40 pb-20 md:pb-32 px-6 md:px-12 lg:px-20 bg-neutral-50">  
      <div className="max-w-7xl mx-auto">  
        <div className="text-center mb-16">  
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>Our Team</h2>  
          <div className="h-1 w-24 bg-[#c9a227] mx-auto" />  
        </div>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">  
          {team.map((member, index) => (  
            <div key={member.name} className="group">  
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 h-full">  
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">  
                  <Image src={member.image} alt={member.name} width={96} height={96} className="w-full h-full object-cover" />  
                </div>  
                <h3 className="text-xl font-bold mb-2 text-center" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>{member.name}</h3>  
                <p className="text-[#c9a227] font-semibold mb-4 text-center text-sm uppercase tracking-wide">{member.role}</p>  
                <p className="text-gray-600 text-center leading-relaxed mb-6">{member.description}</p>  
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 text-[#c9a227] hover:text-[#b8960c] transition-colors duration-300">  
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">  
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>  
                  </svg>  
                  <span className="text-sm font-semibold">LinkedIn</span>  
                </a>  
              </div>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>  
  )  
} 
