import React from "react";
import whats from "../../assets/images/whats.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full new bg-gradient-to-r from-[#37af4b] to-[#1c74bb]  flex">
      <a
        href="https://wa.me/8287668958"
        className="w-20 fixed top-[600px] right-0"
      >
        <img src={whats} alt="" />
      </a>
      <div className="w-1/3 justify-center items-center flex">
        
      </div>
      <div className="w-1/3 justify-center flex">
        <div className="">
          <h1 className="font-semibold text-white">Usefull links</h1>
          <ul className="capitalize ">
            <NavLink to="/" exact>
              <li className="p-2 font-semibold cursor-pointer uppercase ">
                Home
              </li>
            </NavLink>
            <NavLink to="/about" exact>
              <li className="p-2 font-semibold cursor-pointer uppercase">
                about_us
              </li>
            </NavLink>
            <NavLink to="/gallery" exact>
              <li className="p-2 font-semibold cursor-pointer uppercase">
                gallery
              </li>
            </NavLink>
            <NavLink to="/contact" exact>
              <li className="p-2 font-semibold cursor-pointer uppercase">
                contact_us
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
      <div className="w-1/3 justify-center flex">3</div>
    </footer>
  );
};

export default Footer;
