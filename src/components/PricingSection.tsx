import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: 29,
    period: "month",
    description: "Perfect for beginners starting their fitness journey.",
    features: [
      "Access to gym floor",
      "Locker room access",
      "2 group classes/week",
      "Basic fitness assessment",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: 59,
    period: "month",
    description: "Our most popular plan for serious fitness enthusiasts.",
    features: [
      "Unlimited gym access",
      "All group classes",
      "Personal trainer (2x/month)",
      "Sauna & steam room",
      "Nutrition consultation",
    ],
    highlighted: true,
  },
  {
    name: "Elite",
    price: 99,
    period: "month",
    description: "The ultimate experience for peak performance athletes.",
    features: [
      "24/7 unlimited access",
      "All Premium benefits",
      "Weekly personal training",
      "Juice bar credits",
      "Guest passes (4/month)",
      "Priority class booking",
    ],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-3 font-heading text-4xl font-bold uppercase text-foreground md:text-5xl">
            Membership <span className="text-gradient-gold italic">Plans</span>
          </h2>
          <p className="mx-auto max-w-md text-muted-foreground">
            Choose the plan that fits your goals. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col overflow-hidden rounded-lg border transition-shadow hover:shadow-xl ${
                plan.highlighted
                  ? "border-accent bg-navy text-navy-foreground shadow-lg scale-[1.03]"
                  : "border-border bg-card text-card-foreground"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-accent py-1.5 text-center font-heading text-xs font-bold uppercase tracking-widest text-accent-foreground">
                  Most Popular
                </div>
              )}
              <div className="flex flex-1 flex-col p-8">
                <h3 className="mb-1 font-heading text-2xl font-bold uppercase">
                  {plan.name}
                </h3>
                <p
                  className={`mb-6 text-sm ${
                    plan.highlighted ? "text-navy-foreground/60" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className="font-heading text-5xl font-bold">${plan.price}</span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-navy-foreground/60" : "text-muted-foreground"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm">
                      <Check
                        className={`h-4 w-4 flex-shrink-0 ${
                          plan.highlighted ? "text-accent" : "text-primary"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block rounded py-3 text-center font-heading text-sm font-semibold uppercase tracking-wider transition-colors ${
                    plan.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
