import '../../App.css';
import './condicional.css';

function Condicional() {

    const condition = false;

    return (
        <div>
            <h1>Renderizado Condicional</h1>
            {/* condition && <h2>La condicion se cumple</h2> */}
            {condition ? (<h2 id='azul'>La condicion se cumple</h2>) : (<h2 id='rojo'>La condicion NO se cumple</h2>)}
        </div>
    )
}

export default Condicional;