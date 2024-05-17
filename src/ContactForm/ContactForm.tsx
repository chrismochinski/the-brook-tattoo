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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          concept: formData.concept,
          artist: formData.artist,
        }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Success:", result);
        // Handle success (e.g., showing a success message)
      } else {
        throw new Error(result.error || "Failed to send email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
    clearFormData();
  };

  const clearFormData = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      concept: "",
      artist: "",
    });
  };

  return (
    <div className="section contactFormContainer mt-2">
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
            data-remove-prefix
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

            <div
              className={`artistImageWrapper  ${
                formData.artist === "Jimbo" || formData.artist === "Carlie" ? "show" : ""
              }`}>
              {/* if user selects "Jimbo," image goes from display none to show with src JimboMain, same for Carly and CarlyMain */}
              <img
                className="artistImage"
                src={
                  formData.artist === "Jimbo"
                    ? JimboMain
                    : formData.artist === "Carlie"
                    ? CarlieMain
                    : ""
                }
                alt={formData.artist}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
