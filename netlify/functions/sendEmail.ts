import sgMail from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY;
if (!apiKey) {
  throw new Error("SENDGRID_API_KEY is not defined");
}
sgMail.setApiKey(apiKey);

exports.handler = async (event: any) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Method Not Allowed" }),
    };
  }

  const { name, email, phone, concept, artist } = JSON.parse(event.body);
  const subject = `The Brook Contact Submission from ${name}`;
  let recipientEmail = determineRecipient(artist);

  const msg = {
    to: recipientEmail,
    from: {
      email: "workflow@wreckshopmedia.com",
      name: "Wreck Shop - Workflow",
    },
    subject: subject,
    text: `Hi ${artist}!\n\nYou have received a form submission!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nConcept: ${concept}`,
    html: `<p>Hi ${artist}!</p><p>You have received a form submission!</p><strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Phone:</strong> ${phone}<br><strong>Concept:</strong> ${concept}`,
  };

  console.log("Sending email to:", recipientEmail);
  console.log("Email content:", { subject, name, email, phone, concept });

  try {
    await sgMail.send(msg);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: `Email sent successfully to ${recipientEmail}!` }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Failed to send email" }),
    };
  }
};

function determineRecipient(artist: string): string {
  switch (artist) {
    case "Jimbo":
      return "cmochinski@gmail.com";
    case "Carlie":
      return "mo@readygoes.com";
    case "Not Sure":
      return "cmochinski@gmail.com, mo@readygoes.com";
    default:
      return "mo@chrismochinski.com";
  }
}
