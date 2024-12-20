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
import Dashboard from "./admin";
import PendingReviews from "./admin/components/PendingReviews";
import PlaceHer from "./admin/components/PlaceHer";
import Interviews from "./admin/components/Interviews";
import Approved from "./admin/components/Approved";
import Declined from "./admin/components/Declined";
import Allblogs from "./admin/components/Allblogs";
import Newblog from "./admin/components/Newblog";
import Categories from "./admin/components/Categories";
import Tags from "./admin/components/Tags";
import Overview from "./admin/components/Overview";
import Application from "./admin/applications";
import AdminBlogs from "./admin/blogadmin";
import { AdminLogin } from "./adminLogin";
import { FormProvider } from "./contexts/FormContext";
import { ActiveProvider } from "./contexts/ActiveContext";
import Start from "./admin/components/Start";
import End from "./admin/components/End";

// import Success from "./pages/Success/Success";

//context
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

  const pathname = window.location.pathname;

  return (
    <BrowserRouter>
      <ActiveProvider>
        {donate ? <Modal handleDesktopDonate={handleDesktopDonate} /> : ""}
        {pathname.startsWith("/admin") ? (
          ""
        ) : (
          <Navbar
            handleDonate={handleDonate}
            handleNav={handleNav}
            handleDesktopDonate={handleDesktopDonate}
            nav={nav}
          />
        )}
        {}
        <FormProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/internship" element={<Internship />} />
          </Routes>
        </FormProvider>
        <Routes>
          {/* <Route path="/success" element={<Success />} /> */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Dashboard />}>
            <Route path="/admin" element={<Overview />} />
            <Route path="applications" element={<Application />}>
              <Route path="pending" element={<PendingReviews />} />
              <Route path="placeher" element={<PlaceHer />} />
              <Route path="interview" element={<Interviews />} />
              <Route path="approved" element={<Approved />} />
              <Route path="started" element={<Start />} />
              <Route path="ended" element={<End />} />
              <Route path="declined" element={<Declined />} />
            </Route>
            <Route path="/admin/blogadmin" element={<AdminBlogs />}>
              <Route path="/admin/blogadmin/all" element={<Allblogs />} />
              <Route path="/admin/blogadmin/new" element={<Newblog />} />
              <Route
                path="/admin/blogadmin/categories"
                element={<Categories />}
              />
              <Route path="/admin/blogadmin/tags" element={<Tags />} />
            </Route>
          </Route>
        </Routes>
        {pathname.includes("/admin") ? "" : <Footer />}
      </ActiveProvider>
    </BrowserRouter>
  );
}

export default App;
