import React from 'react';
import { GrLanguage } from 'react-icons/gr';

const Footer = () => {
  return (
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
  )
}

export default Footer