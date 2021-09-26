
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/staticPages/header/Header";
import ImgSlider from "./components/staticPages/imgSlider/ImgSlider";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/staticPages/aboutUs/About";
import Notification from "./components/staticPages/notification/Notification";
import Facilities from "./components/staticPages/facilities/Facilities";
import Admission from "./components/staticPages/admission/Admission";


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
          <Route exact path="/"><ImgSlider />  </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
