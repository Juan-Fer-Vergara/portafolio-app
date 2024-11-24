import React from "react"; //importación por defecto

const Card2 = () => { //creación de la función para el componnte
    return( 
        <div class="languajes"> {/*Creación del contenedor para los porcentajes de conocimiento de cada lenguaje con sus respectivas clases*/}
                <h1>Lenguajes</h1>
                <br />
                <h3>HTML</h3> {/*Container para HTML*/}
                <div class="progressBarHtml"> {/*Barra total de conocimiento*/}
                    <div class="progressHtml"></div> {/*Indicador de conocimiento*/}
                </div>
                <br />
                <h3>CSS</h3>
                <div className="progressBarCss">
                    <div className="progressCss"></div>
                </div>
                <br />
                <h3>Php</h3>
                <div className="progressBarPhp">
                    <div className="progressPhp"></div>
                </div>
                <br />
                <h3>Python</h3>
                <div className="progressBarPython">
                    <div className="progressPython"></div>
                </div>
                <br />
                <h3>javaScript</h3>
                <div className="progressBarJavaScript">
                    <div className="progressJavaScript"></div>
                </div>
                <br />
                <h3>SQl</h3>
                <div className="progressBarSQL">
                    <div className="progressSQL"></div>
                </div>
                <br />
        </div>
    )
}

export default Card2 //creación de la función para el componente