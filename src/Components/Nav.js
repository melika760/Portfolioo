import React,{useState} from "react"
import  "./Nav.css"
export default function Nav(){
    const[navOpen,setnavOpen]=useState(false)
    function toggle(){
        setnavOpen(!navOpen)
    }

    return(
        <div className="wraper">
            <div className="menue" onClick={toggle}>
                <div className={navOpen? "boxopen box":"box"}>
                 <spin className={navOpen? "linetopspin linetop" : "linetop"}></spin>
                 <spin className={navOpen? "linecenterspin linecenter" : "linecenter"}></spin>
                 <spin className={navOpen? "linebottomspin linebottom" : "linebottom"}></spin>
                </div>
            </div>
<div className="navoverley"
style={{
    top:navOpen?"0":"-100%",
    transitionDelay: navOpen? "0s":"0s"
}}>
<ul className="navlinks">
                        <li><a href="/">AboutMe</a></li>
                        <li><a href="/">Projects</a></li>
                        <li><a href="/">ContactMe</a></li>
                    </ul>
</div>
        </div>
    )
}