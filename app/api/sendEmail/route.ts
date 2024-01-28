import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const body = await req.json();
  try {
    await resend.emails.send({
      from: `${process.env.FROM_EMAIL}`,
      to: `${process.env.TO_EMAIL}`,
      subject: `Hello ${body.name} thanks for book a Cuisine restaurant`,
      html: `<h1>Booking a Cuisine Restaurant from ${body.name}</h1>
            <p>Email : ${body.email}</p>
            <p>Person : ${body.person}</p>
            <p>Date : ${body.date}</p>
            <p>Time : ${body.time}</p>`,
    });

    return NextResponse.json({ message: "Send Order Book" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
