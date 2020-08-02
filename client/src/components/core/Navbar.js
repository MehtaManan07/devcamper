import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const NavbarComponent = () => {
  const guestLinks = (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          <i className="fas fa-sign-in-alt"></i> Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          <i className="fas fa-user-plus"></i> Register
        </Link>
      </li>
      <li className="nav-item d-none d-sm-block">
        <Link className="nav-link" to="#">
          |
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/allBootcamps">
          Browse Bootcamps
        </Link>
      </li>
    </>
  );

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-laptop-code"></i> DevCamper
        </Link>
        <Button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">{guestLinks}</ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
