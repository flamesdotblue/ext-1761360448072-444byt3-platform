export default function Footer(){
  return (
    <footer id="contact" className="bg-slate-50 border-t border-slate-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-semibold text-slate-800">B. Basak and Sons Jewellers</div>
          <div className="text-slate-600 mt-2">112, Shyama Prasad Mukherjee Rd, Kalighat, Kolkata, West Bengal 700026</div>
          <div className="text-slate-600 mt-2">Phone: <a className="hover:text-[#0b295e]" href="tel:+910000000000">+91-0000000000</a></div>
          <div className="text-slate-600">Hours: 11:00am – 8:00pm IST</div>
        </div>
        <div>
          <div className="font-semibold text-slate-800">Explore</div>
          <ul className="space-y-2 mt-2 text-slate-600">
            <li><a href="#collections" className="hover:text-[#0b295e]">Collections</a></li>
            <li><a href="#visit" className="hover:text-[#0b295e]">Visit</a></li>
            <li><a href="#contact" className="hover:text-[#0b295e]">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-800">Assurance</div>
          <ul className="space-y-2 mt-2 text-slate-600">
            <li>916 Hallmark Guarantee</li>
            <li>Diamond Certification (GIA/IGI)</li>
            <li>Secure, private consultations</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-slate-800">Connect</div>
          <div className="flex flex-col gap-2 mt-2 text-slate-600">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-[#0b295e]">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#0b295e]">Facebook</a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-[#0b295e]">YouTube</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} B. Basak and Sons Jewellers — Kalighat</div>
    </footer>
  );
}
