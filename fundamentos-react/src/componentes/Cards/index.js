import React from 'react';
import './styles.css'

export function Card(props) {
    const cardStyle = {
        backgroundColor: props.cor,
        borderColor: props.cor
    }
    return(
        <div className="card" style={cardStyle}>
            <h2 className="card-titulo" style={{ fontSize: "30px"}}>{ props.titulo }</h2>
            <div className="card-conteudo">{ props.children }</div>
        </div>
    );
}

// export class Card extends React.Component {
//     render() {
//         const cardStyle = {
//             backgroundColor: this.props.cor,
//             borderColor: this.props.cor
//         }
    
//         return (
//             <div className="card" style={cardStyle}>
//                 <h2 className="card-titulo" style={{ fontSize: "30px"}}>{ this.props.titulo }</h2>
//                 <div className="card-conteudo">{ this.props.children }</div>
//             </div>
//         );
//     }
// }

Card.defaultProps = {
    cor: "#730202"
}