"use client";

import { useActionState } from "react";
import SubmitButton from "@/components/forms/submit-button";

type FormState = { message: string; success: boolean };

const initialState: FormState = { message: "", success: false };

async function submitContactForm(_prevState: FormState, formData: FormData): Promise<FormState> {
  const values = {
    name: String(formData.get("name") ?? "").trim(),
    company: String(formData.get("company") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    fleetSize: String(formData.get("fleetSize") ?? "").trim(),
    lanes: String(formData.get("lanes") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };

  const response = await fetch("/api/submit-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType: "contact", values }),
  });
  const data = (await response.json()) as { message?: string };

  if (!response.ok) {
    return {
      success: false,
      message: data.message || "Submission failed. Please try again.",
    };
  }

  return {
    success: true,
    message: data.message || "Thanks! Your request was sent successfully.",
  };
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction}>
      <div className="form-grid">
        <label>
          Full Name
          <input type="text" name="name" placeholder="Enter full name" required />
        </label>
        <label>
          Company Name
          <input type="text" name="company" placeholder="Your company" />
        </label>
        <label>
          Email Address
          <input type="email" name="email" placeholder="you@email.com" required />
        </label>
        <label>
          Phone Number
          <input type="tel" name="phone" placeholder="+1 (555) 000-0000" required />
        </label>
        <label>
          Number of Trucks
          <select name="fleetSize" defaultValue="">
            <option value="" disabled>
              Select fleet size
            </option>
            <option value="1">1 Truck</option>
            <option value="2-5">2-5 Trucks</option>
            <option value="6-15">6-15 Trucks</option>
            <option value="15+">15+ Trucks</option>
          </select>
        </label>
        <label>
          Preferred Lanes
          <input type="text" name="lanes" placeholder="e.g. TX to CA, Midwest regional" />
        </label>
        <label className="full-width">
          Message
          <textarea
            name="message"
            placeholder="Tell us about your dispatching goals and current challenges."
          />
        </label>
      </div>
      <div className="cta-row" style={{ marginTop: "1rem" }}>
        <SubmitButton text="Request Quote" />
      </div>
      <p
        className={`form-message ${state.success ? "is-success" : "is-error"}`}
        aria-live="polite"
      >
        {state.message}
      </p>
    </form>
  );
}
