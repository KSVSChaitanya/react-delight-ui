import { Dumbbell, Zap, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import strengthImg from "@/assets/program-strength.jpg";
import cardioImg from "@/assets/program-cardio.jpg";
import yogaImg from "@/assets/program-yoga.jpg";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description:
      "Build lean muscle and increase your power with our state-of-the-art free weights and resistance machines.",
    image: strengthImg,
  },
  {
    icon: Zap,
    title: "Cardio & HIIT",
    description:
      "Burn calories and improve cardiovascular health with high-intensity interval training and premium equipment.",
    image: cardioImg,
  },
  {
    icon: Sparkles,
    title: "Yoga & Mobility",
    description:
      "Enhance flexibility, core strength, and mental clarity with our expert-led yoga and recovery sessions.",
    image: yogaImg,
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="mb-3 font-heading text-4xl font-bold uppercase text-foreground md:text-5xl">
            Our <span className="text-gradient-gold italic">Programs</span>
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            Specialized training programs designed to push your limits and achieve results.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program, i) => (
            <ScrollReveal key={program.title} delay={i * 150}>
              <div className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-xl h-full">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <program.icon className="mb-3 h-6 w-6 text-primary" />
                  <h3 className="mb-2 font-heading text-xl font-bold uppercase text-card-foreground">
                    {program.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 font-heading text-xs font-semibold uppercase tracking-wider text-primary hover:text-accent"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
