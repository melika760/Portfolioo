import styles from "./FirstContent.module.css";
import Icon from "../img/—Pngtree—career woman playing laptop on_5315939.png"
export default function FirstContent(){
    return(
        <div className={styles.container}>
<div className={styles.content}>
    <h3><span className={styles.shadow}></span>
        Hello!I am Melika</h3>
    <p>Innovative Front End Developer with a passion for crafting immersive user experiences. Combining meticulous attention to detail with advanced technical prowess, I design sleek and intuitive interfaces that captivate users and drive engagement. Proficient in HTML, CSS, JavaScript, and modern frameworks, I excel in developing responsive and cross-browser compatible websites. By pushing the boundaries of digital experiences and staying up-to-date with the latest industry trends, I bring a dynamic and visionary approach to front end development. Let's collaborate to bring your digital vision to life and create impactful online solutions</p>
</div>
<div className={styles.icon}>
    <img src={Icon} alt="Icon"/>
</div>
        </div>
    )
}