import React from "react";
import py from '../../img/3x3.png';

const Card8 = () => {
    return( 
        <div class="cardExperiencia2">
            <img src={py} className="card-img" />
                <div class="card-content">
                   <h2 class="card-title">Software en python</h2>
                   <h5>Software desarrollado en el lenguaje python, que se enfoca en resolver ecuaciones 3x3</h5>
                    <p>2023</p>
               </div>
        </div>
    )
}

export default Card8