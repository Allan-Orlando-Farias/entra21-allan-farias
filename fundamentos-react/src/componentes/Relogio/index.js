import React from "react";

export class Relogio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horario: new Date()
        }
    }
    
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ horario: new Date() });
        }, 1000);
    }

    shouldComponentUpdate() {
        if (this.state.horario.getSeconds() % 2 === 0) {
            return false;
        }
        return true;
    }

    componentDidUpdate() {
        console.log("O estado relógio atualizou");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return <p>Horário atual: {this.state.horario.toLocaleTimeString()}</p>
    }
}