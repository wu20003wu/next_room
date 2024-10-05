import React from 'react'

function Header() {
  return (
    <>
      <style>
        {`
          .navbar-brand1 {
            display: flex;
            align-items: center;
            margin-left: -80px
          }

          .navbar-brand1 img {
            max-width: 45%;
            height: auto;
            margin-right: 10px;
            margin-bottom: -65px;
            margin-top: -100px;
          }
        `}
      </style>
    <div>
    {/* Navigation*/}
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
        <a className="navbar-brand1" href="#page-top"><img src="assets/img/navbar-logo.svg" alt="..." /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars ms-1" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
            <li className="nav-item"><a className="nav-link" href="login">Login</a></li>
            </ul>
        </div>
        </div>
    </nav>
    {/* Masthead*/}
    <header className="masthead">
        <div className="container">
        <div className="masthead-subheading">Welcome to CashFlow!</div>
        <div className="masthead-heading text-uppercase">Know where your Cash goes!</div>
        <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
        </div>
    </header>
    </div>

    </>
  );
}

export default Header