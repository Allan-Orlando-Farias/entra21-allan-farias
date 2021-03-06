import React from "react";

export class Contador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
            texto: "+"
        }
    }
    
    incrementar = () => {
        this.setState(prevState => ({ 
            contador: prevState.contador + 1,
            texto: "+"
        }));
    }

    decrementar = () => {
        this.setState(prevState => ({ 
            contador: prevState.contador - 1 ,
            texto: "-"
        }));
    }

    render() {
        return (
            <>
                <h2>Contador: {this.state.contador}</h2>
                <button onClick={this.incrementar}>+</button>
                <button onClick={this.decrementar}>-</button>
                <p>{this.state.texto}</p>
            </>
        );
    }
}