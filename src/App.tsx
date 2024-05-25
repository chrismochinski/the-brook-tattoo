import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./Header/HeaderDesktop/Header";
import { Home } from "./Home/Home";
import { useWindowWidth } from "./hooks/useWindowWidth";
import { ContactForm } from "./ContactForm/ContactForm";
import "./App.scss";
import { Footer } from "./Footer/Footer";

export const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Artists", path: "/artists" },
  { name: "FAQ", path: "/faq" },
  { name: "Reviews", path: "/reviews" },
  { name: "Contact", path: "/contact" },
];

export interface SiteNavProps {
  selectedPage: string;
  setSelectedPage: (page: string) => void;
  isTabletOrMobile: boolean;
}

function App() {
  const [selectedPage, setSelectedPage] = useState("home");

  const windowWidth = useWindowWidth();
  const isTabletOrMobile = windowWidth <= 1024;

  useEffect(() => {
    console.log(selectedPage);
  }, [selectedPage]);

  return (
    <div className="App">
      <Router>
        <Header
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTabletOrMobile={isTabletOrMobile}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          isTabletOrMobile={isTabletOrMobile}
        />
      </Router>
    </div>
  );
}

export default App;
