import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from 'react-icons/ai';


const FooterNav = () => {
  return (
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
  )
}

export default FooterNav