import { NextResponse } from 'next/server';
import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Walidacja
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Wszystkie pola są wymagane' },
        { status: 400 }
      );
    }

    // Wysłanie maila przez Resend
    const data = await resend.emails.send({
      from: 'Formularz Kontaktowy <onboarding@resend.dev>', // Zmień później na swoją domenę
      to: ['jakub.gugulski1@gmail.com'], 
      subject: `Nowa wiadomość od ${name}`,
      html: `
        <h2>Nowa wiadomość z formularza kontaktowego</h2>
        <p><strong>Od:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Błąd wysyłania emaila:', error);
    return NextResponse.json(
      { error: 'Nie udało się wysłać wiadomości' },
      { status: 500 }
    );
  }
}