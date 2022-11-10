import React, { useState, useContext } from 'react';
import logo from "../../../assets/img/logo.png";
import { Link } from 'react-router-dom';
import "./Header.css";
import { AuthContext } from '../../../context/AuthContextProvider';
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handlLogOut = () => {
    logout()
      .then(() => { })
      .catch(error => console.log(error));
  }
  return (
    <header className="navbar bg-base-100 py-5 menu-area fixed top-0 z-50">
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
            {
              user?.uid &&
              <li>
                <Link to="/myreviews">My reviews</Link>
              </li>
            }
            {
              !user?.uid ?
                <>
                  <li className='btn btn-primary'>
                    <Link to="/signin">Sign In</Link>
                  </li>
                </>
                : <div className='btn-circle avatar'>
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt={user?.displayName} className="rounded" />
                  </div>
                </div>
            }
            {
              user?.uid && <button onClick={handlLogOut} className='btn btn-primary'>Logout</button>
            }
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
          {
            user?.uid &&
            <li>
              <Link to="/myreviews">My reviews</Link>
            </li>
          }
          {
            !user?.uid ?
              <>
                <li className='btn btn-primary'>
                  <Link to="/signin">Sign In</Link>
                </li>
              </>
              : <div className='btn-circle avatar'>
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt={user?.displayName} className="rounded" />
                </div>
              </div>
          }
          {
            user?.uid && <button onClick={handlLogOut} className='btn btn-primary'>Logout</button>
          }
        </ul>
      </div>
    </header>

  );
};

export default Header;