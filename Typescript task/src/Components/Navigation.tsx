import logo from "../images/asterisk.png";
import '../App.css';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import {useNavigate} from "react-router-dom";
import search from '../images/search.png';
import { useForm, SubmitHandler } from "react-hook-form";

type CredentialInputs = {
  place: string
};


const Navigation = () => {

      const navigate = useNavigate();
      const { register, handleSubmit, watch, formState: { errors } } = useForm<CredentialInputs>();
    
  const onSubmit: SubmitHandler<CredentialInputs> = data => console.log(data);
  const onSubmitError: SubmitHandler<CredentialInputs> = data => console.log(data);

  
      

  return (
    <div>
       <ul className="nav">
        <li><img id="logo" src={logo} alt="logo"/></li>
        <li><button onClick={()=>navigate(-1)}><h5 id="agently">AGENTLY</h5></button> </li>
        <li>
          <form id="input" onSubmit={handleSubmit(onSubmit)}>

          <input placeholder="Rent v | Where do you want to live?"  {...register("place", { required: true })} />
           {errors.place && <span id="error">Enter your prefered place!</span>}
            <button type="submit"><img id="search" src={search} alt="search"/></button>
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
       
