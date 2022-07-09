import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// pages
import HomePage from "@/pages/HomePage/HomePage";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import UserGamesPage from "@/pages/UserGamesPage/UserGamesPage";
import SingIn from "@/pages/SingInPage/SingIn";
import JoinUs from "@/pages/SingInPage/JoinUs";


// redux
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectUsers } from "@/redux/user/userSelector";

function App() {
  const user = useSelector(selectUsers);
  
  return (
    <>
    <Router>
      <nav className="app-nav__link-container">
        <Link to="/games-catalog" className="app-nav__link font-regular">
          {" "}
          DISCOVERY{" "}
        </Link>
{/* ! no forget return condition ! */}
        {!user[1] && (
          <>
            <Link to="/games-catalog/sing" className="app-nav__link font-regular">
              Sing In
            </Link>

            <Link to="/games-catalog/join" className="app-nav__link font-regular">
              Join Us
            </Link>
          </>
        )}

        {user[1] && (
          <Link to="/games-catalog/user" className="app-nav__link">
            {user[1].name}
          </Link>
        )}
      </nav>
      <Routes>
        <Route path="/games-catalog" element={<HomePage />} />
        <Route path="/games-catalog/user" element={<UserGamesPage />} />

        <Route path="/games-catalog/sing" element={<SingIn />} />
        <Route path="/games-catalog/join" element={<JoinUs />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>

    </>
    
  );
}

export default App;
