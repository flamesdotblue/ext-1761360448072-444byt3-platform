export default function Hero(){
  return (
    <section className="relative" id="top">
      <div className="relative h-[64vh] md:h-[76vh] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1760081912307-fe4c5cc3aee0?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFeHF1aXNpdGUlMjBqZXdlbGxlcnklMjBtYWNyb3xlbnwwfDB8fHwxNzYxMzYwODg4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Exquisite jewellery macro" className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10"/>
        <div className="absolute inset-0 flex items-end md:items-center">
          <div className="max-w-7xl mx-auto w-full px-4 pb-10">
            <h1 className="text-white text-3xl md:text-5xl font-serif tracking-tight">Kolkata's Heritage. Modern Luxury.</h1>
            <p className="text-white/90 mt-3 max-w-xl">Premium Gold, Diamond, and traditional Bengali Bridal jewellery — crafted with precision at our Kalighat atelier.</p>
            <div className="mt-6 flex gap-3">
              <a href="tel:+910000000000" className="px-5 py-3 rounded-md bg-amber-300 text-[#0b295e] font-semibold hover:bg-amber-200">Book Your Consultation</a>
              <a href="#collections" className="px-5 py-3 rounded-md bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20">Explore Collections</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
