import React, { useRef,useState } from "react";
import Axios  from "axios";
import logo from "./logo.png";
import "./Navbar.css";
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import { SlBasket } from 'react-icons/sl';
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
// import {Button} from 'react-bootstrap';

export default function Navbar() {
  const navref = useRef();
  const showNavbar = () => {
    navref.current.classList.toggle("responsive_nav")
  }
  const [timeoutId,updateTimeoutId] = useState();
  const onTextChange =(event)=>{
    clearTimeout(timeoutId)
    const timeout = setTimeout(()=> console.log("API call"),500);
    updateTimeoutId(timeout);
  };
  return (
    <>
      <div className="navbar">
        <div className="logo-image">
          <img src={logo} alt="logo" />
        </div>
        <div className="options-divider">
          <div className="upper-options">
            <div className="inputSearch">
              <input
                type="text"
                placeholder="Search for a recipe"
                onChange={onTextChange}
              />
              <button className="searchButton">Search</button>
            </div>
            <div><SlBasket /></div>
            <div><AiOutlineHeart /></div>
            <div><AiOutlineUser /></div>
          </div>
          <div className="lower-options" ref={navref}>
            <div>International</div>
            <div>Meals</div>
            <div>Quickbites</div>
            <div>Ingredients</div>
            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              {/* <IconContext.Provider value={{ className:'reactHamIcon' }}> */}
                <FaTimes />
              {/* </IconContext.Provider> */}
            </button>
          </div>
          <button className="nav-btn" onClick={showNavbar}>
            <FaBars />
          </button>
        </div>
      </div>
    </>
  );
}
