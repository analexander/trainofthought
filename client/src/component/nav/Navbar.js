import React from 'react'
import { withRouter} from "react-router-dom"
import '../nav/Navbar.css'

class NavBar extends React.Component {
  render(){

    return (
      <div className="container navbar">
        <nav className="sidebar bigNav">
          <button type="button" className="btn btn-link">
              <i className="fas fa-home"></i>            
              <h4>HOME</h4>
            </button>
            <button type="button" className="btn btn-link">
              <i className="fas fa-history"></i>
              <h4>RECENT ENTRIES</h4>
            </button>
            <button type="button" className="btn btn-link">
              <i className="fas fa-book"></i>            
              <h4>NOTEBOOKS</h4>
            </button>
            <button type="button" className="btn btn-link">
              <i className="far fa-question-circle"></i>            
              <h4>ABOUT</h4>
            </button>
      </nav>
  
      <div className="smallNav w3-hide-medium" id="myNavbar">
        <nav className="sidebar smallNav">
          <button href="#" className="w3-bar-item w3-button">HOME</button>
          <button href="#photos" className="w3-bar-item w3-button">ENTRIES</button>
          <button href="#contact" className="w3-bar-item w3-button">NOTEBOOKS</button>
          <button href="#about" className="w3-bar-item w3-button">ABOUT</button>
        </nav>
      </div>
    </div>
    )
  }
}

export default withRouter(NavBar);