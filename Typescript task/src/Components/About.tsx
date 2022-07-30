import {useLocation} from "react-router-dom";
import boxhse from "../images/boxhse.jpg";
import bathrm from "../images/bath.png";
import bed from "../images/bed.jpg";
import toilet from "../images/toilet.png";
import kitch from '../images/kitchen.png';
import livingrm from '../images/sittingrm.png';
import share from '../images/share.png';
import asterisk from '../images/asterisk.png';
import PropertyDetails from "./PropertyDetails";

function About() {
  const location = useLocation();
const properties = location.state as any;
console.log(properties);

  return (
    <div>
      
      <div className="image">
        <h2>3 Bedroom Apartment at Ikoyi</h2>
        <ul id="stats">
          <li id="loc"><h4>{properties.location}</h4></li>
          <li className={properties.state}>{properties.state}</li>
        </ul>
       
        <img src={properties.image} alt="boxhse" />
      </div>
      <div className="info">
      <ul id="desc">
        <li><span>Description</span></li>
        <li>Map View</li>
      </ul>

      <h5 id="own">Owned by: <span>IJT Realtor</span></h5>
      <hr />
      <ul id="rooms">
      <li><img src={properties.bdrmImg} alt="bed" /><span className="threee">({properties.bdrmQty})</span></li>
      <li><img src={properties.bthrmImg} alt="bath" /><span className="threee">({properties.bthrmQty})</span></li>
      <li><img src={livingrm} alt="bath" /><span className="threee">(1)</span></li>
      <div>
      <li><img src={kitch} alt="House" /><span className="threee">(1)</span></li>
      <li><img src={properties.toiletImg} alt="House" /><span className="threee">({properties.toiletQty})</span></li>

      </div>
      
      </ul>
      <hr />
      <p>3 bedroom house for sale at ikoyi The Local Government Council Headquarters Lagos imo
         selling for &#x20A6;30,000,000. See property details on Agently or browse all our range of 
         properties in ikoyi 3 bedroom House for sale in ikoyi Buy 3 bedroom House for sale.All
         Ensuite 4 Bedroom Detached Bungalow in ikoyi is a House.</p>
         <div>...</div>
         <p><span id="show">Show more</span> <span id="angle">&gt;</span></p> 
         <div id='bbutton'>
          <ul>
            <li><h5 id="buy">Buy now: &#x20A6;30,000,000</h5></li>
            <li className="share"><img src={share} alt="share" /></li>
            <li className="share"><img src={asterisk} alt="asterisk" /></li>
          </ul>

         </div>

      </div>
      
      
    </div>
  );
}
export default About;