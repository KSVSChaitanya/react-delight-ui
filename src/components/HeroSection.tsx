import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-navy/70" />

      <div className="relative z-10 px-6 text-center">
        <h1 className="mb-6 font-heading text-5xl font-bold uppercase leading-tight tracking-tight text-navy-foreground md:text-7xl lg:text-8xl">
          Transform{" "}
          <span className="text-gradient-gold italic">Your Life</span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-navy-foreground/80 md:text-lg">
          Experience the world-class facilities and expert coaching at
          New Fitness World Gym. Your journey to peak performance starts here.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#contact"
            className="rounded bg-accent px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-transform hover:scale-105"
          >
            Start Today
          </a>
          <a
            href="#programs"
            className="rounded border-2 border-navy-foreground/50 px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-navy-foreground transition-colors hover:border-navy-foreground hover:bg-navy-foreground/10"
          >
            View Programs
          </a>
        </div>
      </div>

      <a
        href="#programs"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-navy-foreground/60"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
