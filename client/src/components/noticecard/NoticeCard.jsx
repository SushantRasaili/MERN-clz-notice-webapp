import "./noticecard.css";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const NoticeCard =(props) => {

    const [admin,setAdmin] = useState(false);

 
    useEffect(() => {
        setAdmin(props.admin); 
    }); 

    const deleteNotice =async (e) => {
        e.preventDefault();
try {
   const deleted = await axios.delete(`http://localhost:5000/delNotice/${props.id}`,{data: {
        username: localStorage.getItem("admin")
    },
});
if(deleted) { 
window.location.replace("/");
}
}
catch(err) {
       
}

       
    }

    return (
        <div className="noticecard" > 
          <img src={props.url} className="cardpic" alt="card" />
          <div className="noticecont">
          <h2 className="cardtopic">
              <Link className="clicktopic" to={`/notice/${props.id}`}>{props.topic}</Link>
              </h2>        {/* make this clickable */}
          <p>{new Date(props.date).toDateString()}</p>
          <p className="carddesc">
               {props.desc.length > 155 ? props.desc.substring(0,190)+"..." :props.desc }
             </p>
              </div>
              {
                  admin  && 
                    <div className="adminicons">
              <Link className="clickUpdate" to={`/notice/${props.id}/?mode=update`}>
                  <i className="fa-solid fa-pen-to-square" style={{color: "green"}}></i>
                  </Link>
              <i className="fa-solid fa-trash-can" onClick={deleteNotice} style={{color:"red"}}></i>
              </div>
              }
            
        </div>



    )


}

export default NoticeCard;