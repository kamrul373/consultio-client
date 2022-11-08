import React, { useState } from 'react';
import logo from "../../../assets/img/logo.png";
import { Link } from 'react-router-dom';
import "./Header.css";
const Header = () => {
  return (
    <header className="navbar bg-base-100 py-5 menu-area">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          {/* for small device */}
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li className='btn btn-primary'>
              <Link to="/signin">Sign In</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="consultio" className='logo' />
        </Link>

      </div>
      {/* for large device */}
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li className='btn btn-primary'>
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </div>
    </header>

  );
};

export default Header;