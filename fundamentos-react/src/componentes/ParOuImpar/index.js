export function ParOuImpar({ numero }) {
    // if (props.numero % 2 === 0) {
    //     return <p>O número {props.numero} é par</p>
    // }
    // return <p>O número {props.numero} é ímpar</p>
    const ehPar = numero % 2 === 0;
    return (
        <>
            {
                ehPar
                    ? <p>O número {numero} é par</p>
                    : <p>O número {numero} é ímpar</p>
            }
        </>
    );
}