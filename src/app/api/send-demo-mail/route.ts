import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const {
      firstName,
      lastName,
      email,
      company,
      region,
      source,
    } = await req.json();

    // Validation
    if (!firstName || !lastName || !email || !company || !region) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* ===============================
       1️⃣ ADMIN EMAIL (YOU)
    =============================== */
    await transporter.sendMail({
      from: `"Website Demo Request" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `📩 Demo Request from ${firstName} ${lastName}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Message:</strong></p>
        <p>${source || "N/A"}</p>
      `,
    });

    await transporter.sendMail({
      from: `"Perfect Engineers" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting us",
      html: `
        <p>Hi ${firstName},</p>
        <p>
          Thank you for contacting <strong>Perfect Engineers</strong>.
          We have received your message and our team will get back to you shortly.
        </p>
        <br />
        <p>Best regards,</p>
        <p><strong>Perfect Engineers Team</strong></p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail Error:", error);
    return NextResponse.json(
      { message: "Email sending failed" },
      { status: 500 }
    );
  }
}
