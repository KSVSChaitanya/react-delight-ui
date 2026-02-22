import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Classes", "Pricing", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
            <span className="font-heading text-sm font-bold text-primary-foreground">FW</span>
          </div>
          <div className="leading-tight">
            <span className="block font-heading text-lg font-bold uppercase tracking-wider text-navy-foreground">
              Fitness World
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gold">
              Gym & Fitness
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-heading text-sm uppercase tracking-wider text-navy-foreground/80 transition-colors hover:text-gold"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded bg-primary px-6 py-2.5 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Join Now
          </a>
        </div>

        <button
          className="text-navy-foreground md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy-foreground/10 bg-navy px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block py-2 font-heading text-sm uppercase tracking-wider text-navy-foreground/80 hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 inline-block rounded bg-primary px-6 py-2.5 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground"
          >
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
