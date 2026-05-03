import { NextResponse } from "next/server";
import { createContactSubmission } from "@/lib/strapi";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const name = payload.name?.trim();
    const email = payload.email?.trim();
    const message = payload.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    await createContactSubmission({ name, email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Unable to save contact submission.", error);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}
