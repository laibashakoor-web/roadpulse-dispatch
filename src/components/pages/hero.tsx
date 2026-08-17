import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Reliable Truck Dispatching</span>
          <h1>Keep your trucks moving with smart dispatch support.</h1>
          <p>
            RoadPulse Dispatch helps owner-operators and small fleets maximize
            miles, reduce deadhead, and stay organized with professional
            dispatching and back-office support.
          </p>
          <div className="cta-row">
            <Link href="/#contact" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <Link href="/#driver-registration" className="btn btn-secondary">
              Register as a Driver
            </Link>
          </div>
        </div>
        <aside className="highlight-card">
          <div className="section-image-wrapper">
            <Image
              src="/images/truck-dispatch-home.jpg"
              alt="Truck dispatching vehicle on highway"
              width={1200}
              height={800}
              className="section-image"
              priority
            />
          </div>
          <h3>Why carriers choose us</h3>
          <ul className="clean-list">
            <li>High-paying load booking from trusted brokers</li>
            <li>24/7 dispatch support with real-time updates</li>
            <li>Route optimization to save fuel and time</li>
            <li>Accurate paperwork and detention follow-up</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
