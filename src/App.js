import React,{Fragment} from "react";
import FirstContent from "./Components/FirstContent";
import Projects from "./Components/Projects/Projects";
import Nav from "./Components/Nav";
function App() {
  return (
    <Fragment>
      <Nav/>
<FirstContent/>
<Projects/>
    </Fragment>
  );
}

export default App;
