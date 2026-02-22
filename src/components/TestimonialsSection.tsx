import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Joined Fitness World 6 months ago and I've never felt stronger. The community and the trainers here push you to your absolute limits.",
    name: "James Rodriguez",
    since: "Member Since 2023",
  },
  {
    quote:
      "The variety of classes is amazing. I love the Yoga sessions after a heavy cardio workout. The staff is professional and very supportive.",
    name: "Sarah Thompson",
    since: "Member Since 2022",
  },
  {
    quote:
      "Finally found a gym where I feel comfortable and motivated. The personal training program helped me lose 30lbs in 4 months!",
    name: "Michael Chen",
    since: "Member Since 2023",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <h2 className="mb-16 text-center font-heading text-4xl font-bold uppercase text-foreground md:text-5xl">
          Success <span className="text-gradient-gold italic">Stories</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-lg border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-muted-foreground/20" />
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-heading text-sm font-bold uppercase text-card-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-accent">
                    {t.since}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
