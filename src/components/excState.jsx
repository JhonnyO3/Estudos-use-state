import React from 'react';
import { useState } from 'react';
import ExcStateProps from './excStateProps';

// import { Container } from './styles';

export default function ExcState() {
    const [atributo, setAtributo] = useState(0)
    let variavelComum = 5

    function somaState() {
        setAtributo(atributo + 5)
    }
    function resetaState() {
        setAtributo(0)
    }
    function subtraiState() {
        setAtributo(atributo - 5)
    }

  return (
    <>
    <p>FIXACAO DO USO DO STATE</p>
    <p>Variavel Comum: {variavelComum}</p>
    <p>UseState: {atributo}</p>
    <button onClick={()=> somaState()}>Somar</button>
    <button onClick={()=> subtraiState()}>Subtrair</button>
    <button onClick={()=> resetaState()}>Resetar</button>
    <ExcStateProps soma={atributo} aumentar={somaState}/>
    </>
  )
}

