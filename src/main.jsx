import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/index.jsx";
import About from "./pages/About.jsx";
import Books from "./pages/Books.jsx";
import Contact from "./pages/Contact.jsx";
import FrontEndLayout from "./layout/FrontEndLayout.jsx";
import ExploreBook from "./pages/ExploreBook.jsx";
import AboutBooks from "./pages/AboutBooks.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontEndLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ExploreBook />}></Route>
          <Route path="aboutbook" element={<AboutBooks />}></Route>
        </Route>

        <Route path="/admin" element={<Layout />}>
          <Route path="about" element={<About />}></Route>
          <Route path="books" element={<Books />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
