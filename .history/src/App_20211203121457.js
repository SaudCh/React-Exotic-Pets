import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./components/Shared/header.jsx";
import Home from "./components/Home/home.jsx";
import Login from "./components/Login/login.jsx";
import Register from "./components/Register/register.jsx";
import Footer from "./components/Shared/footer";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Error from "./components/Error/Error";
import BirdDetail from "./components/BirdDetail/BirdDetail";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/bird/:id/:name">
          <BirdDetail />
        </Route>
        <Route path="/error" exact>
          <Error />
        </Route>

        <Redirect to="/error" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
