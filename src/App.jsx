import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// components
import HomePage from "./components/homePage/HomePage";
import ErrorPage from "./components/errorPage/ErrorPage";
import SingIn from "./components/SingInPage/singIn/SingIn";
import JoinUs from "./components/SingInPage/joinUs/JoinUs";
import UserGamesPage from "./components/userGamesPage/UserGamesPage";

// redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUsers } from "./redux/selectors";

function App() {
  const user = useSelector(selectUsers);
  
  return (
    <>
    <Router>
      <nav className="app-nav__link-container">
        <Link to="/" className="app-nav__link font-regular">
          {" "}
          DISCOVERY{" "}
        </Link>

        {!user[1] && (
          <>
            <Link to="/sing" className="app-nav__link font-regular">
              Sing In
            </Link>

            <Link to="/join" className="app-nav__link font-regular">
              Join Us
            </Link>
          </>
        )}

        {user[1] && (
          <Link to="/user" className="app-nav__link">
            {user[1].name}
          </Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserGamesPage />} />

        <Route path="/sing" element={<SingIn />} />
        <Route path="/join" element={<JoinUs />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

    </>
    
  );
}

export default App;
