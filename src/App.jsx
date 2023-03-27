import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import MainHeader from "./components/MainHeader/MainHeader.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedInInfo = localStorage.getItem("isLoggedIn");

    if (userLoggedInInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []); // only runs once on app startup with no dependencies

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "0");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
