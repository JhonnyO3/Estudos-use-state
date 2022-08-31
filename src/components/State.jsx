import React, { useState } from 'react';

export default function State() {

    let center = {
        textAlign: 'center',
        
    }
    function getElementLogin() {
        let login = document.getElementById("login")
        let senha = document.getElementById("senha")
        setUusario(login.value)
        setSenha(senha.value)

    }
    function getElementSenha() {

    }

    const [usuario, setUusario] = useState()
    const [senha, setSenha] = useState()



    return (
        <div style={center}>

        <form action="get">
            <p>Digite seu Login</p>
            <input id='login' type="text" />
            <br />
            <br />
            <p>Digite sua Senha</p>
            <input onChange={(e)=> setSenha(e.target.value)} id='senha' type="text" />
            
        </form>
            <button onClick={getElementLogin}>Capturar informações</button>
            <p>Seu Login: {usuario}</p>
            <p>Sua Senha: {senha}</p>
        </div>
        
       

    )
}


