import "./App.scss";
import { ContactForm } from "./ContactForm/ContactForm";
import { TempHeader } from "./TempHeader/TempHeader";

function App() {
  return (
    <div className="App">
      <div className="tempHomeContainer">
        <TempHeader />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
