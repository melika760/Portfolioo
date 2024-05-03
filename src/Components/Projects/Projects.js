
import Modal from "./Modal";
import styles from "./Projects.module.css";
import Weather from "../../img/Weather.jpg";
import Todo from "../../img/Untitled design (3).png";
import Dictionary from "../../img/Dictionary.jpg";
import FoodApp from "../../img/FoodAppjpg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function Projects(){
  
    return(<div className={styles.wraper} id="Projects">
        <div className={styles.heart}>  <FontAwesomeIcon icon={ faHeart } bounce  size="lg" style={{color: "#03f0f0",}}/></div>
      
        <h4>hover over any project to learn more!</h4>
<div className={styles.container}>
<div className={styles.ToDo}> <div className={styles.modal}><Modal title="Dominiques' Cafe" massage="I developed a React-based website incorporating Firebase for data management. Utilizing useContext, I efficiently stored and accessed data across components, including a shopping cart feature. To enhance performance, I implemented React Router and utilized React Lazy loading" link="https://dominique-5aac4.web.app/" />
</div>
<img src={Todo} alt="Dominiques' Cafe"/>
</div>
<div className={styles.FoodApp}> <div className={styles.modal}><Modal title="FoodApp" massage=" Implemented real-time menu updates and user-friendly customization. Enhanced the overall user experience for smooth and efficient ordering" link="https://foodorderappmel.netlify.app/"  />
</div>
<img src={FoodApp} alt="FoodApp"/>
</div>
</div>
<div className={styles.container}>
<div className={styles.Dictionary}>
<div className={styles.modal}><Modal title="Dictionary" massage="Proficiently developed a dictionary app using React, REST API integration, and Axios. The app enables users to search for word meanings and incorporates a voice feature for accurate pronunciation" link="https://musical-sorbet-7120c3.netlify.app/"/>
</div>
<img src={Dictionary} alt="DictionaryApp"/>
</div>
<div className={styles.Weather}>
 <div className={styles.modal}><Modal title="WeatherApp" massage="I built a weather app using React, REST API and Axios. The app allows users to track weather conditions in any location and provides a 5-day forecast. It also includes a dark mode feature for improved visibility." link="https://fanciful-bublanina-8bd2c6.netlify.app/" />
 </div>
    <img src={Weather} alt="WeatherApp"/>
</div>
</div>
        </div>
    )
}