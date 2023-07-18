
import Modal from "./Modal";
import styles from "./Projects.module.css";
import Weather from "../../img/Weather.jpg";
import Todo from "../../img/Todo.jpg";
import Dictionary from "../../img/Dictionary.jpg";
export default function Projects(){

    function DictionaryLink(){
        window.open("https://musical-sorbet-7120c3.netlify.app/","_blank","noreferrer")
    }
  
    function WeatherApp(){
        window.open("https://fanciful-bublanina-8bd2c6.netlify.app/")
    }
    function ToDoapp(){
        window.open("https://guileless-cranachan-184a79.netlify.app/")
    }
    return(<div className={styles.wraper}>
        <h4>hover over any project to learn more!</h4>
<div className={styles.container}>
<div className={styles.Dictionary}>
<div className={styles.modal}><Modal title="Dictionary" massage="Proficiently developed a dictionary app using React, REST API integration, and Axios. The app enables users to search for word meanings and incorporates a voice feature for accurate pronunciation" onclick={DictionaryLink}/>
</div>
<img src={Dictionary} alt="DictionaryApp"/>
</div>
<div className={styles.Weather}>
 <div className={styles.modal}><Modal title="WeatherApp" massage="I built a weather app using React, REST API and Axios. The app allows users to track weather conditions in any location and provides a 10-day forecast. It also includes a dark mode feature for improved visibility." onclick={WeatherApp} />
 </div>
    <img src={Weather} alt="WeatherApp"/>
</div>
</div>
<div className={styles.container}>
<div className={styles.ToDo}> <div className={styles.modal}><Modal title="ToDoApp" massage="Expertly created a to-do list app using React, employing clean and efficient code. The app allows users to easily manage their tasks, add new items, mark them as completed, and remove them as needed. Its intuitive user interface ensures a seamless and organized task management experience." onclick={ToDoapp} />
</div>
<img src={Todo} alt="ToDoApp"/>
</div>
foodorderapp
</div>
        </div>
    )
}