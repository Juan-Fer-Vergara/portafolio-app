import React from "react"; //importación por defecto
import wiki from '../../img/Wiki.png'; //importación de imagen para la card

const Card5 = () => { //creación de función para el componente
    return( 
        <div class="cardExperiencia"> {/*Creación de los contenedores con sus respectivas clases*/}
            <img src={wiki} className="card-img" />
                <div class="card-content">
                   <h2 class="card-title">Wiki Stud</h2>
                   <h5>Repositorio web desarrollado en Php para facilitar el repaso de temas especificos</h5>
                    <p>2022</p> {/*Insertar infromación para la caard*/}
               </div>
        </div>
    )
}

export default Card5 //exportación del componente