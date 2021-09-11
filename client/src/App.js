import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './components/PanelsHomepage/Homepage';
import LinksLanding from './components/LandingPages/LinksLanding';
import Navbar from './components/Navbar/Navbar';
import MeetTheTeam from './components/LandingPages/meetTheTeam/meetTheTeam';
import ContactUs from './components/LandingPages/Contact/ContactUs';
import Footer from './components/Footer/Footer';

import { Questions } from './components/Questionnaire/Questions';

function App() {
  return (
    <div className="App"
    >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
            <Footer/>
          </Route>
          <Route path="/aboutUs">
            <MeetTheTeam />
            <Footer/>
          </Route>
          <Route path="/contactUs">
            <ContactUs />
            <Footer/>
          </Route>
          <Route path="/products">
            <p className="mt-5">Shopify coming soon</p>
          </Route>

          <Questions/>
        
          {/* add more routes as pages become available  */}
        </Switch>

      </Router>
    </div>
  );
}

export default App;
