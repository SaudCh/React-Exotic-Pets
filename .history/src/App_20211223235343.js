import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Shared/header.jsx";
import CRouter from "./Routes/Router";
import Footer from "./components/Shared/footer";
import { AuthContext } from "./components/context/auth-context";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

function App() {
  // const history = useHistory()
  const [Fav, setFav] = useState([]);
  const addFavHandler = (res) => {
    setFav((birds) => [...birds, res]);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((id) => {
    setIsLoggedIn(true);
    setUserId(id);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
    //history.push(`/`);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Header />
        <CRouter fav={Fav} addFavHandler={addFavHandler} />
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
