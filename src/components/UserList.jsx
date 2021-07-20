import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function UserList(){

    // Consumo da API para listar usuários
    const [usuario, setUsuario] = useState([]);
    
    useEffect(() => {
        axios.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
        .then(res => {
            const person = res.data;
            setUsuario(person);
        })
    },[])
    
    return(
        <>
            {/* Listagem de usuários */}
            {usuario.map((item) =>
                <div className="boxUser" >
                    <div>
                        <img src={item.img} alt="Imagem usuário"/>
                    </div>
                    <div className="divText">
                        <div>
                            Nome: {item.name}
                        </div>
                        <div>
                            ID: {item.id} - Username: {item.username}
                        </div>
                    </div>
                    <div>
                        <button>Pagar</button>
                    </div>
                </div>
            )}
            
            
        </>
    )
}