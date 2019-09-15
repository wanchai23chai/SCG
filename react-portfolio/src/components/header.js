import React, { Component } from 'react';
import '../css/header.css'
import { Link } from "react-router-dom"
export class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" >
          <Link to="/" className="navbar-brand" id="logo">WC</Link>  
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMenu"
          aria-controls="navMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navMenu">
          <ul className="navbar-nav mr-auto justify-content-end" id="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-me">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/skills">Skill</Link></li>
            <li><Link to="/scg">Question</Link></li>
          </ul>    
        </div>
      </nav>
    )
  }
}