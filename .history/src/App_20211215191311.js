import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Shared/header.jsx";
import CRouter from "./Routes/Router";
import Footer from "./components/Shared/footer";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [Fav, setFav] = useState();
  return (
    <Router>
      <Header />
      <CRouter fav={Fav} />
      <Footer />
    </Router>
  );
}

export default App;
