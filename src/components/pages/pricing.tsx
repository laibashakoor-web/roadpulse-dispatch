const plans = [
  {
    name: "Starter",
    price: "$250",
    frequency: "/week",
    description: "Best for owner-operators running 1 truck.",
    features: [
      "Up to 4 loads per week",
      "Basic route planning",
      "Business-hours dispatch support",
      "Paperwork and invoice support",
    ],
  },
  {
    name: "Growth",
    price: "$450",
    frequency: "/week",
    description: "Ideal for growing carriers with 2-5 trucks.",
    featured: true,
    features: [
      "Up to 10 loads per week",
      "Advanced route optimization",
      "Priority broker communication",
      "24/7 dispatch assistance",
      "Dedicated account dispatcher",
    ],
  },
  {
    name: "Fleet",
    price: "Custom",
    frequency: "",
    description: "Tailored dispatching for larger fleets.",
    features: [
      "Unlimited load support",
      "Multi-driver dispatch board",
      "Dedicated operations specialist",
      "Compliance workflow support",
      "Custom reporting dashboards",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-title">
          <h2>Pricing Plans</h2>
          <p>
            Clear, scalable pricing plans to match your fleet size and dispatch
            needs. No hidden fees.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
              key={plan.name}
            >
              <h3>{plan.name}</h3>
              <p className="muted">{plan.description}</p>
              <p className="price">
                {plan.price}
                <span className="muted">{plan.frequency}</span>
              </p>
              <ul className="clean-list">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
