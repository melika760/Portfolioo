import styles from "./AboutMe.module.css";
import Mypicture from "../img/linkdin profile-finaly.jpg";
import Button from "./UI/Button";
import pdf from "../CV Melika Tafazoli.pdf"
export default function AboutMe(){
    function openCV(){
       window.open({pdf})
    }
    return(
        <div className={styles.wraper}>
<div className={styles.image}>
<img src={Mypicture} alt="Me"/>
</div>
<div className={styles.content}>
    <h3><span className={styles.shadow}></span>AboutMe</h3>
    <p>Highly skilled and goal-oriented Front-End Developer with a strong problem-solving ability and a desire to learn and 
grow in a collaborative team environment. Graduated in Electrical Engineering, I have a proven track record of 
creating user-friendly, responsive, and visually appealing websites. Proficient in HTML, CSS, JavaScript, React, and 
other modern web technologies.</p>
<Button type="button" onclick={openCV}>Check CV</Button>
</div>


        </div>
    )
}