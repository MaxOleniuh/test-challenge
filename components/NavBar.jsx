import React from 'react';
import Link from 'next/link';
import Input from './Input';
import LoginButton from './LoginButton';
import { GiMechaMask } from 'react-icons/gi';
import { PiSquaresFourDuotone } from 'react-icons/pi';

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg bg-dark-blue font-cfont nav">
      <div className="container-xxl">
        <Link href="/" className="navbar-brand text-white nav-item">
          <GiMechaMask size="2em" className='mask-icon' />
          Sample Page
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto p-2">
            <li className="nav-item link">
              <Link href="/" className='nav-link'>
          <PiSquaresFourDuotone size="2em" className='squares-icon' />
        </Link> 
            </li>
            <li className="nav-item link">
              <Link href="/" className="nav-link text-white">Home
              </Link>
            </li>
            <li className="nav-item dropdown">
               <Link
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Features
              </Link>
               <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href="/" className="dropdown-item">Feature 1</Link>
                <Link href="/" className="dropdown-item">Feature 2</Link>
                <Link href="/" className="dropdown-item">Feature 3</Link>
              </div>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"

              >More 
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href="/" className="dropdown-item">More 1</Link>
                <Link href="/" className="dropdown-item">More 2</Link>
                <Link href="/" className="dropdown-item">More 3</Link>
              </div>
            </li>
            <li className="nav-item">
              <Input />
            </li>
            <li>
              <LoginButton className=""/>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;