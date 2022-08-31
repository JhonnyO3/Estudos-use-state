import React from "react";

export default props=>{
    const frutas = ["maça", "banana", "limao"]


return(
    <>
    <h2>Componente 2</h2>
    <ul>
        {frutas.map((f, ind)=><li>{f+` é a fruta nº ${ind + 1}`}</li>)}
       
    </ul>


    {props.children}
    </>
)


}