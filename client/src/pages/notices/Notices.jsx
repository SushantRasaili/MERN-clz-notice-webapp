import NoticeCard from "../../components/noticecard/NoticeCard";
import Navbar from "../../components/navbar/Navbar";
import Cover from "../../components/coverpic/Cover";
import axios from "axios";
import { useEffect,useState } from "react";
import "./notices.css";
import covpic from "./cover.jpg";

const Notices =() => {

    const [notices,setNotices] = useState([]);

    useEffect(() => {
        const isLogged = localStorage.getItem("admin");
        if(isLogged) {
            setAdmin(true)
        }
        else {
            setAdmin(false);
        }
    });

    const [admin,setAdmin] = useState(false);

    useEffect(() => {
        let isMounted = true;
            axios.get("http://localhost:5000/getNotices")
            .then(res => isMounted && setNotices(res?.data))
            .catch(err => console.log(err));
           return () => {isMounted = false};
    }, []);



   

    return (
        <div className="Noticepage">
        <Navbar />
        <Cover covpic={covpic} covtitle="Notices" />
      

  
             <div className="noticecards">
                 {  notices.map((val) => (
                          <NoticeCard key={val._id} id={val._id}
                          admin={admin}
                           topic={val.title} 
                          date={val.updatedAt}
                           url={val.url} desc={val.desc} />
                     ))
                 }

             {/* <NoticeCard />
                <NoticeCard /> 
                <NoticeCard />
                <NoticeCard />
                <NoticeCard />  */}
                </div>
        
        </div>
        
        


    )
}

export default Notices;