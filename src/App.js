import React,{Fragment} from "react";
import FirstContent from "./Components/FirstContent";
import Projects from "./Components/Projects/Projects";
import Nav from "./Components/Nav";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
function App() {
  return (
    <Fragment>
      <Nav/>
<FirstContent/>
<Projects/>
<AboutMe/>
<ContactMe/>
    </Fragment>
  );
}

export default App;
