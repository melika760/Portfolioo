import React,{useState} from "react";
import  styles from "./Nav.module.css"
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
        <div className={styles.wraper} style={{
            height:navOpen? "100vh":"0px"
        }}>
            <div className={styles.meneu} onClick={toggle}>
                <div className={`${styles.box} ${navOpen? styles.boxopen:styles.box}`}>
                 <span className={`${styles.linetop} ${navOpen? styles.linetopspin:styles.linetop}`}></span>
                 <span className={`${styles.linecenter} ${navOpen? styles.linecenterspin :styles.linecenter}`}></span>
                 <span className={`${styles.linebottom} ${navOpen? styles.linebottomspin:styles.linebottom}`}></span>
                </div>
            </div>
<div className={styles.navoverley}
style={{
    top:navOpen?"0":"-100%",
    transitionDelay: navOpen? "0s":"0s"
}}>
<ul className={styles.navlinks}>
                        <li><Link to="#AboutMe" onClick={closeNav}>AboutMe</Link></li>
                        <li><Link to="#Projects" onClick={closeNav}>Projects</Link></li>
                        <li><Link to="#Contact" onClick={closeNav}>ContactMe</Link></li>
                    </ul>
</div>
        </div>
    )
}