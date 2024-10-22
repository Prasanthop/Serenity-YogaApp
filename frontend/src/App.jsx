import React from "react";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Contact from "./page/Contact";
import Service from "./page/Service";
import Login from "./page/Login";
import SignUp from "./page/Signup";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
