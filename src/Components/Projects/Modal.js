import styles from "./Modal.module.css"
import Button from "../UI/Button";
import {Link} from "react-router-dom";
export default function Modal(props){
   
    return(
        <div className={`${styles.overley} ${props.className}`}>
         <div className={styles.content}>
         <h3>{props.title}</h3>
            <p>{props.massage}</p>

            <Button><Link to={props.link} target="_blank">Check out</Link></Button>
         </div>
        </div>
    )
}