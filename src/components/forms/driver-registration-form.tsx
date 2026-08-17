"use client";

import { useActionState } from "react";
import SubmitButton from "@/components/forms/submit-button";

type FormState = { message: string; success: boolean };

const initialState: FormState = { message: "", success: false };

async function submitRegistrationForm(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const values = {
    driverName: String(formData.get("driverName") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    cdlType: String(formData.get("cdlType") ?? "").trim(),
    equipment: String(formData.get("equipment") ?? "").trim(),
    experience: String(formData.get("experience") ?? "").trim(),
    notes: String(formData.get("notes") ?? "").trim(),
  };

  const response = await fetch("/api/submit-form", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType: "registration", values }),
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
    message: data.message || "Thanks! Your registration was sent successfully.",
  };
}

export default function DriverRegistrationForm() {
  const [state, formAction] = useActionState(submitRegistrationForm, initialState);

  return (
    <form action={formAction}>
      <div className="form-grid">
        <label>
          Driver Name
          <input type="text" name="driverName" required />
        </label>
        <label>
          Email Address
          <input type="email" name="email" required />
        </label>
        <label>
          Phone Number
          <input type="tel" name="phone" required />
        </label>
        <label>
          CDL Type
          <select name="cdlType" defaultValue="">
            <option value="" disabled>
              Select CDL type
            </option>
            <option value="Class A">Class A</option>
            <option value="Class B">Class B</option>
            <option value="Class C">Class C</option>
          </select>
        </label>
        <label>
          Equipment Type
          <select name="equipment" defaultValue="">
            <option value="" disabled>
              Select equipment type
            </option>
            <option value="Dry Van">Dry Van</option>
            <option value="Reefer">Reefer</option>
            <option value="Flatbed">Flatbed</option>
            <option value="Power Only">Power Only</option>
          </select>
        </label>
        <label>
          Experience
          <select name="experience" defaultValue="">
            <option value="" disabled>
              Select experience
            </option>
            <option value="0-1 year">0-1 year</option>
            <option value="2-4 years">2-4 years</option>
            <option value="5+ years">5+ years</option>
          </select>
        </label>
        <label className="full-width">
          Preferred Lanes / Notes
          <textarea
            name="notes"
            placeholder="Mention preferred states, lane types, and availability."
          />
        </label>
      </div>
      <div className="cta-row" style={{ marginTop: "1rem" }}>
        <SubmitButton text="Submit Registration" />
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
