import React from "react";
import { NavLink, Switch, Route, BrowserRouter as Router, Link } from "react-router-dom";
import About from './Register';
import Form from './Form';

function Register() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/About">Register</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Register