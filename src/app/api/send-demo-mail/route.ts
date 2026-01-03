import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      company,
      region,
      source,
    } = body;

    // BASIC VALIDATION (server-side safety)
    if (!firstName || !lastName || !email || !company || !region) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your gmail
        pass: process.env.EMAIL_PASS, // app password
      },
    });

    await transporter.sendMail({
      from: `"Demo Form" <${process.env.EMAIL_USER}>`,
      to: "vinit.modi8722@gmail.com",
      subject: "New Demo Form Submission",
      html: `
        <h2>New Demo Request</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Message:</strong> ${source || "N/A"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Email sending failed" },
      { status: 500 }
    );
  }
}
