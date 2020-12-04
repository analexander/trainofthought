import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import JournalEntry from "../component/journal/JournalEntry";
import LandingPage from "../component/LandingPage"
import BottomAppBar from "../component/nav/BottomAppBar";
import MediaControlCard from "../component/media/MediaControlCard";

class HomeLandingPage extends Component {
  render() {
    return (
      <div>
        <Router>
        <LandingPage/>
        <JournalEntry/>
        <MediaControlCard/>
        <BottomAppBar/>
        </Router>
      </div>
    );
  }
}

export default HomeLandingPage;
