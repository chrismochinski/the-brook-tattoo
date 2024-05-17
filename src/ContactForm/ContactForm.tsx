import { useState } from "react";
import "./ContactForm.scss";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [concept, setConcept] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target.form;
    form.submit();
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
          <option value="Artist" disabled selected>
            ARTIST
          </option>
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
