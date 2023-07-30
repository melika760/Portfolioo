import React,{useState,Fragment} from "react";
import FirstContent from "./Components/FirstContent";
import Projects from "./Components/Projects/Projects";
import Nav from "./Components/Nav";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Submit from "./Components/UI/Submit";
function App() {
  const [didSubmit, setDidSubmit] = useState(false);

const SendMessage=async(UserData)=>{
 await fetch("https://my-portfolio-6aea6-default-rtdb.europe-west1.firebasedatabase.app/Order.json",{
    method:"POST",
    body:JSON.stringify({
      use:UserData
    })
  })
  setDidSubmit(true)
}
  return (<Fragment>
    {!didSubmit&&
 <Fragment>
     <Nav/>
<FirstContent/>
<Projects/>
<AboutMe/>
<ContactMe onConfirm={SendMessage}/></Fragment>}
{didSubmit && <Submit/>}
    
</Fragment>
  

  );
}

export default App;
