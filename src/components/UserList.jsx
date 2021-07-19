import React, {Component} from 'react';
//import ReactDOM from 'react-dom';

export default class UserList extends Component {
    state = {
        data: []
    }

    async componentDidMount() {
        const api = 'https://www.mocky.io/v2/5d531c4f2e0000620081ddce';

        const response = await fetch(api);
        console.log(response)
        
        const body = await response.json();
        console.log(body);

        this.setState({data: body});

    }
    
    render(){
        return (
            <div className="boxUser">
                <img alt="icon" href="#"></img>
                <div className="divText">
                    <p>Usuário</p>
                    <p>{JSON.stringify(this.state.data)}</p>
                </div>
                <button>Pagar</button>
            </div>
        )
    }
}