import './App.css';
import { Logo } from './components/Logo';
import {ListaAtendimentos} from './components/ListaAtendimentos';
import {DetalhesAtendimento} from './components/DetalhesAtendimento';
import { CriacaoAtendimento } from './components/CriacaoAtendimento';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='apresentacao'>
          <p>
            Bem vindo ao Vet em Casa! O site que facilita o seu atendimento veterinário domiciliar
          </p>
          <Logo />
        </div>
        <div className='conteudo'>
          <div className='atendimentos'>
            <ListaAtendimentos />
            <DetalhesAtendimento/>

          </div>
        
          <CriacaoAtendimento/>

        </div>
        
      </header>
    </div>
  );
}

export default App;
