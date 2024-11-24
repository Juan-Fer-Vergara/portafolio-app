import React from "react"; //importacion por defecto
import me from "../../img/Pv.jpg"; //importación de la imagen que va a necesitar la card

const Card = () => { //creación de la función para el componente
    return( 
        <div class="card"> {/*Creación de los contenedores con sus respectivas clases*/}
            <img src={me} className="card-img" /> {/*Uso de la imagen exportada para esta card*/}
                <div class="card-content">
                    <h3>Juan Fernando Vergara</h3>
                    <h5>Estudiante de tecnología en desarrollo de software</h5>
                    <h3>PERFIL</h3>
                    <h5>Soy un estudiante de tecnología en 
                    desarrollo de software, trabajador también
                    y demas roles en esta vida.</h5> {/*Incertamos información para la card*/}
                </div>
        </div>
    )
}

export default Card //exportamos el componente