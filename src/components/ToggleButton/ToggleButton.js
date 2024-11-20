import React, { useState } from 'react';

// function ToggleButton() {
//   // Declaramos una variable de estado booleana y su función para actualizarla
//   const [isActive, setIsActive] = useState(false);

//   // Función que cambia el estado al valor opuesto
//   const toggleState = () => {
//     setIsActive(prevState => !prevState);
//   };

//   return (
//     <div>
//       <p>El estado actual es: {isActive ? 'Activo' : 'Inactivo'}</p>
//       <button className='ToggleButton' onClick={toggleState}>
//         {isActive ? 'Desactivar' : 'Activar'}
//       </button>
//     </div>
//   );
// }

function ToggleButton() {
  // Inicializamos el estado con un color por defecto
  const [bgColor, setBgColor] = useState('#282c34');

  // Función para cambiar el color de fondo
  const changeColor = () => {
    // Cambia el color a un nuevo color (puedes usar una lógica diferente o aleatoria)
    setBgColor(bgColor === '#282c34' ? 'white' : '#282c34');
  };

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', padding: '20px' }}>
      <button onClick={changeColor}>Cambiar color de fondo</button>
    </div>
  );
}

export default ToggleButton;