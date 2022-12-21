import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

//scss files
import "./Styles/App.scss";
import "./Styles/header.scss";
import "./Styles/home.scss";
import "./Styles/footer.scss";
import "./Styles/contact.scss";
import "./Styles/mediaquery.scss";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<div>Sorry page not avaliable</div>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
export default App;