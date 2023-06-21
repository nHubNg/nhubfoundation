import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Programs from "./pages/programs";
import Blogs from "./pages/blogs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Courses from "./pages/courses/Courses";
import Modal from "./components/Modal";
import { useState } from "react";
import Internship from "./pages/internship";
// import Success from "./pages/Success/Success";

function App() {
  const [donate, setDonate] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    !nav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  const handleDonate = () => {
    setDonate(!donate);
    setNav(!nav);
    !nav || !donate
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  const handleDesktopDonate = () => {
    setDonate(!donate);
    !donate
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  return (
    <>
      <BrowserRouter>
        {donate ? <Modal handleDesktopDonate={handleDesktopDonate} /> : ""}
        <Navbar
          handleDonate={handleDonate}
          handleNav={handleNav}
          handleDesktopDonate={handleDesktopDonate}
          nav={nav}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/internship" element={<Internship />} />
          {/* <Route path="/success" element={<Success />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
