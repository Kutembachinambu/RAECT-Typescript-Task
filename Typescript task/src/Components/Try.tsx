import {useLocation} from "react-router-dom";
import boxhse from "../images/boxhse.jpg";
import bathrm from "../images/bath.png";
import bed from "../images/bed.jpg";
import toilet from "../images/toilet.png";
import kitch from '../images/kitchen.png';
import livingrm from '../images/sittingrm.png';

function About() {
  return (
    <div>
      <div className="image">
        <h3>3 Bedroom Apartment at Ikoyi</h3>
        <h5>Lagos, NG</h5>
        <img src={boxhse} alt="boxhse" />
      </div>
      <div className="info">
      <ul id="desc">
        <li>Description</li>
        <li>Map View</li>
      </ul>

      <p id="own">Owned by: IJT Realtor</p>
      <hr />
      <ul id="rooms">
      <li><img src={bed} alt="bed" /><span className="threee">(3)</span></li>
      <li><img src={bathrm} alt="bath" /><span className="threee">(3)</span></li>
      <li><img src={livingrm} alt="bath" /><span className="threee">(1)</span></li>
      <div>
      <li><img src={kitch} alt="House" /><span className="threee">(2)</span></li>
      <li><img src={toilet} alt="House" /><span className="threee">(3)</span></li>

      </div>
      
      </ul>
      <hr />
      <p>3 bedroom house for sale at ikoyi The Local Government Council Headquarters Lagos imo
         selling for 30,000,000. See property details on Agently or browse all our range of 
         properties in ikoyi 3 bedroom House for sale in ikoyi Buy 3 bedroom House for sale.All
         Ensuite 4 Bedroom Detached Bungalow in ikoyi is a House.
         <div>...</div>
         <p>Show more </p>
         <div id='bbutton'>
         <button id="buy">Buy now: 30,000,000</button>

         </div>
         
         

      </p>

      </div>
      
      
    </div>
  );
}
export default About;