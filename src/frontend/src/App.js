
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/staticPages/header/Header";
import Home from "./components/staticPages/home/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/staticPages/aboutUs/About";
import Notification from "./components/staticPages/notification/Notification";
import Facilities from "./components/staticPages/facilities/Facilities";
import Admission from "./components/staticPages/admission/Admission";
import Footer from "./components/staticPages/footer/Footer";
import ContactPage from "./components/staticPages/contact/contact";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/About" ><About /></Route>
          <Route exact path="/Notification"><Notification /> </Route>
          <Route exact path="/Facilities"> <Facilities /> </Route>
          <Route exact path="/Admission"> <Admission /> </Route>
          <Route exact path="/Contact"> <ContactPage /> </Route>
          <Route exact path="/"><Home />  </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
