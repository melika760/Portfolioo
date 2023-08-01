import React,{useRef,useState} from "react";
import styles from "./ContactMe.module.css";
import Button from "./UI/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";



export default function ContactMe(props){
    const [formValid,setformvalid]=useState({
       name:true,
       Email:true,
       Messages:true, 
    })
    const NameInput=useRef();
    const EmailInput=useRef();
    const Message=useRef();
    const isEmpty=(value)=> value.trim()==="";
    function submithandler(event){
        event.preventDefault()
        const enteredName=NameInput.current.value;
        const enteredEmail=EmailInput.current.value;
        const enteredMassage=Message.current.value;
        const ValidName=!isEmpty(enteredName);
        const ValidEmail=!isEmpty(enteredEmail) && enteredEmail.includes("@");
        const ValidMassage=!isEmpty(enteredMassage);
        setformvalid({
            name:ValidName,
            Email:ValidEmail,
            Messages:ValidMassage,
        })
        const formIsValid=ValidName && ValidEmail && ValidMassage
        if(!formIsValid){
            return;
        }
        props.onConfirm({
          name:enteredName,
         Email:enteredEmail,
           Messages:enteredMassage
        })
    }

    return(<div className={styles.wrap} id="Contact">
        <div className={styles.content}>
        <h3><span className={styles.shadow}></span>Let's Connect💌</h3>
        <p>If you ever want to grab a coffee or just want a quick chat,you can find me on social media or you can send me a message here!</p>
        <ul className={styles.socialIcon}>
            <li><a href="www.linkedin.com/in/melika-tafazoli">  <FontAwesomeIcon icon={faLinkedinIn} bounce style={{color: "#03f0f0",}} size="2x" /></a></li>
            <li><a href="https://github.com/melika760">  <FontAwesomeIcon icon={faGithub} spinPulse style={{color: "#03f0f0",}} size="2x" /></a></li>
            <li><a href="https://github.com/melika760">  <FontAwesomeIcon icon={faInstagram} bounce style={{color: "#03f0f0",}} size="2x" /></a></li>
        </ul>
        </div>
        <form className={styles.form} onSubmit={submithandler}>
            <div className={!formValid.name ? styles.invalid:""}>
            <label htmlFor="Name">
                <input type="text" placeholder="Your Name" ref={NameInput}/>
                {!formValid.name && <p>Please Enter YourName</p>}
            </label>
            </div>
            <div className={!formValid.Email ? styles.invalid:""}>
            <label htmlFor="Email">
                <input type="email" placeholder="YourEmail" ref={EmailInput}/>
                 {!formValid.Email && <p>Please Enter Your Email</p>}
            </label>
            </div>
            <div className={!formValid.Messages ? styles.invalidmsg:""}>
            <label>
            <textarea className={`${styles.message} `} placeholder="Message"ref={Message}></textarea>
             {!formValid.Email && <p>Please Enter Your Message</p>}
             </label>
             </div>
            <Button type="button">Send Message</Button>
        </form>

    </div>)
}