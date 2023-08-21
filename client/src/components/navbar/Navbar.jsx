import "./navbar.css";
import pic from "./nistlogo.jpg";
import {Link} from "react-router-dom";

const Navbar =() => {

    return (
       <div className="navbar">
           <img className="college-logo" src={pic} alt="logo " />
           <ul className="nav-items">
      <li className="nav-item">Home</li>
      <li className="nav-item">Programs</li>
      <li className="nav-item">About Us</li>
      <li className="nav-item"><Link className="nav-itemLink" to="/"  >Notices</Link></li>
      <li className="nav-item">Contacts</li>
   </ul>
       </div>

    )

}

export default Navbar;