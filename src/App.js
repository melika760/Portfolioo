import React,{Fragment} from "react";
import FirstContent from "./Components/FirstContent";
import Projects from "./Components/Projects/Projects";
import Nav from "./Components/Nav";
import AboutMe from "./Components/AboutMe";
function App() {
  return (
    <Fragment>
      <Nav/>
<FirstContent/>
<Projects/>
<AboutMe/>
    </Fragment>
  );
}

export default App;
