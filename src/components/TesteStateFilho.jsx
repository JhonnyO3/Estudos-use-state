import React, { useState } from 'react';
import TesteState from './TesteState';

export default function TesteStateFilho(props) {

 
    
    return (
     <>
   
   
     <p>Valor de State do filho: {props.valor}</p>
     <button onClick={() => props.aumentar()}>Aumentar</button>
     
     </>
    )
}