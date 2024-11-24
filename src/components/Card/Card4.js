import React from "react";
import IERH from "../../img/Republica.webp";

const Card4 = () => {
    return( 
        <div class="cardEducacion">
            <img src={IERH} className="card-img2" />
                <div class="card-content">
                   <h2 class="card-title">I. E. República de Honduras</h2>
                   <h5>Bachiller técnico en desarrollo de software</h5>
                    <p>2010 - 2022</p>
               </div>
        </div>
    )
}

export default Card4