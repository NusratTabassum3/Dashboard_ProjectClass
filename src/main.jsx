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
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontEndLayout />}>
          <Route path="/" element={<Home />}></Route>
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
