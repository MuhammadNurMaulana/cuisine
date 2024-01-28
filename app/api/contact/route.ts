import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = await req.json();
  try {
    await resend.emails.send({
      from: `${process.env.FROM_EMAIL}`,
      to: `${process.env.TO_EMAIL}`,
      subject: `Contact us a Cuisine Restaurant from ${body.name} `,
      html: `<h1>Name : ${body.name}</h1>
            <p>Email : ${body.email}</p>
            <p>Subject : ${body.subject}</p>
            <p>Message : ${body.message}</p>`,
    });

    return NextResponse.json({ message: "Send Contact Us" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
