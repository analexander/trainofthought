import React from 'react'
import { withRouter } from "react-router-dom"
import '../jumbotron/Jumbotron.css'

class Jumbotron extends React.Component {
  render(){
    return (
      <div className="jumbotron">
        <div>
          <h1>Train of Thought</h1>      
        </div>
      </div>
    )
  }
}

export default withRouter(Jumbotron);