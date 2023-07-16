import styles from "./Modal.module.css"
export default function Modal(props,show){
   
    return(
        <div className={`${styles.overley} ${props.className}`}>
         <div className={styles.content}>
         <h3>{props.title}</h3>
            <p>{props.massage}</p>
         </div>
        </div>
    )
}