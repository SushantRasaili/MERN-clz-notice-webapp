import Notices from "./pages/notices/Notices";
import Notice from "./pages/notice/Notice";
import Login from "./pages/login/Login";
import Create from "./pages/createnotice/Create";
import { createContext,useState,useEffect } from "react";
import FixScroll from "./Scroll/FixScroll";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {





  const [admin,setAdmin] = useState(false);

  useEffect(() => {
     const isLogged = localStorage.getItem("admin");
     isLogged && setAdmin(true);
  },[]);



  return (
    // <div className="App">
    //    <Login /> 
    // {/* //    <Notices /> */}
    //  {/* <Create /> */}

    //   </div>
    <Router>
      <FixScroll />
    <Switch>
    

    <Route path="/notice">
      <Notice />
    </Route>
     <Route path="/login">
     <Login /> 
    </Route> 
    <Route exact path="/">
      <Notices />
    </Route>
    <Route path="/create">
      {admin ? <Create /> : <Notices/> }
    </Route>
  </Switch>
</Router>  
 

  );
}

export default App;
