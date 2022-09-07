import React from "react";
import Logo from "../../Image/TourHub.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <HashLink smooth to="/">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#tours">
                  Package
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#destinations">
                  Destinations
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#upcoming-offer">
                  Best Offer
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#blogs">
                  Blogs
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#album-archive">
                  Album
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#contact-us">
                  Contact Us
                </HashLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <HashLink smooth to="/">
                Home
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#tours">
                Package
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#destinations">
                Destinations
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#upcoming-offer">
                Best Offer
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#blogs">
                Blogs
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#album-archive">
                Album
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#contact-us">
                Contact Us
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex="0" className="btn btn-primary text-white">
              Register
            </label>
            <ul
              tabIndex="0"
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
