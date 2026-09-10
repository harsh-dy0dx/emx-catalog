import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] sm:w-[calc(100%-48px)] max-w-7xl glass-panel rounded-full z-[100] transition-all">
      <div className="flex justify-between items-center px-4 sm:px-8 py-2.5 sm:py-3">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <img src="/logo.png" alt="EMX Motors Logo" className="h-8 sm:h-11 w-auto object-contain" />
        </Link>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 font-semibold text-slate-500 text-sm">
          <Link href="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-slate-900 transition-colors">About Us</Link>
          <Link href="#categories" className="hover:text-slate-900 transition-colors">Product Category</Link>
          <Link href="#track" className="hover:text-slate-900 transition-colors">Track Order</Link>
          <Link href="#reviews" className="hover:text-slate-900 transition-colors">Reviews</Link>
          <Link href="#contact" className="hover:text-slate-900 transition-colors">Contact Us</Link>
        </nav>

        {/* Action Button */}
        <a 
          href="#contact" 
          className="bg-[#0284C7] hover:bg-[#0369A1] text-white px-4 sm:px-7 py-2 sm:py-2.5 rounded-full font-bold transition-all shadow-md text-xs sm:text-sm shrink-0"
        >
          Get a Quote
        </a>
      </div>
    </header>
  );
}