const categories = [
  { key: 'gold', title: 'Gold', image: 'https://images.unsplash.com/photo-1545873509-33e944ca7655?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHb2xkfGVufDB8MHx8fDE3NjEzNjA4NDh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { key: 'diamond', title: 'Diamond', image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1600&auto=format&fit=crop' },
  { key: 'polki', title: 'Polki', image: 'https://images.unsplash.com/photo-1714206466597-59b110ec3055?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQb2xraXxlbnwwfDB8fHwxNzYxMzYwODQ4fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { key: 'antique', title: 'Antique', image: 'https://images.unsplash.com/photo-1606241018160-4985a8ab5dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBbnRpcXVlfGVufDB8MHx8fDE3NjEzNjA4NTB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { key: 'bridal', title: 'Bridal', image: 'https://images.unsplash.com/photo-1549488497-94b52bddac5d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCcmlkYWx8ZW58MHwwfHx8MTc2MTM2MDg0OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

export default function CollectionsGrid(){
  return (
    <section id="collections" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#0b295e]">Collections</h2>
      <p className="text-slate-600 mt-2">Explore handcrafted pieces across our signature categories.</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {categories.map(cat => (
          <a key={cat.key} href="#visit" className="rounded-lg overflow-hidden group border border-slate-200 bg-white" aria-label={`${cat.title} Collection`}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
              <div className="absolute bottom-3 left-3 text-white text-lg font-medium">{cat.title}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
