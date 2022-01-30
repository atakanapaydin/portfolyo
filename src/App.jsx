import Topbar from "./components/topbar/topbar";
import Intro from "./components/intro/intro";
import Portfolyo from "./components/portfolyo/portfolyo";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
import "./app.scss";
import Menu from "./components/menu/menu";
import {useState} from "react";
  
function App() {
  const [menuOpen,setmenuOpen] = useState(false);
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <div className="sections">
        <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
        <Intro />
        <Portfolyo />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
