import React,{Fragment} from "react";
import styles from "./AboutMe.module.css";
import Mypicture from "../img/linkdin profile-finaly.jpg";
import pdf from "../CV Melika Tafazoli.pdf"
export default function AboutMe(){
    return(<Fragment>
        <div className={styles.wraper}>
<div className={styles.content}>
    <h3><span className={styles.shadow}></span>AboutMe</h3>
    <p>Highly skilled and goal-oriented Front-End Developer with a strong problem-solving ability and a desire to learn and 
grow in a collaborative team environment. Graduated in Electrical Engineering, I have a proven track record of 
creating user-friendly, responsive, and visually appealing websites. Proficient in HTML, CSS, JavaScript, React, and 
other modern web technologies.</p>
<a className={styles.pdf} href={pdf} target="_blanket" rel="noreferrer">Check CV</a>
</div>
<div className={styles.image}>
<img src={Mypicture} alt="Me"/>
</div>
        </div>
        <div className={styles.content}>
    <h3><span className={styles.shadow}></span>My Tools</h3>
    <p>Highly skilled and goal-oriented Front-End Developer with a strong problem-solving ability and a desire to learn and 
grow in a collaborative team environment. Graduated in Electrical Engineering, I have a proven track record of 
creating user-friendly, responsive, and visually appealing websites. Proficient in HTML, CSS, JavaScript, React, and 
other modern web technologies.</p>
</div>

        </Fragment>
    )
}