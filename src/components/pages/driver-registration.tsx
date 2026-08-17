import DriverRegistrationForm from "@/components/forms/driver-registration-form";

export default function DriverRegistrationSection() {
  return (
    <section className="section" id="driver-registration">
      <div className="container">
        <div className="section-title">
          <h2>Driver Registration Form</h2>
          <p>
            Join RoadPulse Dispatch and let our team handle load booking,
            paperwork, and day-to-day dispatch communication.
          </p>
        </div>
        <DriverRegistrationForm />

        <section className="section faq">
          <div className="section-title">
            <h2>Common Questions</h2>
          </div>
          <details>
            <summary>How soon can dispatching begin after registration?</summary>
            <p>
              Once your details and required documents are verified, we can
              begin dispatching within 24-48 hours.
            </p>
          </details>
          <details>
            <summary>Do you work with new authorities?</summary>
            <p>
              Yes. We support new and established MC authorities and guide you
              through broker onboarding requirements.
            </p>
          </details>
          <details>
            <summary>Is there a long-term contract?</summary>
            <p>
              No long-term lock-in. Our plans are flexible and designed around
              your current operational goals.
            </p>
          </details>
        </section>
      </div>
    </section>
  );
}
