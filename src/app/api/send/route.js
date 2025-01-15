import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
    try {
        const body = await req.json(); // Parsing JSON dari request body
        const { email, subject, message } = body;

        // Kirim email menggunakan Resend
        const data = await resend.emails.send({
            from: fromEmail,
            to: ["wildanfariz99@gmail.com", email], // Email tujuan
            subject: subject,
            html: `
        <div>
          <h1>${subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>${message}</p>
        </div>
      `, // Konten dalam bentuk HTML string
        });

        return new Response(
            JSON.stringify({ message: "Email sent successfully!", data }),
            { status: 200, headers: { 'Content-Type': 'application/json' } }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({ error: "Failed to send email." }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}
