import '../../App.css';

function Listas() {

    const movies = ["Lord of the Rings", "Sector 9", "Avengers Doomsday"];
    const animals = [
        {
            id: 1,
            name: "dog",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE1auwjimtVx2z9X4hqirSLf49YS0OTuL90ouXBQT5l3df-Vh7j4IYNZHJ&s=10"
        },
        {
            id: 2,
            name: "cat",
            img: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/250px-Cat_November_2010-1a.jpg?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
        },
        {
            id: 3,
            name: "bird",
            img: "https://plus.unsplash.com/premium_photo-1724864863815-1469c8b74711?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cCVDMyVBMWphcm8lMjBkZSUyMGNvbG9yZXN8ZW58MHx8MHx8fDA%3D"
        },
    ]

    const HTMLanimals = animals.map(animal => {
        return (
            <div>
                <h2>{animal.name}</h2>
                <img src={animal.img} alt="Imagenes de animales" width="200"/>
            </div>
        );
    })
    
    return (
        <div>
            <h1>Renderizado de Listas</h1>

            {movies.map(movie => {
                return <p>{movie}</p>
            })}

            {HTMLanimals}
        </div>
    );
}

export default Listas;