import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Basic Validation
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, error: "Missing fields" }, { status: 400 });
    }

    // Sanitize message to prevent HTML injection in your email
    const cleanMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const data = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: ['shiwangiupadhyay332@gmail.com'],
      subject: `[Portfolio Inquiry] from ${name}`,
      html: `
        <div style="background-color: #f4f4f5; padding: 40px 20px; font-family: 'Inter', -apple-system, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.03); border: 1px solid #e4e4e7;">
            
            <div style="background-color: #09090b; padding: 32px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.02em;">New Inquiry</h1>
              <div style="height: 2px; width: 40px; background-color: #eab308; margin: 12px auto 0;"></div>
            </div>

            <div style="padding: 40px;">
              <div style="margin-bottom: 32px;">
                <p style="text-transform: uppercase; font-size: 11px; font-weight: 800; color: #a1a1aa; margin-bottom: 8px; letter-spacing: 0.1em;">Contact Information</p>
                <p style="margin: 0; font-size: 18px; font-weight: 700; color: #09090b;">${name}</p>
                <p style="margin: 4px 0 0 0; color: #71717a; font-size: 14px;">${email}</p>
              </div>

              <div style="border-top: 1px solid #f4f4f5; padding-top: 32px; margin-bottom: 32px;">
                <p style="text-transform: uppercase; font-size: 11px; font-weight: 800; color: #a1a1aa; margin-bottom: 12px; letter-spacing: 0.1em;">Communication Received</p>
                <div style="background-color: #fafafa; padding: 24px; border-radius: 12px; color: #27272a; font-size: 15px; line-height: 1.7; border: 1px solid #f1f1f4;">
                  ${cleanMessage}
                </div>
              </div>

              <div style="text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #09090b; color: #ffffff; padding: 16px 32px; border-radius: 12px; text-decoration: none; font-weight: 600; font-size: 14px; transition: background-color 0.2s;">
                  Compose Direct Reply
                </a>
              </div>
            </div>

            <div style="background-color: #fafafa; padding: 24px; text-align: center; border-top: 1px solid #f4f4f5;">
              <p style="color: #a1a1aa; font-size: 11px; margin: 0; font-weight: 500;">
                System generated from shiwangi.vercel.app &bull; 2026
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend Error:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}