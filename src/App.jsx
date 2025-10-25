import NavBar from './components/NavBar';
import Hero from './components/Hero';
import CollectionsGrid from './components/CollectionsGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <CollectionsGrid />
        <section id="visit" className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <img src="https://images.unsplash.com/photo-1568288796918-03e7d93306bd?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDcmFmdHNtYW5zaGlwfGVufDB8MHx8fDE3NjEzNjA4ODh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Craftsmanship" className="rounded-lg border border-slate-200"/>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0b295e]">Craftsmanship. Trust. Legacy.</h2>
            <p className="text-slate-700 mt-3">From Kalighat, Kolkata — heirloom jewellery in 916 Hallmarked Gold, certified diamonds (GIA/IGI), and traditional Bengali bridal signatures like Sitahar, Chur, and Polki chokers. Meticulous finish and transparent advice for generational purchases.</p>
            <div className="mt-6 flex gap-3">
              <a href="tel:+910000000000" className="px-5 py-3 rounded-md bg-[#0b295e] text-amber-200 font-semibold hover:bg-[#123a86]">Call Kalighat Showroom</a>
              <a href="mailto:hello@example.com" className="px-5 py-3 rounded-md bg-white border border-slate-200 text-slate-800 font-semibold hover:bg-slate-50">Email Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
