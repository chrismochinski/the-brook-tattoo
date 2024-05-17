import { useState } from "react";
import "./ContactForm.scss";

type FormData = {
  name: string;
  email: string;
  phone: string;
  concept: string;
  artist: string;
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    concept: "",
    artist: "",
  });

  // changing fields
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const recipientEmail = determineRecipient(formData.artist);
    console.log("Sending to:", recipientEmail);
    console.log("Form data:", formData);

    // important //revisit //idea submit data to the backend or use Netlify functions to handle email
  };

  // who does email go to?
  const determineRecipient = (artist: string): string => {
    if (artist === "jamesermilio01@gmail.com" || artist === "tattoos.by.cr@gmail.com") {
      return artist;
    } else {
      // if user selects "Not Sure", value should be BOTH emails
      return "jamesermilio01@gmail.com, tattoos.by.cr@gmail.com";
    }
  };

  return (
    <div className="section contactFormContainer mt-4">
      <form
        className="column contactForm"
        name="contact"
        method="POST"
        data-netlify="true"
        action="/success">
        <input type="hidden" name="form-name" value="contact" />

        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required />

        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />

        <label htmlFor="phone">Phone</label>
        <input id="phone" type="tel" name="phone" />

        <label className="conceptLabel" htmlFor="concept">
          Concept <span className="subLabel">(500 char)</span>
        </label>

        <textarea id="concept" name="concept" maxLength={500} required></textarea>

        <select id="artist" name="artist" defaultValue="ARTIST">
          <option value="jamesermilio01@gmail.com">Jimbo</option>
          <option value="tattoos.by.cr@gmail.com">Carlie</option>
          {/* if user selects "Not Sure", value should be BOTH emails somehow */}
          <option value="tattoos.by.cr@gmail.com">Not Sure</option>
        </select>

        <div
          className="submitButtonContainer"
          tabIndex={0}
          role="button"
          onClick={handleSubmit}
          onKeyPress={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              handleSubmit(event);
            }
          }}>
          <div className="submitButton">
            <h4>Send</h4>
          </div>
        </div>
      </form>
    </div>
  );
}
