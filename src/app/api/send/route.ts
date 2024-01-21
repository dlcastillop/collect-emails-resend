import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const email = body.email;

  try {
    const data = await resend.contacts.create({
      email,
      audienceId: "e90f76c0-1d6c-4be9-a1d1-d49416c5ec2b",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
