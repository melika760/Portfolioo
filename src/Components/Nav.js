import React,{useState} from "react";
import  "./Nav.css";
import { HashLink as Link } from "react-router-hash-link";
export default function Nav(){
    const[navOpen,setnavOpen]=useState(false)
    function toggle(){
        setnavOpen((prevnavOpen)=>!prevnavOpen)
    }
 function closeNav(){
    setnavOpen(false)
 }

    return(
        <div className="wraper" style={{
            height:navOpen? "100vh":"0px"
        }}>
            <div className="menue" onClick={toggle}>
                <div className={navOpen? "boxopen box":"box"}>
                 <span className={navOpen? "linetopspin linetop" : "linetop"}></span>
                 <span className={navOpen? "linecenterspin linecenter" : "linecenter"}></span>
                 <span className={navOpen? "linebottomspin linebottom" : "linebottom"}></span>
                </div>
            </div>
<div className="navoverley"
style={{
    top:navOpen?"0":"-100%",
    transitionDelay: navOpen? "0s":"0s"
}}>
<ul className="navlinks">
                        <li><Link to="#AboutMe" onClick={closeNav}>AboutMe</Link></li>
                        <li><Link to="#Projects" onClick={closeNav}>Projects</Link></li>
                        <li><Link to="#Contact" onClick={closeNav}>ContactMe</Link></li>
                    </ul>
</div>
        </div>
    )
}