import React from "react";
import me from "../../img/Pv.jpg";

const Card = () => {
    return( 
        <div class="card">
            <img src={me} className="card-img" />
                <div class="card-content">
                    <h3>Juan Fernando Vergara</h3>
                    <h5>Estudiante de tecnología en desarrollo de software</h5>
                    <h3>PERFIL</h3>
                    <h5>Soy un estudiante de tecnología en 
                    desarrollo de software, trabajador también
                    y demas roles en esta vida.</h5>
                    <h3>CONTACTO</h3>
                    <h5>Email: juanfervergara2017@gmail.com<br/>
                    Telefóno: 313 572 7365</h5>
                </div>
        </div>
    )
}

export default Card