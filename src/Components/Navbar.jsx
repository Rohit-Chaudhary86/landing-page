import React from "react";
import banner from "../assets/banner-1.png";
import logo from "../assets/logo.png";
import click_1 from "../assets/click_1.png"
import "./Navbar.css"; 

function Navbar() {
  return (
    <>
    <div className="navbar-container">
      <img className="background-image" src={banner} alt="Background" />
      
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <span>BRIDGE GROUPS</span>
        </div>
        <div className="navbar-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="card">
        <div className="card-content">
          <h1>EMPLOYMENT EXPRESS</h1>
          <p>
            Employment Express is one of the fastest-growing startups with a mission & vision of making India a financially stable country.
          </p>
          <p>Currently working on 3 domains:</p>
          <ul>
            <li>1. Education</li>
            <li>2. BFSI</li>
            <li>3. HR</li>
          </ul>
          <a href="#" className="btn">
            READ MORE
          </a>
        </div>
      </section>

    </div>
    <div className="about-section">
        <div className="about-card">
          <h2>ABOUT US</h2>
          <p>
            Employment Express platform made for the vision of no one unemployed in India. We provide placement, skill development, spoken & written classes, personality development & professional classes with the help of multiple Companies, skill development centre, education institution, human resource professional, human resources consultant & top-level employees of various institutions.
          </p>
          <button className="more-btn">More</button>
        </div>
      </div>
      <div className="info-card">
        <h1 > WHAT WE DO ?</h1>
        <img src={click_1} alt="peoples" />
        <div>
          
        </div>
      </div>
    </>
  );
}

export default Navbar;
