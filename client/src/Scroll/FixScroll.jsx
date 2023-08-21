import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function FixScroll() {
const {pathname} = useLocation();
useEffect(() => {
    setTimeout(() => {
        window.scrollTo(0,0);
    },1)
},[pathname])

return null;

}

export default FixScroll;