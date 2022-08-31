import React from "react";
import { useState } from "react";


export default ()=>{

const [estado, setEstado] = useState()

function continuar() {
  setEstado("CONTINUAR")


  
}
function pare() {
    setEstado("PARAR")
    
  }


return(
    <>
    <h2 id="farol">{estado}</h2>
       
  
    
   
    
    <button onClick={continuar} id="button">CONTINUAR</button>
    <button onClick={pare} id="button">PARAR</button>
   
    </>
)


}