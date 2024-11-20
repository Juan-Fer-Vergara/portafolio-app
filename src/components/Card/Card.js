import React from "react";
import me from "../../img/Pv.jpg";

const Card = () => {
    return( 
        <div class="card">
            <img src={me} className="card-img" />
                <div class="card-content">
                    <h2 class="card-title">Juan Fernando Vergara</h2>
                    <h6>Estudiante de tecnología en desarrollo de software</h6>
                    <h2 class="card-title">PERFIL</h2>
                    <p>Soy un estudiante de tecnología en <br />
                    desarrollo de software, trabajador también<br /> 
                    y demas roles en esta vida.</p>
                    <h2 class="card-title">CONTACTO</h2>
                    <p>Email: juanfervergara2017@gmail.com</p>
                    <p>Telefóno: 313 572 7365</p>
                </div>
        </div>
    )
}

export default Card