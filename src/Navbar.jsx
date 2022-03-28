import React from "react";
import { NavLink } from "react-router-dom";
import me from "./images/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-12 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light shadow-lg bg-light">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img src={me} className="img-fluid" alt="" />
                </NavLink>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link"
                        aria-current="page"
                        to="/home"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link"
                        to="/contact"
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link"
                        to="about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        exact
                        activeClassName="menu_active"
                        className="nav-link"
                        to="service"
                      >
                        Service
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
