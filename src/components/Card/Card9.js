import React from "react"; //importación por defecto
import IUPB from "../../img/IUPB.jpg"; //importación de la imagen para la card

const Card9 = () => {
    return( 
        <div class="cardEducacion2"> {/*Creación de los contenedores con sus respectivas clases*/}
            <img src={IUPB} className="card-img3" />
                <div class="card-content">
                   <h2 class="card-title">I. U. Pascual Bravo</h2>
                   <h5>Tecnólogo en desarrollo de software</h5>
                    <p>2023 - Actualidad</p> {/*Insertar información para la card*/}
               </div>
        </div>
    )
}

export default Card9 //exportación del componente