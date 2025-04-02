import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {  // ❌ Remove ": Request"
    try {
        const formData = await req.formData();

        // Extract form data
        const name = formData.get("name");
        const email = formData.get("email");
        const phone = formData.get("phone");
        const artistName = formData.get("artist");
        const genre = formData.get("genre");
        const eventType = formData.get("event_type");
        const startDate = formData.get("start_date");
        const endDate = formData.get("end_date");
        const description = formData.get("description");
        const file = formData.get("file");
        const serviceType = formData.get("service_type");

        // Configure SendGrid Transporter
        const transporter = nodemailer.createTransport({
            host: "smtp.sendgrid.net",
            port: 587,
            auth: {
                user: "apikey",
                pass: process.env.SENDGRID_API_KEY,
            },
        });

        // Dynamic Email Subject based on service type
        const emailSubject = `New ${serviceType} Service Request`;

        // Create email content
        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: emailSubject,
            text: `
                Service Type: ${serviceType}
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Artist Name: ${artistName}
                Genre: ${genre}
                Event Type: ${eventType}
                Start Date: ${startDate}
                End Date: ${endDate}
                Description: ${description}
            `,
            attachments: [],
        };

        // Attach file if exists
        if (file) {
            const fileBuffer = Buffer.from(await file.arrayBuffer());
            mailOptions.attachments.push({
                filename: file.name,
                content: fileBuffer,
            });
        }

        // Send Email
        await transporter.sendMail(mailOptions);
        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Email sending failed:", error);
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }
}
