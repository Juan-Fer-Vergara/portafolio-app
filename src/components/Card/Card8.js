import React from "react"; //importción por defecto
import py from '../../img/3x3.png'; //importación de la imagen para la card

const Card8 = () => { //creación de función para el componente
    return( 
        <div class="cardExperiencia2"> {/*Creación de los contenedores con sus respectivas clases*/}
            <img src={py} className="card-img" />
                <div class="card-content">
                   <h2 class="card-title">Software en python</h2>
                   <h5>Software desarrollado en el lenguaje python, que se enfoca en resolver ecuaciones 3x3</h5>
                    <p>2023</p> {/*Insertar información para la card*/}
               </div>
        </div>
    )
}

export default Card8 //exportación del componente