import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Accessibility from './pages/Accessibility';
import TermsAndConditions from './pages/Terms&Conditions';
import Donate from './pages/Donate';

const formatTitle = (path) => {
  if (path === "/") return "HOME - TURKANA TECH YOUTHS HUB";

  const words = path.replace("/", "").replace(/-/g, " ").split(" ");

  const capitalized = words.map(word => word.toUpperCase());

  return `${capitalized.join(" ")} - TURKANA TECH YOUTHS HUB`;
};

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = formatTitle(location.pathname);
  }, [location.pathname]);

  return null; 
};

function App() {
  return (
    <Router>
      <PageTitleUpdater />
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
