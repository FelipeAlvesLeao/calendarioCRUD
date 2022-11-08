import "./App.css";
import Calendar from "./components/CalendarPage";
import Formulario from "./components/formulario";
import Lista from "./components/lista";
import PopUp from "./components/PopUp";
import { useState } from "react";
function App() {
  
  const [btnPopup, setBtnPopup] = useState(false);
  return (
    <>
      <div className="App">
        <Calendar> </Calendar>
        <button className="btn-popup" onClick={() => setBtnPopup(true)}>Criar novo componente</button>
        <PopUp click={btnPopup}>
          <Formulario></Formulario>
        </PopUp>
        <Lista></Lista>
      </div>
    </>
  );
}

export default App;
