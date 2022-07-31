import {useNavigate} from "react-router-dom";
  
const Home = () => {
  const navigate = useNavigate();
    
  return (
      <>
        <h1 style={{color:"green"}}>Homepage</h1>
        <button onClick={()=>navigate("/about")}>About</button>
      </>
  )
};
  
export default Home;