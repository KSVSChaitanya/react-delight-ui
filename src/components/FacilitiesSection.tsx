import { CheckCircle } from "lucide-react";
import facilitiesImg from "@/assets/facilities.jpg";

const features = [
  "Professional Grade Equipment",
  "Sauna & Steam Room Access",
  "Nutrition & Supplement Juice Bar",
  "24/7 Premium Member Access",
];

const FacilitiesSection = () => {
  return (
    <section id="about" className="bg-muted py-24">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src={facilitiesImg}
              alt="World-class gym facilities"
              className="w-full rounded-lg object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 left-6 rounded bg-primary px-6 py-4 text-center shadow-lg">
              <span className="block font-heading text-3xl font-bold text-primary-foreground">
                20,000+
              </span>
              <span className="text-xs uppercase tracking-wider text-primary-foreground/80">
                Sq. Ft. Facility
              </span>
            </div>
          </div>

          <div>
            <h2 className="mb-4 font-heading text-4xl font-bold uppercase text-foreground md:text-5xl">
              World-Class{" "}
              <span className="text-gradient-gold italic">Facilities</span>
            </h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">
              At New Fitness World Gym, we believe in providing the best tools
              for your success. Our facility is equipped with top-tier gear from
              industry leaders like Hammer Strength and Life Fitness.
            </p>
            <ul className="mb-8 space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block rounded border-2 border-primary bg-primary px-8 py-3 font-heading text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Book a Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
