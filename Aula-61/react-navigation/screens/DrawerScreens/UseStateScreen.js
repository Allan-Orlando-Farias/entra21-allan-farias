import React, { useState } from "react";
import { ScrollView, Text } from "react-native";

export function UseStateScreen({ contagemInicial = 0 }) {
    const [count, setCount] = useState(contagemInicial);

    return (
        <ScrollView>
            <Text style={{ fontSize: 24, margin: 10 }}>
                É usado para declarar uma variável state, o único argumento usado é o state inicial.
                E ela sempre irá retornar um par de valores sendo eles o state atual e uma função para atualizar o state
            </Text>
            <Text style={{ fontSize: 20, padding: 5, marginLeft: 10 }}>
                Count: {count}
            </Text>
            <Text style={{ marginLeft: 10 }}>
                <button onClick={() => setCount(contagemInicial)}>Reset</button>
                <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            </Text>
            <Text style={{ fontSize: 22 }}>
                <br></br><br></br>
                Use o useState caso:<br></br>
                A) JavaScript primitivos como estado<br></br>
                B) transições simples de estado<br></br>
                C) lógica de negócios dentro do seu componente<br></br>
                D) diferentes propriedades que não mudam de forma correlata e podem ser gerenciadas por ganchos de uso múltiplos<br></br>
                E) estado co-localizado ao seu componente<br></br>
                F) uma pequena aplicação mas as linhas estão embaçadas aqui
            </Text>
        </ScrollView>
    );
}