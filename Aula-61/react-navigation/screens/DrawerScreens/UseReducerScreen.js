import React, { useReducer } from "react";
import { ScrollView, Text } from "react-native";

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'adicionar':
            return { count: state.count + 1 };
        case 'diminuir':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

export function UseReducerScreen() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ScrollView>
            <Text style={{ fontSize: 24, margin: 10 }}>
                O hook useReducer é usado para transições complexas de estado e estado.<br></br>
                Ele requer uma função redutor e um estado inicial como entrada, e retorna o estado atual e uma função de despacho como saída
            </Text>
            <Text style={{ fontSize: 24, marginLeft: 10 }}>Count: {state.count}</Text>
            <Text style={{ marginLeft: 10 }}>
                <button onClick={() => dispatch({ type: 'diminuir' })}>-</button>
                <button onClick={() => dispatch({ type: 'adicionar' })}>+</button>
            </Text>
        </ScrollView>
    );
}