import { useState } from "react";
import "./ContactForm.scss";
import JimboMain from "../../src/Images/jimbo-main.jpeg";
import CarlieMain from "../../src/Images/carlie-main.jpeg";

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

    setFormData({
      name: "",
      email: "",
      phone: "",
      concept: "",
      artist: "",
    });
  };

  // who does email go to?
  const determineRecipient = (artist: string): string => {
    if (artist === "Jimbo") {
      //   return "jamesermilio01@gmail.com"; //revisit uncomment
      return "cmochinski@gmail.com"; //deletelater
    } else if (artist === "Carlie") {
      //   return "tattoos.by.cr@gmail.com"; //revisit uncomment
      return "mo@readygoes.com"; //deletelater
    } else {
      // if user selects "Not Sure", value should be BOTH emails
      //   return "jamesermilio01@gmail.com, tattoos.by.cr@gmail.com"; //revisit uncomment
      return "cmochinski@gmail.com, mo@readygoes.com"; //deletelater
    }
  };

  return (
    <div className="section contactFormContainer mt-4">
      <div className="formWidthSetter">
        <form
          className="column contactForm"
          name="contact"
          method="POST"
          data-netlify="true"
          action="/success">
          <input
            type="hidden"
            name="subject"
            data-remove-prefix // revisit
            value={`The Brook Contact Submission from ${formData.name}`}
          />
          
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />

          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label className="conceptLabel" htmlFor="concept">
            Concept <span className="subLabel">(500 char)</span>
          </label>
          <textarea
            id="concept"
            name="concept"
            value={formData.concept}
            maxLength={500}
            required
            onChange={handleChange}></textarea>

          <select
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required>
            <option value="" disabled>
              ARTIST
            </option>
            <option value="Jimbo">Jimbo</option>
            <option value="Carlie">Carlie</option>
            <option value="Not Sure">Not Sure</option>
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
    </div>
  );
}
