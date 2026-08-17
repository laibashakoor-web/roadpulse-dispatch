import Image from "next/image";

const services = [
  {
    title: "Load Booking",
    details:
      "Finds and books market-competitive freight matching your lane and equipment profile.",
    image:
      "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Route Planning",
    details:
      "Builds practical route plans with fuel stops, toll awareness, and time-window compliance.",
    image: "/images/route-planning-truck.png",
  },
  {
    title: "Driver Support",
    details:
      "Provides immediate support for check calls, schedule changes, and broker coordination.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Documentation Handling",
    details:
      "Manages paperwork from rate cons to POD submissions and billing handoff.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "24/7 Dispatch Services",
    details:
      "Covers after-hours updates, urgent load changes, and weekend dispatch continuity.",
    image:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-title">
          <h2>Core Services</h2>
          <p>
            End-to-end dispatching solutions designed to improve revenue and
            reduce operational stress.
          </p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <div className="section-image-wrapper">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={1200}
                  height={800}
                  className="section-image"
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
