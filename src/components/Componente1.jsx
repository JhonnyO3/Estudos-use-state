import React from "react";
import { useState } from "react";
import Componente2 from "./Componente2";

export default ()=>{
    const [num, setNum] = useState(0)


return(
    <>
    <h2>Componente 1</h2>
    <Componente2>
        <p>ESSE TEXTO VEM DO COMPONENTE 1</p>
        <p>O numero {num} é
         { num % 2 == 0 ? " Par" : " Impar"}</p>
    </Componente2>
    <button onClick={()=> setNum(num + 1)}>Soma +1</button>
    </>
)


}