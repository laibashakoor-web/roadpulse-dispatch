import ContactForm from "@/components/forms/contact-form";

export default function ContactSection() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact / Get Quote</h2>
          <p>
            Share your fleet details and preferred lanes. Our team will prepare
            a custom dispatching quote within one business day.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
