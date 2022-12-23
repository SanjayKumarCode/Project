import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import CompoMessa from "./Components/CompoMessa";
import CompoMessa10 from "./Components/CompoMessa10";
import CompoMessa2 from "./Components/CompoMessa2";
import CompoMessa5 from "./Components/CompoMessa5";
import CompoMessa6 from "./Components/CompoMessa6";
import CompoMessa7 from "./Components/CompoMessa7";
import CompoMessa8 from "./Components/CompoMessa8";
import CompoMessa9 from "./Components/CompoMessa9";
import CompoMessage from './Components/CompoMessage';
import Navbar from "./Components/Navbar";
// import Popup from "./Components/Popup";


function App() {
  return (
    <div className="App">
  
    {/* <Popup/> */}
    <Navbar/>
      <CompoMessage/>
      <CompoMessa/>
      <CompoMessa2/>
      <CompoMessa5/>
      <CompoMessa6/>
      <CompoMessa7/>
      <CompoMessa8/>
      <CompoMessa9/>
      <CompoMessa10/>
    </div>
  );
}

export default App;
