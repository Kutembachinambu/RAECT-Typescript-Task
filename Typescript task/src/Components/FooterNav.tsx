import React from 'react'
import PropTypes from 'prop-types'
import leftarrow from '../images/leftarrow.png';
import rightarrow from '../images/rightarrow.png';
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from 'react-icons/ai';
import { GrLanguage } from 'react-icons/gr';

const FooterNav = () => {
  return (
    <div>
        <div>
        <ul id="nums">
            <li><AiOutlineLeft /></li>
            <li id="circle">1</li>
            <li>2</li>
            <li>3</li>
            <li>...</li>
            <li>9</li>
            <li>10</li>
            <li><AiOutlineRight /></li>
        </ul>

        </div>
        <div>
        <ul id="copyrights">
            <li>&copy; 2022 Agently, inc.</li>
            <li>.Privacy</li>
            <li>.Terms</li>
            <li>.Sitemap</li>
            <li>.Destinations</li>
            <li id="lang"><GrLanguage />English(US)</li>
        </ul>

        </div>
        
    </div>
  )
}

export default FooterNav