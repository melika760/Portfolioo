import styles from "./Modal.module.css"
import Button from "../UI/Button"
export default function Modal(props){
   
    return(
        <div className={`${styles.overley} ${props.className}`}>
         <div className={styles.content}>
         <h3>{props.title}</h3>
            <p>{props.massage}</p>
            <Button onClick={props.onclick}>Check out</Button>
         </div>
        </div>
    )
}