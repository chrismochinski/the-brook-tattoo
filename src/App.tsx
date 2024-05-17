import "./App.scss";
import { ContactForm } from "./ContactForm/ContactForm";
import { TypewriterLogo } from "./TypewriterLogo/TypewriterLogo";

function App() {
  return (
    <div className="App">
      <div className="tempHomeContainer">
        <TypewriterLogo />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
