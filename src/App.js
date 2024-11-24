import './App.css'; //importo los estilos de App.css que ya estan exportados por defecto
import { BrowserRouter , Route , Routes , Router } from 'react-router-dom'; //importo el browser router desde el package.json
import Navbar from './components/Navbar/Navbar' //importo el menu creado como componente
import Card1 from './components/Card/Card';
import Card2 from './components/Card/Card2';
import Card3 from './components/Card/Card3';
import Card4 from './components/Card/Card4';
import Card5 from './components/Card/Card5';
import Card6 from './components/Card/Card6';
import Card7 from './components/Card/Card7';
import Card8 from './components/Card/Card8';
import Card9 from './components/Card/Card9'; //importo las cards creadas como componentes

function App() { //funcion app creada por defecto
  return (
    <BrowserRouter>
         <div className="App"> {/*clase y estilos predeterminados desde la creacion de la app een React */}
          <header className="App-header">
            <div className='navbar'> {/*Contenedor para el componente Navbar*/}
              <Navbar />
            </div>
          </header>
          <body>
            <div className='container'> {/*Contenedor para las primeras Cards*/}
              <div className='cardMe'> {/*Contenedor para la card con mi info y foto*/}
                <Card1 />
              </div>
              <table className='tableEx'> {/*Tabla para organizar mis anteriores proyectos*/}
                <h1>Experiencia</h1>
                <tr>
                  <td>
                    <div className='cardExW'> {/*Contenedor para mi proyecto WikiStud*/}
                      <Card5 />
                    </div>
                  </td>
                  <td>
                    <div className='cardExP'> {/*Contenedor para mi proyecto 3x3*/}
                      <Card8 />
                    </div>
                  </td>
                </tr>
              </table>

            </div>
            <div className='container2'> {/*Contenedor para las cards del medio*/}
              <div class="languajesPor"> {/*Contenedor para la card con mi nivel en cada lenguaje*/}
                <Card2 />  
              </div>
              <table className='educacion'> {/*Tabla para organizar mi educación*/}
                <h1>Educación</h1>             
                <tr>
                  <td>
                    <div className='cardEd'> {/*Contenedor para mis estudios de bachiller técnico*/}
                      <Card4 />
                    </div>
                  </td>                   
                  <td>
                    <div className='cardEd'> {/*Contenedor para mi estudio en la U*/}
                      <Card9 />
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div className='container3'> {/*Contenedor para las cards del final*/}
              <div className='cardIn'> {/*Contenedor para la card con mis intereses*/}
                <Card6 />
              </div>
              <div className='cardHa'> {/*Contenedor para la card con mis habilidades*/}
                <Card7 />
              </div>
            </div>
          </body>
          <footer className="footer"> {/*footer para el contactame*/}
            <Card3 />
          </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
