import nodemailer from "nodemailer";

type SupportedFormType = "contact" | "registration";

type FormPayload = {
  formType: SupportedFormType;
  values: Record<string, string>;
};

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function normalizePayload(data: unknown): FormPayload | null {
  if (!data || typeof data !== "object") {
    return null;
  }

  const { formType, values } = data as Partial<FormPayload>;

  if (
    (formType !== "contact" && formType !== "registration") ||
    !values ||
    typeof values !== "object"
  ) {
    return null;
  }

  const normalizedValues = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, String(value ?? "").trim()])
  );

  return { formType, values: normalizedValues };
}

function buildHtml(title: string, values: Record<string, string>): string {
  const rows = Object.entries(values)
    .map(
      ([key, value]) =>
        `<tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;text-transform:capitalize;">${key}</td><td style="padding:8px;border:1px solid #e2e8f0;">${value || "-"}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#0f172a;">
      <h2 style="margin:0 0 12px;">${title}</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const payload = normalizePayload(await request.json());

    if (!payload) {
      return Response.json(
        { success: false, message: "Invalid form payload." },
        { status: 400 }
      );
    }

    const host = requiredEnv("SMTP_HOST");
    const port = Number(process.env.SMTP_PORT || "587");
    const user = requiredEnv("SMTP_USER");
    const pass = requiredEnv("SMTP_PASS");
    const mailTo = process.env.MAIL_TO || "laibash3225@gmail.com";

    const transport = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subjectPrefix =
      payload.formType === "contact" ? "Contact / Quote Request" : "Driver Registration";

    await transport.sendMail({
      from: `"RoadPulse Website" <${user}>`,
      to: mailTo,
      replyTo: payload.values.email || user,
      subject: `${subjectPrefix} - ${new Date().toLocaleString()}`,
      html: buildHtml(subjectPrefix, payload.values),
      text: Object.entries(payload.values)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\n"),
    });

    return Response.json({ success: true, message: "Form submitted successfully." });
  } catch (error) {
    console.error("submit-form error", error);

    const smtpError = error as { code?: string };
    const message =
      error instanceof Error && error.message.includes("Missing required environment variable")
        ? "Email service is not configured yet. Add SMTP_HOST, SMTP_USER, SMTP_PASS in .env.local and restart."
        : smtpError.code === "EAUTH"
          ? "Email login failed. Use SMTP_USER as full Gmail and SMTP_PASS as Gmail App Password."
          : "Unable to send your form right now.";

    return Response.json({ success: false, message }, { status: 500 });
  }
}
