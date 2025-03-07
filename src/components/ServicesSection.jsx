const ServicesSection = () => {
    return (
      <section className="py-10 sm:py-20">
        <h2 className="text-center text-caption font-caption text-verde tracking-widest">ATENCIÓN EN LA QUE PUEDES CREER</h2>
        <h2 className="text-center text-display-2 font-display text-azul-oscuro">Nuestros Servicios</h2>
        <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start px-4 lg:px-12 w-full">
          <div className="grid gap-4 w-full">
            <div className="p-6 rounded-lg flex flex-col lg:flex-row lg:items-center w-full">
              <div className="flex-1 text-center lg:text-left lg:ml-6">
                <p className="mt-2 text-title font-title">Pasión por Poner a los Pacientes en Primer Lugar</p>
                <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 text-caption font-title">
                  {[
                    "Pasión por la curación",
                    "Atención 5 estrellas",
                    "Nuestro Mejor Esfuerzo",
                    "Creemos en Nosotros",
                    "Un Legado de Excelencia",
                    "Siempre Atentos",
                  ].map((service, index) => (
                    <li key={index} className="flex items-center">
                      <img src="Resources/vignette-icon.svg" alt="Check" className="w-6 h-6 mr-2" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 lg:mt-0 lg:ml-6 w-full lg:w-1/4 flex-shrink-0">
                <img src="Resources/image-atencion.png" alt="Nuestros Servicios" className="w-full h-auto object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ServicesSection;