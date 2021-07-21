import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function UserList(){

    // Consumo da API para listar usuários
    const [usuario, setUsuario] = useState([]); 
    const [showModal, setShowModal] = useState(false);
    // Primeiro vem a variável criada dentro da state e depois a função usada pra jogar os valores para a variável
    
    useEffect(() => {
        axios.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
        .then(res => {
            const user = res.data;
            setUsuario(user);
        })
    },[])

    let mostraModal = (e) => {
        console.log(e.target.dataset.item)
        setShowModal(true)
    }
    
    return(
        <>  {/* tag de separação */}
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
                        <button onClick={(e) => mostraModal(e, item)}>Pagar</button>
                    </div>
                </div>
            )}
                <div className="backdrop" onClick={() => setShowModal(false)} style={{display: (showModal ? 'block' : 'none')}}>
                <div className="modal" style={{display: (showModal ? 'block' : 'none')}}>
                </div>

            </div>
        </> /* tag de separação */
    )
}