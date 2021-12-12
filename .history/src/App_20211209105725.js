import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Shared/header.jsx";
import CRouter from "./Routes/Router";
import Footer from "./components/Shared/footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <CRouter />
      <Footer />
    </Router>
  );
}

export default App;
