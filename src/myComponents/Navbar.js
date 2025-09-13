import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-body-${props.mode} navbar-${props.mode}`} id='nav-body'>
      <div className="container-fluid">
        <a className={`navbar-brand text-${props.mode}`} href="/">TextUtils</a>
        <button className="navbar-toggler" id="icon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link active text-${props.mode}`} aria-current="page" to="/">{props.homePage}</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link text-${props.mode}`} to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className={`btn btn-outline-success text-${props.mode}`} type="submit">Search</button>
          </form>

          <div className="form-check form-switch mx-3">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault" />
            <label className={`form-check-label text-${props.mode}`} htmlFor="switchCheckDefault">
              {props.mode === 'dark' ? 'Enable Dark Mode' : 'Enable Light Mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}



