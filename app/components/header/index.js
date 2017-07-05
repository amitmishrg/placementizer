

import React from 'react';
import HeaderStyle from './header.css';
import Hero from '../hero'
import { Link, IndexLink} from 'react-router';

class Header extends React.Component {

    render() {

      return (
        <div className="header-wrapper">
          <header className="container">
            <nav className="navbar navbar-toggleable-md navbar-light row">
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">Placementizer</a>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav my-2 my-lg-0">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home</a>
                  </li>
                  <li className="nav-item">
                    <IndexLink className="nav-link" to="/dashboard">Dashboard</IndexLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Feature</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Signup</a>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <Hero />
        </div>
      )
    }
}

export default Header;
