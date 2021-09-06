export function Notificacoes(props) {
    return (
        <>
            {
                props.notificacoes.length > 0 && <p>Você tem {props.notificacoes.length} mensagens não lidas</p>
            }
        </>
    );
}