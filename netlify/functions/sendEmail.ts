import fetch from 'node-fetch';

exports.handler = async (event: any) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const { name, email, phone, concept, artist } = JSON.parse(event.body);
  const subject = `The Brook Contact Submission from ${name}`;

  // Determine recipient based on the artist selection
  let recipientEmail;
  switch (artist) {
    case "Jimbo":
      //   recipientEmail = "jamesermilio01@gmail.com"; //revisit uncomment
      recipientEmail = "cmochinski@gmail.com"; //deletelater
      break;
    case "Carlie":
      //   recipientEmail = "tattoos.by.cr@gmail.com"; //revisit uncomment
      recipientEmail = "mo@readygoes.com"; //deletelater
      break;
    case "Not Sure":
      //   recipientEmail = "jamesermilio01@gmail.com, tattoos.by.cr@gmail.com"; //revisit uncomment
      recipientEmail = "cmochinski@gmail.com, mo@readygoes.com"; //deletelater
      break;
    default:
      recipientEmail = "mo@chrismochinski.com"; // default or error handling
  }

  // Simulate an email sending
  console.log("Sending email to:", recipientEmail);
  console.log("Email content:", { subject, name, email, phone, concept });

  // Here you would use an email API to actually send the email
  // Example using fetch to send through a mail API
  const response = await fetch("https://api.emailservice.com/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer your-api-token",
    },
    body: JSON.stringify({
      to: recipientEmail,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nConcept: ${concept}`,
    }),
  });

  if (!response.ok) {
    return { statusCode: response.status, body: "Failed to send email" };
  }

  return {
    statusCode: 200,
    body: "Email sent successfully!",
  };
};
