import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-navy text-navy-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary">
                <span className="font-heading text-sm font-bold text-primary-foreground">FW</span>
              </div>
              <div className="leading-tight">
                <span className="block font-heading text-sm font-bold uppercase tracking-wider">
                  Fitness World
                </span>
                <span className="block text-[9px] uppercase tracking-[0.2em] text-gold">
                  Gym & Fitness
                </span>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-navy-foreground/60">
              Join the elite fitness community in the city. Professional training, premium equipment, and life-changing results.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-foreground/10 text-navy-foreground/60 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-navy-foreground/60">
              {["About Us", "Our Trainers", "Class Schedule", "Membership Plans"].map((link) => (
                <li key={link}>
                  <a href="#" className="transition-colors hover:text-gold">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-navy-foreground/60">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-accent" />
                123 Fitness Ave, Muscle City, NY
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="flex-shrink-0 text-accent" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0 text-accent" />
                hello@newfitnessworld.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-navy-foreground/60">
              Get fitness tips and gym updates.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 rounded-l bg-navy-foreground/10 px-4 py-2.5 text-sm text-navy-foreground placeholder:text-navy-foreground/40 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="rounded-r bg-primary px-4 py-2.5 text-primary-foreground transition-colors hover:bg-primary/90"
              >
                →
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 text-xs uppercase tracking-wider text-navy-foreground/40 md:flex-row">
          <span>© 2024 New Fitness World Gym. All Rights Reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-navy-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-navy-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
