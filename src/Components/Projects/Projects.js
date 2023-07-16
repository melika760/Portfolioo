import styles from "./Projects.module.css";
import Weather from "../../img/Weather.jpg";
import Todo from "../../img/Todo.jpg";
import Dictionary from "../../img/Dictionary.jpg";
export default function Projects(){
    return(<div className={styles.wraper}>
        <h2>Projects</h2>
<div className={styles.container}>
<div className={styles.Dictionary}>
<img src={Dictionary} alt="DictionaryApp"/>
</div>
<div className={styles.Weather}>
    <img src={Weather} alt="WeatherApp"/>
</div>
</div>
<div className={styles.container}>
<div className={styles.ToDo}>
<img src={Todo} alt="ToDoApp"/>
</div>
<div className={styles.Weather}>
    <img src={Weather} alt="FoodOrderApp"/>
</div>
</div>
        </div>
    )
}