import './App.css';
import { ComponenteFuncional } from './componentes/ComponenteFuncional';
import { ComponenteClasse } from './componentes/ComponenteClasse';
import { ComProps } from './componentes/ComProps';
import { Card } from './componentes/Cards';
import { MembroFamilia } from './componentes/MembroFamilia';
import { Familia } from './componentes/Familia';
import { ListaAlunos } from './componentes/ListaAlunos';
import { ManipulandoEventos } from './componentes/ManipulandoEventos';
import { Relogio } from './componentes/Relogio';
import { Contador } from './componentes/Contador';
import { ComponentesControlados } from './componentes/ComponentesControlados';
import { ParOuImpar } from './componentes/ParOuImpar';
import { Notificacoes } from './componentes/Notificacoes';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="cards">
        <Card titulo="JSX" cor="#688C45">
          <h1>Oi</h1>
          <p>Isso é um parágrafo</p>
          <a href="https://www.google.com.br">Isso é um link</a>
        </Card>
        <Card titulo="Componente funcional" cor="#D97941">   
          <ComponenteFuncional />
        </Card>
        <Card titulo="Componente de Classe" cor="#A65437">
          <ComponenteClasse />
        </Card>
        
        <Card titulo="Props" cor="#3B403A">
          <ComProps
            titulo="Testando as props" 
            conteudo="Isso foi enviado através de uma prop"
          />
          <ComProps />
        </Card>
        <Card titulo="Passando props para os filhos">
          <Familia sobrenome="Silva">
            <MembroFamilia nome="João"/>
            <MembroFamilia nome="Pedro"/>
            <MembroFamilia nome="Marcos"/>
          </Familia>
        </Card>
        <Card titulo="Lista de Alunos">
          <ListaAlunos />
        </Card>
        <Card titulo="Manipulando eventos">
          <ManipulandoEventos />
        </Card>
        <Card titulo="Estado">
          <Contador />
        </Card>
        <Card titulo="Ciclos de vida">
          <Relogio />
        </Card>
        <Card titulo="Componente controlados">
          <ComponentesControlados />
        </Card>
        <Card titulo="Renderização condicional">
          <ParOuImpar numero={10}/>
          <ParOuImpar numero={9}/>
          <hr />
          <Notificacoes notificacoes={["N1", "N2", "N3"]}/>
        </Card>
      </div>
    </div>
  );
}

export default App;