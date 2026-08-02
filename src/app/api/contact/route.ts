import { NextResponse } from "next/server";
import { contactEmail, resend } from "@/lib/resend";
import { site } from "@/data/site";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  requestType?: string;
  topic?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ContactPayload | null;

  if (!payload) {
    return NextResponse.json({ message: "Données invalides." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, requestType, topic, message } = payload;
  const requiredFields = [firstName, lastName, email, phone, message];

  if (requiredFields.some((field) => !field || String(field).trim().length < 2)) {
    return NextResponse.json(
      { message: "Merci de compléter tous les champs du formulaire." },
      { status: 400 }
    );
  }

  if (!resend) {
    return NextResponse.json(
      { message: "La clé RESEND_API_KEY n’est pas configurée." },
      { status: 503 }
    );
  }

  await resend.emails.send({
    from: `${site.name} <onboarding@resend.dev>`,
    to: contactEmail,
    replyTo: String(email),
    subject: `${getSubjectPrefix(requestType)} - ${firstName} ${lastName}`,
    text: [
      `Type de demande : ${getRequestLabel(requestType)}`,
      topic ? `Sujet : ${topic}` : null,
      "",
      `Nom : ${lastName}`,
      `Prénom : ${firstName}`,
      `Email : ${email}`,
      `Téléphone : ${phone}`,
      "",
      "Message :",
      message
    ]
      .filter(Boolean)
      .join("\n")
  });

  return NextResponse.json({ ok: true });
}

function getSubjectPrefix(requestType?: string) {
  if (requestType === "patrimoine") {
    return "Nouvelle demande patrimoniale";
  }

  return "Nouvelle demande carrière";
}

function getRequestLabel(requestType?: string) {
  if (requestType === "patrimoine") {
    return "Gestion de patrimoine";
  }

  return "Changer de carrière";
}
