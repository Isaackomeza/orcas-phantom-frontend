import React from "react";
import { Route, NavLink, BrowserRouter } from "react-router-dom";
import About from "./About";
import App from "./app";


const Nav = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
        <div className="cmpnt">
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Nav;