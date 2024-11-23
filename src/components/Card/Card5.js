import React from "react";
import wiki from '../../img/Wiki.png';

const Card5 = () => {
    return( 
        <div class="cardExperiencia">
            <img src={wiki} className="card-img" />
                <div class="card-content">
                   <h2 class="card-title">Wiki Stud</h2>
                   <h5>Repositorio web desarrollado en Php para facilitar el repaso de temas especificos</h5>
                    <p>2022</p>
               </div>
        </div>
    )
}

export default Card5