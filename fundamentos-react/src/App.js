import './App.css';
import { ComponenteFuncional } from './componentes/ComponenteFuncional';
import { ComponenteClasse } from './componentes/ComponenteClasse';

function App() {
  return (
    <div className="App">
      <h1>Oi</h1>
      <p>Isso é um parágrafo</p>
      <a href="https://www.google.com.br">Isso é um link</a>
      <ComponenteFuncional />
      <ComponenteClasse />
    </div>
  );
}

export default App;
