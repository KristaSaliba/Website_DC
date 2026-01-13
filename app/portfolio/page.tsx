import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Portfolio() {
  return (
    <main>
      <Header />
      <section className="min-h-screen pt-40 pb-20 md:pb-32 px-6 md:px-12 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">2025</h1>
            <div className="h-1 w-24 bg-[#c9a227] mx-auto mb-6"></div>
            <p className="text-lg md:text-xl text-gray-600">Our Portfolio</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/images/Jarvio.png" alt="Jarvio" className="w-full h-48 object-contain p-6" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Jarvio</h3>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/images/Neurent Medical.jpg" alt="Neurent Medical" className="w-full h-48 object-contain p-6" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Neurent Medical</h3>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/images/PCS.png" alt="PCS" className="w-full h-48 object-contain p-6" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">PCS</h3>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/images/Shuttle.jpeg" alt="Shuttle" className="w-full h-48 object-contain p-6" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Shuttle</h3>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/images/Tensorix .jpeg" alt="Tensorix" className="w-full h-48 object-contain p-6" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Tensorix</h3>
              </div>
            </div>
            <div className="bg-neutral-50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img src="/images/Hello Automate .png" alt="Hello Automate" className="w-full h-48 object-contain p-6" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Hello Automate</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
