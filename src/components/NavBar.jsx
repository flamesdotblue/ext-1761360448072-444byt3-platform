export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-3" aria-label="B. Basak and Sons Jewellers — Home">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0b295e] to-[#123a86] flex items-center justify-center text-amber-300 font-bold">B</div>
          <div className="leading-tight">
            <div className="text-sm tracking-widest text-slate-800">B. BASAK AND SONS</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Kalighat Jewellers</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-2">
          <a href="#collections" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-[#0b295e]">Collections</a>
          <a href="#visit" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-[#0b295e]">Visit</a>
          <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-[#0b295e]">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:+910000000000" className="px-4 py-2 rounded-md bg-[#0b295e] text-amber-200 hover:bg-[#123a86] text-sm font-semibold">Book Consultation</a>
        </div>
      </div>
    </header>
  );
}
