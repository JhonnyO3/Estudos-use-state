import React from 'react';
import { useState } from 'react';

// import { Container } from './styles';

export default function ExcStateProps(props) {
    return(
        <>
        <p>Utilizacao do Props! Componente Filho</p>
        <p>Soma: {props.soma}</p>
        <button onClick={()=> props.aumentar()}>clique para aumentar</button>
        </>
    )
}