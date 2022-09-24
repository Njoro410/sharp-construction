import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <div className="navbar bg-yellow-400 sticky top-0 z-50 drop-shadow-md font-Acme">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="hero" smooth={true} offset={-700} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} offset={-150} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                offset={-50}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link to="pictures" smooth={true} offset={-50} duration={500}>
                Gallery
              </Link>
            </li>
            <li>
            <Link to="testimonials" smooth={true} offset={-100} duration={500}>
              Testimonials
            </Link>
          </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Sharp</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li className="">
            <Link to="hero" smooth={true} offset={-200} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-200} duration={500}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} offset={-50} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="pictures" smooth={true} offset={-50} duration={500}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} offset={-100} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-50} duration={500}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="contact" smooth={true} offset={-50} duration={500}>
          <a className="btn">Get a free quote</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
