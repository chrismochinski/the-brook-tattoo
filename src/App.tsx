import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Header/HeaderDesktop/Header";
import { Home } from "./Home/Home";
import { ContactForm } from "./ContactForm/ContactForm";
import "./App.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </Router>
  );
}

export default App;
