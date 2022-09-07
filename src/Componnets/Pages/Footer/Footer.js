import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

const Footer = () => {
  const date = new Date();
  const getDate = date.getFullYear();

  return (
    <div>
      <div>
        <footer className="footer p-10   bg-neutral  text-secondary">
          <div>
            <h1 className=" text-3xl font-extrabold text-secondary">
              Tour<span className=" text-primary">2Hub</span>{" "}
            </h1>
            <p className=" text-[16px]">
              Copyright © 2021 - {getDate} | All Right Reserved
              <br />
              By{" "}
              <a
                className=" text-primary"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ahshanhabib26/"
              >
                Ahshan Habib{" "}
              </a>
            </p>
            <div className=" flex flex-row my-3">
              <span className=" cursor-pointer" target="_blank" rel="noreferrer" href="#">
                <FaFacebook title="Facebook" color="#fff" size="22px" />
              </span>
              <a
              className=" mx-3 cursor-pointer"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/ahshanhabib26/"
              >
                <FaLinkedinIn title="LinkedIn" color="#fff" size="22px" />
              </a>
              <a
              className=" cursor-pointer"
                target="_blank"
                rel="noreferrer"
                href="https://habibdev.netlify.app/"
              >
                <GiWorld title="My Portfolio" color="#fff" size="22px" />
              </a>
              <a 
              className=" mx-3 cursor-pointer"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AhshanHabib26"
              >
                <FaGithub title="Github" color="#fff" size="22px" />
              </a>
            </div>
          </div>
          <div>
            <span className="footer-title text-[16px] ">Our Services</span>
            <Link to="" className="link text-[16px] link-hover">
              Adventure Tours
            </Link>
            <Link to="" className="link text-[16px]  link-hover">
              Group Tours
            </Link>
            <Link to="" className="link text-[16px] link-hover">
              Family Tours
            </Link>
            <Link to="" className="link text-[16px] link-hover">
              Country Tours
            </Link>
          </div>
          <div>
            <span className="footer-title text-[16px]">About Us</span>
            <Link to="" className="link text-[16px] link-hover">
              About Us
            </Link>
            <Link to="" className="link text-[16px] link-hover">
              Contact Us
            </Link>
            <Link to="" className="link text-[16px] link-hover">
              Career
            </Link>
            <Link to="" className="link text-[16px] link-hover">
              Blog Press
            </Link>
          </div>
          <div>
            <span className="footer-title text-[16px]">Legal Inforamtion</span>
            <Link to="" className="link text-[16px] link-hover">
              Terms of use
            </Link>
            <Link to="" className="link text-[16px] link-hover">
              Privacy policy
            </Link>
            <Link to="" className="link text-[16px] link-hover">
              Cookie policy
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
