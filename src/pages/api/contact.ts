import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, company, region, message } = req.body;

  // Create Transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com', // Default to Gmail if not set
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Send Email
    await transporter.sendMail({
      from: `"Perfect Engineers Website" <${process.env.SMTP_USER}>`, // Sender address
      to: "perfectengg_1986@yahoo.co.in", // List of receivers
      subject: `New Demo Request from ${firstName} ${lastName}`, // Subject line
      text: `
        New Demo Request Received:
        
        Name: ${firstName} ${lastName}
        Email: ${email}
        Company: ${company}
        Region: ${region}
        
        Message:
        ${message}
      `, // plain text body
      html: `
        <h3>New Demo Request Received</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Region:</strong> ${region}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `, // html body
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error: error instanceof Error ? error.message : 'Unknown error' });
  }
}
