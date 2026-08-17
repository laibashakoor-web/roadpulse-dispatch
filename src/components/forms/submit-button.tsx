"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? "Sending..." : text}
    </button>
  );
}
