import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

//pages import
import Home from "./pages/home/Home.jsx";
import Portfolio from "./pages/portfolio/Portfolio.jsx";
import AboutMe from "./pages/about/AboutMe.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Project from "./pages/project/Project.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/projects/:id">
            <Project />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
