import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";

const Navbar = () => {
  const [view, setView] = useState(false);
  return (
    <div className="navbar-container">
      <Link to={"/"}>
        <h1 className="trans">Techni</h1>
      </Link>
      {view ? (
        <ul className="list">
          <li>
            <Link to={"/"}>home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/services"}>Services</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
        </ul>
      ) : null}
      <ul className="listLargerScreen">
        <li>
          <Link to={"/"}>home</Link>
        </li>
        <li>
          <Link to={"/about"}>About us</Link>
        </li>
        <li>
          <Link to={"/services"}>Services</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact us</Link>
        </li>
      </ul>
      <HiBars3
        className="navicon"
        onClick={() => {
          setView(!view);
        }}
      />
    </div>
  );
};

export default Navbar;
