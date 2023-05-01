import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Gallery from "./pages/gallery";

function App() {
  return (
    <>
      <Navbar />

      {/* <Gallery /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
