import './App.css';
import { BrowserRouter , Route , Routes , Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home/Home';
import Card1 from './components/Card/Card';
import Card2 from './components/Card/Card2';
import Card3 from './components/Card/Card3';
import Card4 from './components/Card/Card4';
import Card5 from './components/Card/Card5';
import Card6 from './components/Card/Card6';
import Card7 from './components/Card/Card7';
import Card8 from './components/Card/Card8';

{/* <Routes>
<Route path='/' element={<Home />} />
</Routes> */}

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <div className='navbar'>
              <Navbar />
            </div>
            <div className='container'>
              <div className='cardMe'>
                <Card1 />
              </div>
              <table className='tableEx'>
                <h1>Experiencia</h1>
                <tr>
                  <td>
                    <div className='cardExW'>
                      <Card5 />
                    </div>
                  </td>
                  <td>
                    <div className='cardExP'>
                      <Card8 />
                    </div>
                  </td>
                </tr>
              </table>
              {/* <div className='cardEd'>
              < Card4/>
              </div> */}
              {/* <div className='cardEx'>
                <Card5 />
              </div> */}
              {/* <div className='cardIn'>
                <Card6 />
              </div> */}
              {/* <div>
                <Card7 />
              </div> */}
            </div>
            <div class="languajesPor">
              <Card2 />  
            </div>
            
          </header>
        </div>
    </BrowserRouter>
  );
}

export default App;
