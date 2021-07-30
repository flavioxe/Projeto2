import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function UserList() {

    const [usuario, setUsuario] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectClient, setSelectClient] = useState({});
    const [card, setCard] = useState("");
    const [modalTransaction, setmodalTransaction] = useState("none");
    const [transaction, setTransaction] = useState("");
    const [payment, setPayment] = useState("");
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
    }, [])


    const botaoPagar = (item) => {
        setShowModal("block")
        setSelectClient(item)
    }

    const reset = () => {
        setPayment("")
        setCard("")
        setmodalTransaction("none")
    }

    const enviar = (evt) => {
        evt.preventDefault(evt)

        const paramJson = {
            "card_number": cards.card_number,
            "cvv": cards.cvv,
            "expiry_date": cards.expiry_date,
            "destination_user_id": selectClient.id,
            "value": payment
        }

        fetch("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989", {
            method: "post",
            body: paramJson
        })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                setShowModal("none")
                setmodalTransaction("block")

                if (data.status === "Aprovada") {
                    setTransaction("Pagamento Concluído Com Sucesso!")

                } else {
                    setTransaction("Pagamento NÃO foi Concluído com Sucesso!")
                }
            })
    }


    return (
        <>  {/* tag de separação */}
            {/* Listagem de usuários */}
            {usuario.map((item) =>
                <div className="boxUser" >
                    <div>
                        <img className="iconUser" src={item.img} alt="Imagem dousuário" />
                    </div>
                    <div className="infoUser">
                        <div>
                            Nome: {item.name}
                        </div>
                        <div>
                            ID: {item.id} - Username: {item.username}
                        </div>
                    </div>
                    <div>
                        <button className="buttonUser" onClick={() => botaoPagar(item)}>Pagar</button>
                    </div>
                </div>
            )}

            {/* Modal Payment */}
            <div className="backdrop" onClick={() => setShowModal(false)} style={{ display: (showModal ? 'block' : 'none') }}>
            </div>
            <div className="modal" style={{ display: (showModal ? 'block' : 'none') }}>
                <div className="headerModal">
                    <span className="titleModal"> Pagamento para  </span>
                    <span className="userNameModal">
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
                    <div className="buttonsDiv">
                        <button className="buttonModal" onClick={enviar}>Pagar</button>
                        {/* <button className="buttonModal" type="reset" onClick={() => setShowModal("none")}>Cancelar</button> */}
                    </div>
                </div>
            </div>
            {/* Modal do Recibo de Pagamento         */}
            <div className="modalTransaction" style={{ display: modalTransaction }} >
                <div className="headerModalPayment">
                    <span className="titleModal">Recibo de Pagamento</span>
                    <span className="closeModal" onClick={() => reset()}> X </span>
                </div>
                <div>
                    <span className="bodyModalPayment"> {transaction}</span>
                </div>
            </div>
        </> /* tag de separação */
    )
}

// https://www.digitalocean.com/community/tutorials/react-axios-react-pt - POST
// https://www.npmjs.com/package/react-infinite-scroll-component - INFINTE SCROLL

