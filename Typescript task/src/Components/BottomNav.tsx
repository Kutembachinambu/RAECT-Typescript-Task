import { MdFilterAlt } from 'react-icons/md';
import arrow from "../images/arrow.png";
import '../App.css';


const BottomNav = () => {
  return (
    <div>
        <ul id='bottomNav'>
            <li><span>House</span></li>
            <li>Office Space</li>
            <li>Flats and Apartments</li>
            <li>Lands</li>
            <li>Semi Detached Bungalow</li>
            <li>Semi Detached Duplex</li>
            <li>Warehouse</li>
            <li>Mini Flat</li>
            <li>Shop In a mall</li>
            <li><img id="arrow" src={arrow} alt="arrow"/></li>
            <li id='filter'><MdFilterAlt />Filters</li>
            
        </ul>
    </div>
  )
}

export default BottomNav