import React from 'react';

const ScheduleButton = () => {
  const handleClick = () => {
    window.open('/formulario-cita', '_blank'); // Abre en nueva pestaña
  };

  return (
    <button
      className="bg-azul text-white px-6 py-2 sm:px-10 sm:py-4 rounded-lg flex items-center shadow-lg font-button"
      onClick={handleClick}
    >
      Programar una Cita
      <img src="Resources/cita-icon.svg" alt="Icono" className="ml-4 sm:ml-9 h-6 sm:h-15 w-6 sm:w-15" />
    </button>
  );
};

export default ScheduleButton;
