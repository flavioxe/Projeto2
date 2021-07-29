import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function UserList(){

    const [usuario, setUsuario] = useState([]); 
    const [showModal, setShowModal] = useState(false);
    const [selectClient, setSelectClient] = useState({})
    // Primeiro vem a variável criada dentro da state e depois a função usada pra jogar os valores para a variável
    const cards = [
        // valid card
        {
            id: 0,
            card_number: '1111111111111111',
            cvv: 789,
            expiry_date: '01/18',
        },
        // invalid card
        {
            id: 1,
            card_number: '4111111111111234',
            cvv: 123,
            expiry_date: '01/20',
        },
    ];

    // Consumo da API para listar usuários
    useEffect(() => { /*Evita loop, carrega apenas uma vez*/
        axios.get(`https://www.mocky.io/v2/5d531c4f2e0000620081ddce`)
        .then(res => {
            const user = res.data;
            setUsuario(user);
        })
    },[])

    // let mostraModal = () => {
    //     setShowModal(true)
    // }

    const botaoPagar = (item) => {
        setShowModal("block")
        setSelectClient(item)
    }

    
    return(
        <>  {/* tag de separação */}
            {/* Listagem de usuários */}
            {usuario.map((item) =>
                <div className="boxUser" >
                    <div>
                        <img src={item.img} alt="Imagem dousuário"/>
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
                        <button onClick={() => botaoPagar(item)}>Pagar</button>
                    </div>
                </div>
            )} 
            {/* fim da listagem dos usuários */}
            {/* Modal Payment */}
            <div className="backdrop" onClick={() => setShowModal(false)} style={{display: (showModal ? 'block' : 'none')}}>
            </div>
            <div className="modal" style={{display: (showModal ? 'block' : 'none')}}>
                    <div className="headerModal">
                       Pagamento para  
                                   <span>
                                    {selectClient.name}
                                   </span>
                    </div>
                    <div className="bodyModal">
                        <input className="inputModal" type="text" placeholder="R$ 0,00"></input>
                        <select className="selectModal">
                            {cards.map(
                                card => (
                                    <option value={card.id} key={card.id}>
                                        Cartão com final {card.card_number.substr(-4)}
                                    </option>
                                )
                            )}
                        </select>
                        <button className="buttonModal">Pagar</button>
                    </div>
            <div className="modalSucess">
                <div className="headerModal"> Recibo de Pagamento </div>
                <div className="bodyModalPayment"> O pagamento foi concluído com sucesso.</div>
                <div className="bodyModalPayment"> O pagamento <span className="spanError"> não </span> foi concluído com sucesso. </div>
            </div>
            </div>
        </> /* tag de separação */
    )
}

// https://www.digitalocean.com/community/tutorials/react-axios-react-pt - POST
// https://www.npmjs.com/package/react-infinite-scroll-component - INFINTE SCROLL

