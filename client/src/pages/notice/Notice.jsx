import Cover from "../../components/coverpic/Cover";
import Navbar from "../../components/navbar/Navbar";
import noticepic from "./sample.jpg";
import covpic from "./cover.jpg";
import "./notice.css";
import { useEffect,useState } from "react";
import {useLocation} from "react-router-dom";
import axios from "axios";
// import { update } from "../../../../api/models/notice";

const Notice =() => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const mode = location.search.split("=")[1];

    const [updateMode,setUpdateMode] = useState(false);
    const [data,setData] = useState({});
    const [update,setUpdate] = useState({
      "title": "",
      "desc": ""
    });
    const [user,setName] = useState("");

    useEffect(async () => {
  // await axios.get(`http://localhost:5000/getNotices/${path}`)
  // .then(res => setData(res.data))
  // .catch(err => console.log(err));
 const res =  await axios.get(`http://localhost:5000/getNotices/${path}`);
if(res) {
  setData(res.data);
}
  mode==="update" && setUpdateMode(true);
    setUpdate({title: res.data.title,
      desc: res.data.desc});
  
   setName(localStorage.getItem("admin"));
    },[]);

    const handleChange =(e) => {
         const {name,value}= e.target;
          setUpdate({...update,[name]: value});
    }

    const handleClick = async (e) => {
      e.preventDefault();
      const updated = await axios.put(`http://localhost:5000/updateNotice/${data._id}`,{...update,username: user});
      if(updated) {
        // alert("Successfully updated the notice");
        window.location.replace("/");
      }
      else {
        alert("Something went wrong please try in a while");
      }
    
    }

    return (
        <>
        <Navbar />
        <Cover covpic={covpic} covtitle="Notice"/>
        <div className="notice">
            <div className="innernotice">
              {updateMode ?(<input type="text" name="title" onChange={handleChange} autoFocus
               className="noticeTopicsInput" value={update.title} />) :
            (<h1 className="noticetopics">{data.title}</h1>)
              }
            <p className="noticedate">{new Date(data.updatedAt).toDateString()}</p>
            <img src={data.url} alt="info" className="noticepic" />
            {updateMode ? (<textarea name="desc" rows="5" cols="50" onChange={handleChange} 
            className="noticeDescInput" value={update.desc} />) :
            <p className="noticedesc">{data.desc}</p>
            }
              </div>
              {updateMode && <button type="submit" className="updateButton" onClick={handleClick}>Update</button>}

        </div>
        </>

    )
}

export default Notice;