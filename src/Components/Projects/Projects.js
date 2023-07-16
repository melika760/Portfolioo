import React,{useState} from "react";
import Modal from "./Modal";
import styles from "./Projects.module.css";
import Weather from "../../img/Weather.jpg";
import Todo from "../../img/Todo.jpg";
import Dictionary from "../../img/Dictionary.jpg";
export default function Projects(){
    const[Hover,SetHover]=useState(false)
    function hovering(){
        SetHover(true)
    }
function onhover(){
    SetHover(false)
}

    return(<div className={styles.wraper}>
        <h2>Projects</h2>
<div className={styles.container}>
<div className={styles.Dictionary} onMouseEnter={hovering} onMouseLeave={onhover}>
{Hover && <div className={styles.modal}><Modal title="WeatherApp" massage="Simply build by using React You can track daily weather" /></div>}
<img src={Dictionary} alt="DictionaryApp"/>
</div>
<div className={styles.Weather} onMouseEnter={hovering} onMouseLeave={onhover}>
{Hover && <div className={styles.modal}><Modal title="WeatherApp" massage="Simply build by using React You can track daily weather" /></div>}
    <img src={Weather} alt="WeatherApp"/>
</div>
</div>
<div className={styles.container}>
<div className={styles.ToDo} onMouseEnter={hovering} onMouseLeave={onhover}>
{Hover && <div className={styles.modal}><Modal title="WeatherApp" massage="Simply build by using React You can track daily weather" /></div>}
<img src={Todo} alt="ToDoApp"/>
</div>
foodorderapp
</div>
        </div>
    )
}