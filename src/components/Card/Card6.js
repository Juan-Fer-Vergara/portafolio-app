import React from "react"; //importación por defecto

const Card6 = () => { //creación de función para el componente
    return( 
        <div class="cardIntereses">
                <div class="card-content"> {/*Creación de los contenedores con sus respectivas clases*/}
                    <h2 class="card-title">INTERESES</h2>
                        <ul>
                            <li>Motores</li>
                            <li>Desarrollo web</li>
                            <li>Bases de datos</li>
                            <li>Graffiti</li>
                            <li>Viajar</li>
                        </ul> {/*Insertar informaciójn para la card*/}
                </div>
        </div>
    )
}

export default Card6 //exportación del componente