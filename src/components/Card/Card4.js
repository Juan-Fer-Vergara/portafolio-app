import React from "react"; //importación por defecto
import IERH from "../../img/Republica.webp"; //importación de imagen para la card

const Card4 = () => { //creación de función para el componente
    return( 
        <div class="cardEducacion"> {/*Creación de los contenedores con sus respectivas clases*/}
            <img src={IERH} className="card-img2" /> {/*Uso de la imagen importada*/}
                <div class="card-content">
                   <h2 class="card-title">I. E. República de Honduras</h2>
                   <h5>Bachiller técnico en desarrollo de software</h5>
                    <p>2010 - 2022</p> {/*Insertar información para la card*/}
               </div>
        </div>
    )
}

export default Card4 //exportación del componente