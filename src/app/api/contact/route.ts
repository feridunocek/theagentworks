import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, phone, department, message } = await req.json();

        // Check if environment variables are set
        if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
            console.error('SMTP credentials are missing');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email content
        const mailOptions = {
            from: `"${name}" <${process.env.SMTP_USER}>`, // Sender address (must be the authenticated user for Gmail)
            to: process.env.SMTP_USER, // Send to yourself
            replyTo: email, // Allow reply to the user's email
            subject: `Yeni İletişim Formu: ${name} - ${department}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
                    <h2 style="color: #333; text-align: center; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">Yeni İletişim Mesajı</h2>
                    
                    <div style="margin-top: 20px;">
                        <p style="font-size: 16px; color: #555;"><strong>Gönderen:</strong> ${name}</p>
                        <p style="font-size: 16px; color: #555;"><strong>E-posta:</strong> <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></p>
                        <p style="font-size: 16px; color: #555;"><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
                        <p style="font-size: 16px; color: #555;"><strong>Departman:</strong> ${department}</p>
                    </div>

                    <div style="margin-top: 20px; background-color: #fff; padding: 15px; border-radius: 6px; border-left: 4px solid #0ea5e9;">
                        <p style="font-size: 16px; color: #333; margin: 0;"><strong>Mesaj:</strong></p>
                        <p style="font-size: 15px; color: #666; line-height: 1.6; margin-top: 10px;">${message}</p>
                    </div>

                    <div style="margin-top: 30px; text-align: center; font-size: 12px; color: #999;">
                        <p>Bu mesaj AgentWorks iletişim formundan gönderilmiştir.</p>
                    </div>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
