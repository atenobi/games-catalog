import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// components
import HomePage from "./components/homePage/HomePage";
import ErrorPage from "./components/errorPage/ErrorPage";
import SingIn from "./components/SingInPage/singIn/SingIn";
import JoinUs from "./components/SingInPage/joinUs/JoinUs";

function App() {
  return (
    <Router>
      <nav className="app-nav__link-container">
        <Link to="/" className="app-nav__link">
          {" "}
          DISCOVERY{" "}
        </Link>
        <Link to="/sing" className="app-nav__link">
          Sing In
        </Link>
        <Link to="/join" className="app-nav__link">
          Join Us
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sing" element={<SingIn />} />
        <Route path="/join" element={<JoinUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
