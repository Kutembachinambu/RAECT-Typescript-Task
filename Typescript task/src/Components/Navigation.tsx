import React from 'react';
import logo from "../images/asterisk.png";
import '../App.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import {useNavigate} from "react-router-dom";
import search from '../images/search.png';

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div>
       <ul className="nav">
        <li><img id="logo" src={logo} alt="logo"/></li>
        <li><button onClick={()=>navigate(-1)}><h5 id="agently">AGENTLY</h5></button> </li>
        <li>
          <form id="input">
            <input type='text' name='place' placeholder="Rent v | Where do you want to live?" />
            <button><img id="search" src={search} alt="search"/></button>
          </form>
        </li>
        <li>Own a property?</li>
        <li><FaRegUserCircle/></li>
        <li><MdOutlineKeyboardArrowDown /></li>
      </ul>
      <hr />
    </div>
  )
}

export default Navigation
       
