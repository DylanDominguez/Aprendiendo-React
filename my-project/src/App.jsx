import { useState } from 'react';
import './App.css'
//TODO: Aqui se llama al componente
import Menu from './components/Menu';
import Condicional from './components/condicional/condicion';
import listas from './components/listas/listas';
import Listas from './components/listas/listas';

function App() {
  //let number = 0;
  {/* TODO: Para una variable reactiva que se refleje en la pagina */}
  {/* TODO: el cero dentro de useState(0) es como si inicializaras una variable*/}
  const [number, setNumber] = useState(0);
  const [mytext, setmytext] = useState("Tu nombre aquí");
  const [myvalue, setmyvalue] = useState("asfd");

  const handleInput = (e) => {
    console.log(e.target.value);
    setmyvalue(e.target.value);
  }

  {/* TODO: Una funcion que imprime en la consola un mensaje */}
  const saySomething = () => {
    console.log("Something");
  }

  const incrementNumber = () => {
    setNumber(number + 1);
    console.log(number);
  }

  return (
    <div>
      <Menu></Menu>
      <h1>Hola Mundo...</h1>
      <h2>h2 en App.jsx</h2>
      <br />

      {/* TODO: En el evento click, se llama a la funcion */}
      <div>
        <h2 onClick={saySomething}>Hola a Todos....</h2>
      </div>

      <br />
      <div>
        <h1>Ejemplo N°3</h1>
        <h2>Hola a todos</h2>
        <h3 onClick={incrementNumber}>Number: {number}</h3>
      </div>

      <br />
      <div>
        <h1>Ejemplo N°4</h1>
        <h2>{myvalue}</h2>
        <input type="text" placeholder={mytext} value={myvalue} onChange={handleInput}/>
      </div>

      <Condicional></Condicional>
      <Listas></Listas>
    </div>
  )
}

export default App;