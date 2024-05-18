import { useState } from "react";
import "./ContactForm.scss";
import JimboMain from "../../src/Images/jimbo-masked.png";
import CarlieMain from "../../src/Images/carlie-masked.png";

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
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    concept: "",
    artist: "",
  });
  const [characterCount, setCharacterCount] = useState<number>(500);
  const [formSuccess, setFormSuccess] = useState<boolean>(false);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Required" : "";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid";
      case "phone":
        return /^\d{10}$/.test(value) ? "" : "Required";
      case "concept":
        return value.trim() === "" ? "Required" : "";
      case "artist":
        return value === "" ? "REQUIRED" : "";
      default:
        return "";
    }
  };

  // changing fields
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === "concept") setCharacterCount(500 - value.length); // update remaining concept characters
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Validate all fields before submission
    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      concept: validateField("concept", formData.concept),
      artist: validateField("artist", formData.artist),
    };
    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error !== "")) {
      return; // Exit if there are validation errors
    }

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
        setFormSuccess(true);
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

  const handleGoBack = () => {
    setFormSuccess(false);
    clearFormData();
  };

  return (
    <div className="section contactFormContainer mt-2">
      <div className="formWidthSetter">
        <div className={`successMessage ${formSuccess && "show"}`}>
          <h2>Success!</h2>
          <p>We'll be in touch soon.</p>

          <div className="backButtonContainer" tabIndex={0} role="button" onClick={handleGoBack}>
            <div className="backButton">
              <h4>Go Back</h4>
            </div>
          </div>
        </div>
        <form
          className={`column contactForm ${formSuccess && "hide"}`}
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

          <label htmlFor="name">Name {errors.name && <p className="error">{errors.name}</p>}</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
          />

          <label htmlFor="email">
            Email {errors.email && <p className="error">{errors.email}</p>}
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
          />

          <label htmlFor="phone">
            Phone {errors.phone && <p className="error">{errors.phone}</p>}
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <label className="conceptLabel" htmlFor="concept">
            Concept{" "}
            <span className={`subLabel ${characterCount < 500 && "show"}`}>({characterCount})</span>
            {errors.concept && <p className="error">{errors.concept}</p>}
          </label>
          <textarea
            id="concept"
            name="concept"
            value={formData.concept}
            maxLength={500}
            required
            onChange={handleChange}></textarea>

          <div className="radioContainer">
            <label className="artistLabel" htmlFor="artist">
              Artist{" "}
              <span className={`subLabel ${characterCount < 500 && "show"}`}>
                ({characterCount})
              </span>
              {errors.concept && <p className="error">{errors.artist}</p>}
            </label>
            <div className="radioWrapper">
              <input type="radio" id="Jimbo" name="artist" value="Jimbo" onChange={handleChange} />
              <label className="radioLabel" htmlFor="Jimbo">
                Jimbo
              </label>
            </div>
            <div className="radioWrapper">
              <input
                type="radio"
                id="Carlie"
                name="artist"
                value="Carlie"
                onChange={handleChange}
              />
              <label className="radioLabel" htmlFor="Carlie">
                Carlie
              </label>
            </div>
            <div className="radioWrapper">
              <input
                type="radio"
                id="Not Sure"
                name="artist"
                value="Not Sure"
                onChange={handleChange}
              />
              <label className="radioLabel" htmlFor="Not Sure">
                Not Sure
              </label>
            </div>
          </div>

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
          <div
            className={`artistImageWrapper  ${
              formData.artist === "Jimbo" || formData.artist === "Carlie" ? "show" : ""
            }`}>
            {/* if user selects "Jimbo," image goes from display none to show with src JimboMain, same for Carly and CarlyMain */}
            <img
              className={`artistImage`}
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
    </div>
  );
}
