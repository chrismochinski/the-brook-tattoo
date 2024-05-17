import { useEffect, useState } from "react";
import "./ContactForm.scss";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="section contactFormContainer">
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

        <label htmlFor="concept">Concept</label>
        <p className="subLabel">(500 char max)</p>
        <textarea id="concept" name="concept" maxLength={500} required></textarea>

        <label htmlFor="artist">Artist:</label>
        <select id="artist" name="artist">
          <option value="jamesermilio01@gmail.com">Jimbo</option>
          <option value="tattoos.by.cr@gmail.com">Carlie</option>
        </select>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}
