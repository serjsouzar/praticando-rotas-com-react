import logo from './logo.svg';
import './App.css';

export default function Sobre() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1><strong className='nameTitle'>Sergio Souza </strong></h1>
            <h2><div className='nameTitle'>Testando implementação de rotas com React</div></h2>
            <h3 className="App-title">Página de Sobre</h3>
          </div>  
      </header>
    </div>
  );
}
