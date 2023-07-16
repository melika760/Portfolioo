import styles from "./FirstContent.module.css";
import Icon from "../img/—Pngtree—career woman playing laptop on_5315939.png"
export default function FirstContent(){
    return(
        <div className={styles.container}>
<div className={styles.content}>
    <h3><span className={styles.shadow}></span>
        Hello!I am Melika</h3>
    <p>Skilled Front End Developer dedicated to creating user-friendly websites. With a keen eye for design and strong technical abilities, I develop interfaces that engage and impress. Proficient in HTML, CSS, JavaScript, and modern frameworks, I specialize in building websites that work seamlessly across different devices and browsers. By staying updated with the latest industry trends, I bring a fresh and innovative perspective to front end development. Let's work together to bring your digital ideas to reality and deliver exceptional online experiences.</p>
</div>
<div className={styles.icon}>
    <img src={Icon} alt="Icon"/>
</div>
        </div>
    )
}