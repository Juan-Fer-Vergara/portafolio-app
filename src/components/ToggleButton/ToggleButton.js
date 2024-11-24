import React, { useState } from "react"; //importación por defecto

const ToggleBackgroundButton = () => { //creación de la función para el componente
  const [isDefaultGradient, setIsDefaultGradient] = useState(true);

  const handleToggle = () => {
    setIsDefaultGradient(!isDefaultGradient);

    document.body.style.background = isDefaultGradient
      ? "linear-gradient(45deg, #1e3c72, #2a5298)" // Gradiente alternativo
      : "linear-gradient(45deg, #363636, #444444, #6e6e6e)"; // Gradiente original
  };

  return (
    <button
      onClick={handleToggle}
      style={{
        backgroundColor: "#444",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginTop: "20px",
      }}
    >
      Cambiar tema
    </button>
  );
};

export default ToggleBackgroundButton; //exportación del componente
