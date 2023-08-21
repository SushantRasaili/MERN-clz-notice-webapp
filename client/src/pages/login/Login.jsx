import Navbar from "../../components/navbar/Navbar";
import Cover from   "../../components/coverpic/Cover";
import axios from "axios";
import "./login.css";
import {useState} from "react"; 

const Login =() => {
const [log,setLog] = useState({
    username: "",
    password: ""
});

const handleChange =(e) => {
    const {name,value} = e.target;
    setLog(
        {...log,
            [name]: value
        }  )
}

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
          const isLogged = await axios.post("http://localhost:5000/login",log);
          if(isLogged) {
               localStorage.setItem("admin",isLogged.data);
               window.location.replace("/create");
        }
          else {
                 console.log(isLogged);
          }
    }
    catch(err) {
        console.log(err);
    }
}



    return (
        <>
        <Navbar />
        <Cover covpic="https://cdn.pixabay.com/photo/2020/12/14/17/40/studying-5831644_960_720.jpg"
        covtitle="Login"/>

        <div className="logindiv">
            <div className="logincontainer">
              <h1>LOGIN</h1>
      <form className="adminlogin" onSubmit={handleSubmit} >
          <label>Username:</label>
          <input type="text" className="inputs" onChange={handleChange} name="username"/>
          <label>Password:</label>
          <input type='password' className="inputs" onChange={handleChange} name="password" />
          <button type="submit" className="inputs logbtn" >Login</button>
      </form>
      </div>
      </div>
        </>
    )


}

export default Login;