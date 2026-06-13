import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // If SMTP configuration is provided, attempt to send an email via nodemailer.
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO || process.env.SMTP_USER;

    if (smtpHost && smtpUser && smtpPass && contactTo) {
      try {
        // Dynamically import nodemailer so the app doesn't crash if it's not installed.
        // To enable sending, install nodemailer and set SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_TO in your environment.
        // Example (development):
        // SMTP_HOST=smtp.gmail.com
        // SMTP_USER=your@gmail.com
        // SMTP_PASS=app-password
        // CONTACT_TO=recipient@example.com
        // npm install nodemailer
        // See message returned when nodemailer isn't available.
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const nodemailer = require("nodemailer");

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: Number(process.env.SMTP_PORT) || 587,
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: smtpUser,
          to: contactTo,
          subject: `Contact form submission from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });

        return new Response(JSON.stringify({ ok: true }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      } catch (err: any) {
        console.error("Failed to send email:", err);
        return new Response(JSON.stringify({ error: "Failed to send email." }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    // If SMTP is not configured, return a helpful message explaining next steps.
    return new Response(
      JSON.stringify({
        error:
          "Email sending is not configured on the server. To enable email sending, install 'nodemailer' and set SMTP_HOST, SMTP_USER, SMTP_PASS, and CONTACT_TO environment variables. Alternatively, configure a 3rd-party service (Formspree, Netlify Forms) and point the form there.",
      }),
      {
        status: 501,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
