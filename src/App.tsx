import "./App.scss";
import { ContactForm } from "./ContactForm/ContactForm";
import { TempHeader } from "./TempHeader/TempHeader";

function App() {
  return (
    <div className="App">
      <div className="tempHomeContainer">
        <TempHeader />
        <p className="underConstructionText">
          Our new site is <strong>under construction</strong>. For the time being, please get in touch with us via
          the form below.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
