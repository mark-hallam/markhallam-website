import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { writeClient } from "@/lib/sanity";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email, source = "learn-page" } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    // Check if already subscribed (if Sanity is configured)
    if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your-project-id") {
      const existing = await writeClient.fetch(
        `*[_type == "subscriber" && email == $email][0]`,
        { email }
      );

      if (existing) {
        return NextResponse.json(
          { message: "You're already on the list!" },
          { status: 200 }
        );
      }

      // Store subscriber in Sanity
      await writeClient.create({
        _type: "subscriber",
        email,
        source,
        subscribedAt: new Date().toISOString(),
        welcomeEmailSent: false,
      });
    }

    // Send welcome email via Resend (if API key is configured)
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== "your-resend-api-key") {
      await resend.emails.send({
        from: "Mark Hallam <hello@markhallam.com.au>",
        to: email,
        subject: "Welcome — You're on the Learn to Build waitlist",
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="font-size: 24px; font-weight: 700; color: #EDEDED; margin-bottom: 16px;">You're in.</h1>
            <p style="font-size: 16px; line-height: 1.6; color: #888888;">
              Thanks for joining the Learn to Build waitlist. I'm putting together something for people who have ideas but haven't had the tools to build them — until now.
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #888888;">
              I'll be in touch when the first cohort is ready. In the meantime, check out what I'm building at <a href="https://markhallam.com.au" style="color: #3B82F6;">markhallam.com.au</a>.
            </p>
            <p style="font-size: 16px; line-height: 1.6; color: #888888; margin-top: 24px;">
              — Mark
            </p>
          </div>
        `,
      });

      // Mark welcome email as sent in Sanity
      if (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "your-project-id") {
        const subscriber = await writeClient.fetch(
          `*[_type == "subscriber" && email == $email][0]._id`,
          { email }
        );
        if (subscriber) {
          await writeClient.patch(subscriber).set({ welcomeEmailSent: true }).commit();
        }
      }
    }

    return NextResponse.json(
      { message: "You're on the list!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
