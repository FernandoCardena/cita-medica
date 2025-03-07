const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        <h1 className="text-display-1 font-display">
          <span className="text-azul">MEDI</span><span className="text-verde">SUR</span>
        </h1>
        <div className="flex space-x-4 sm:space-x-8">
          <div className="flex items-center space-x-2">
            <img src="Resources/phone-icon.svg" alt="Teléfono" className="w-6 h-6 sm:w-10 sm:h-10" />
            <div>
              <div className="text-azul-oscuro font-body text-sm sm:text-base">EMERGENCIAS</div>
              <div className="text-verde font-body text-sm sm:text-base">903-048-168</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="Resources/schedule-icon.svg" alt="Horario" className="w-6 h-6 sm:w-10 sm:h-10" />
            <div>
              <div className="text-azul-oscuro font-body text-sm sm:text-base">NUESTRO HORARIO</div>
              <div className="text-verde font-body text-sm sm:text-base">07:00 - 20:00</div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <img src="Resources/location-icon.svg" alt="Ubicación" className="w-6 h-6 sm:w-10 sm:h-10" />
            <div>
              <div className="text-azul-oscuro font-body text-sm sm:text-base">UBICACIÓN</div>
              <div className="text-verde font-body text-sm sm:text-base">C. Cabrera N°42</div>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-azul h-16 flex items-center">
        <div className="container mx-auto flex justify-around sm:justify-center space-x-4 sm:space-x-7 text-white h-full">
          <div className="font-body leading-none flex items-center cursor-pointer" onClick={() => scrollToSection("formulario-citas")}>Citas</div>
          <div className="font-body leading-none flex items-center cursor-pointer" onClick={() => scrollToSection("acerca-de-nosotros")}>Acerca de Nosotros</div>
          <div className="font-body leading-none flex items-center cursor-pointer" onClick={() => scrollToSection("especialidades")}>Especialidades</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
