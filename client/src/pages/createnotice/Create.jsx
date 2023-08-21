import Navbar from "../../components/navbar/Navbar";
import Cover from "../../components/coverpic/Cover";
import "./create.css";
import axios from "axios";
import {useState} from "react";


const Create =() => {

    const [text,setText] = useState({
        title: "",
        desc: "",
    })
    const [file,setFile ] = useState(null);


    const handleChange =(e) => {
        const {name,value} = e.target;
        setText({...text,[name]: value});

    }


   const handleCreate = async (e) => {
              e.preventDefault();

            
       const data = new FormData();
       data.append("file",file);
       data.append("upload_preset","nistss");
       try {
   const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/ddpim9anx/image/upload",
  data);
  console.log(uploadRes.data.url);
  const {url} = uploadRes.data;
  if(url) {

    const Res = await axios.post("http://localhost:5000/notice",{...text,url:url});
    alert(Res.data);
    console.log(Res);
  }

       }
       catch (err) {
           console.log(err);
       }
   }

   const handleLogout = (e) => {
       e.preventDefault();
       localStorage.clear();
    //    alert("Successfully logged out");
       window.location.replace("/");
   }
 

    return(
        <>
       <Navbar />
       <Cover covpic="https://cdn.pixabay.com/photo/2021/11/22/04/21/drink-6815800_960_720.jpg" covtitle="Create" />

<div className="create">
    <div className="createinner" >
<h2 className="createtitle">Create Notice</h2>
    <form className="createform">
        <label className="makespace">Title of Notice:</label>
        <input type="text" name="title" onChange={handleChange} className="createinput makespace" />
        <label className="makespace">Description of title:</label>
        <textarea  name="desc" rows="7" cols="40" onChange={handleChange} className="createdesc makespace"></textarea>
        {/* <input type="text" name="desc"  /> */}
        <label className="makespace" htmlFor="fileph">Choose Image: <i className="fa-solid fa-file-circle-plus"></i></label>
        <input type="file" name="photo" onChange={(e) => setFile(e.target.files[0])}
        id="fileph" className="makespace" style={{display: "none" }}/>
        <button className="createbtn makespace" type="submit" onClick={handleCreate}>Create</button>
    </form>
    <button type="button" className="logout" onClick={handleLogout}>
        Log Out</button>
</div>
</div>
  
  


        </>
    )
}

export default Create;