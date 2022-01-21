import logo from './logo.svg';
import './App.css';

function App() {
  // Al igual que en una función, podemos declararnos variables y utilizarlas en los componentes.
  let nombreUsuario = "Bryan";
  let saludo = <p>
    Este es mi primer código con JSX editado en<code> /App.js</code>
  </p>;
  let enlace = <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Documentación oficial de React
  </a>

  return (
    // JSX sería un lenguaje que une JS y XHTML
    // Esta función lo que hace es devolver un componenete, en este caso un div con una className App
    // En JSX, las clases para elementos html se esciben con className, class es na palabra reservada de JS, asique nos daría error.
    // className, serían las clases de HTML, por lo que esos nombres de clase, son los que usaremos en CSS para dar estilo
    // Hay que tener en cuenta que estamos escribiendo código JS.
    <div className="App">
      <header className="App-header">
        {/* Para utilizar comentrios dentro de JSX, se utiliza esta sintaxis */}
        {/* Para utilizar variables dentro de JSX, se escriben entre corchetes */}
        <h1>Mi nombre es {nombreUsuario}</h1>
        <img src={logo} className="App-logo" alt="logo" />

        {saludo}
        {enlace}

      </header>
    </div>
  );
}

export default App;
