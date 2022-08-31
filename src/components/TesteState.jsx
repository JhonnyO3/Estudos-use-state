import React, { useState } from 'react';
import TesteStateFilho from './TesteStateFilho';


export default function TesteState(){

    const [valorState, setValorState] = useState(0)
    let valorVariavel = 5
    
    function aumentar() {
        
        setValorState(valorState + 5)
        valorVariavel+=5
    }
    return (
        <>
        <input type="text" id='caixa' />
        <p>ValorState: {valorState}</p>
        <p>ValorVariavel: {valorVariavel}</p>
        <button onClick={()=> aumentar()}>Aumentar</button>

        <TesteStateFilho valor={valorState} aumentar={aumentar}/>


        </>
    )

}