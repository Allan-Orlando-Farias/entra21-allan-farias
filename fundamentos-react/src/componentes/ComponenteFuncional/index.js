import './styles.css'

export function ComponenteFuncional() {
    const valor = 20 * 10 / 2;

    console.log(`O valor é ${valor}`);

    return (
        <div className="container-funcional">
            <h2>Esse é um componente funcional</h2>
            <p>Um componente pode ter várias tags dentro dele</p>
            <p>O resultado de 20 * 10 / 2 = {valor}</p>
        </div>
    );
};