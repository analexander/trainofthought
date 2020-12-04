import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeLandingPage from "./pages/LandingPage"
import FaceDetectionPage from './pages/FaceDetectionPage/FaceDetectionPage';
import Login from './pages/Passport/login';
import Home from './pages/Passport/home';
import Register from './pages/Passport/register';
import BottomAppBar from '../src/component/nav/BottomAppBar'

function App() {
  return (
    <Router>
      <div>
        <BottomAppBar/>
        <Switch>
          <Route exact path={["/", "/home"]}>
            <HomeLandingPage />
          </Route>
          <Route exact path={"/facerec"}>
            <FaceDetectionPage />
          </Route>
          <Route exact path={"/login"}>
            <Login />
          </Route>
          <Route exact path={"/home"}>
            <Home />
          </Route>
          <Route exact path={"/register"}>
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
