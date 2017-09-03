import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="container-fluid">
        <div className="row nav-container align-items-center">
          <div className="col-12 text-center">
            <Link to="/">
              <img
                src="http://static1.netshoes.net/resources/netshoes/brands-slider/nike_170107.png"
                height="60px"
                alt="Logo"
              />
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
