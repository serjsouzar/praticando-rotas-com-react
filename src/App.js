import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1><strong className='nameTitle'>Sergio Souza </strong></h1>
          <h2><div className='nameTitle'>Testando implementação de rotas com React</div></h2>
          <div id='oblique'>Keep evolving</div>
          </p>
        
        <a
          className="App-link"
          href="http://localhost:3000/sobre"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sobre
        </a>
       
        <a
          className="App-link"
          href="https://twitter.com/serjsouza_"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </header>
    </div>
  );
}

