import React from "react"; //importación por defecto
import Button from '../ToggleButton/ToggleButton' //importación del botón para cambio de color del fondo

const Navbar = () => { //creación de la función para el componente
    return (
        <div class="menu"> {/*Creación del container para la card con sus respectivas clases*/}
            <a href="">Home</a>
            <a href="">Conocimientos</a>
            <a href="">Proyectos</a>
            <a href="">Estudios</a>
            <a href="">Contactame</a>
            {/* <Button /> */} {/*Insertación de botones para el navbar*/}
        </div>
    )
}

export default Navbar //exportación del componente