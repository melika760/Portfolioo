import React,{Fragment} from "react";
import styles from "./AboutMe.module.css";
import Mypicture from "../img/linkdin profile-finaly.jpg";
import pdf from "../CV Melika Tafazoli.pdf";
import html from "../img/html.svg";
import CSS from "../img/css.svg";
import JS from "../img/javascript.svg";
import Reactimg from "../img/react.svg";
import Github from "../img/github.svg";
import Firebase from "../img/firebase.svg"
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
        <div className={styles.tool}>
        <div className={styles.content}>
    <h3><span className={styles.shadow}></span>My Skills💻</h3>
  <div className={styles.toolwraper}>
  <div className={styles.symbol}>
    <img src={html} alt="html element"/>
    <p>HTML</p>
   </div>
   <div className={styles.symbol}>
    <img src={CSS} alt="CSS element"/>
    <p>CSS</p>
   </div>
   <div className={styles.symbol}>
    <img src={JS} alt="JS element"/>
    <p>JavaScript</p>
   </div>
   <div className={styles.symbol}>
    <img src={Reactimg} alt="React element"/>
    <p>React</p>
   </div>
   <div className={styles.symbol}>
    <img src={Github} alt="GitHub element"/>
    <p>GitHub</p>
   </div>
   <div className={styles.symbol}>
    <img src={Firebase} alt="Firebase element"/>
    <p>Firebase</p>
   </div>
  </div>
   
</div>
</div>
        </Fragment>
    )
}