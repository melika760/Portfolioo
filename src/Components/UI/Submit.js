import styles from "./Submit.module.css";
import Button from "./Button";
export default function Submit(){
    function Back(){
window.open("/","_blank","noreferrer")
    }
    return<div className={styles.wrap}>
    <h3>Thanks for the message! 💌</h3>
    <p>I'll get back to you as soon as possible!</p>
<Button onClick={Back}>OK</Button>
    </div>
}