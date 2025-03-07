import React from 'react';
import ScheduleButton from './ScheduleButton';

const HeroSection = () => {
  return (
    <section className="bg-[url(Resources/medico-fondo.png)] bg-cover bg-center text-white h-[600px] flex flex-col items-start justify-center pl-4 sm:pl-10">
      <div className="text-left">
        <h2 className="text-caption tracking-widest">CUIDANDO TU SALUD</h2>
        <h1 className="text-azul-oscuro text-display-1 font-display mt-2 max-w-2xl leading-relaxed">Liderar el Camino en Excelencia Médica</h1>
      </div>
      <div className="mt-4 sm:mt-8">
        <ScheduleButton /> {/* Usa el botón actualizado */}
      </div>
    </section>
  );
};

export default HeroSection;