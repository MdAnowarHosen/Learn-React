import React, { PureComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./Home/About";
import Service from "./Home/Service";
import Home from "./Home/Home";

export class HeaderFooterApp extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <Link to="/" className="navbar-brand">
                App
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarText"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/service" className="nav-link">
                      service
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="about" className="nav-link">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/service">
              <Service />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch> */}
        </Router>
      </div>
    );
  }
}

export default HeaderFooterApp;
