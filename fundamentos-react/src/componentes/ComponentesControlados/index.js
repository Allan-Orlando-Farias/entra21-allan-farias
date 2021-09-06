import React from "react";

export class ComponentesControlados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: "",
            sexo: ""
        }
    }

    handleChange = e => {
        const valor = e.target.value;
        const nome = e.target.name;

        this.setState({
            [nome]: valor
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input type="text" name="nome" onChange={this.handleChange} value={this.state.nome} />
                </label>
                <label>
                    E-mail:
                    <input type="email" name="email" onChange={this.handleChange} value={this.state.email}/>
                </label>
                <label>
                    Senha:
                    <input type="password" name="senha" onChange={this.handleChange} value={this.state.senha} />
                </label>
                <label>
                    <input type="radio" name="sexo" value="Feminino" onChange={this.handleChange} />
                    Feminino
                </label>
                <label>
                    <input type="radio" name="sexo" value="Masculino" onChange={this.handleChange} />
                    Masculino
                </label><br />
                <button>Enviar</button>
            </form>
        );
    }
}