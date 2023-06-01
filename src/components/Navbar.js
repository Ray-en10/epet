import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw  } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div>
      <div className="header">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <ul className="nav-menu active">
          <li>
            <Link className="nva" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="nva2"
              to="/Animals"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Animals
            </Link>
            {showDropdown && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="#Dogs" className="menudrop">
                  Dogs
                  </Link>
                </li>
                <li>
                  <Link to="#Cats" className="menudrop">
                  Cats
                  </Link>
                </li>
                <li>
                  <Link to="#Pigs" className="menudrop">
                    Pigs
                  </Link>
                </li>
                <li>
                  <Link to="#Monkeys" className="menudrop">
                    Monkeys
                  </Link>
                </li>
                <li>
                  <Link to="#Birds" className="menudrop">
                    Birds
                  </Link>
                </li>
                <li>
                  <Link to="#Hamsters" className="menudrop">
                    Hamsters
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link className="nva" to="/Store">
              Store
            </Link>
          </li>
          <li>
            <Link className="nva" to="/Contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="nva" to="/Addform">
              Add for Adoption
            </Link>
          </li>
        </ul>
        <div className="checkout">
          <div>
            <Link className="nva" to="/cart">
            <FontAwesomeIcon icon={faPaw } className="custom-icon"/>
              
            </Link>
          </div>
        </div>
      <div className="but1">
            <button className="button1">
              <Link className="but" to="/Sign">
                Sign Up
              </Link>
            </button>
          </div>
      </div>
    </div>
  );
}
export default Navbar;
