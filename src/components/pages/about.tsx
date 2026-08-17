import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About RoadPulse Dispatch</h2>
          <p>
            We are a dispatch partner focused on helping owner-operators and
            small fleets run safer, more profitable, and more predictable
            operations.
          </p>
        </div>
        <div className="card-grid">
          <article className="card">
            <div className="section-image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&w=1200&q=80"
                alt="Dispatcher coordinating trucks"
                width={1200}
                height={800}
                className="section-image"
              />
            </div>
            <h3>Our Mission</h3>
            <p>
              Deliver reliable dispatching and transparent communication that
              gives drivers more earning opportunities with less stress.
            </p>
          </article>
          <article className="card">
            <div className="section-image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80"
                alt="Truck moving on route during dispatch planning"
                width={1200}
                height={800}
                className="section-image"
              />
            </div>
            <h3>Our Process</h3>
            <p>
              We match each truck with preferred lanes, negotiate directly with
              brokers, and keep every load moving through proactive follow-up.
            </p>
          </article>
          <article className="card">
            <div className="section-image-wrapper">
              <Image
                src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?auto=format&fit=crop&w=1200&q=80"
                alt="Fleet trucks representing dispatching advantages"
                width={1200}
                height={800}
                className="section-image"
              />
            </div>
            <h3>Our Advantage</h3>
            <p>
              Experienced dispatchers, 24/7 support, and organized
              documentation workflows that keep your operation audit-ready.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
