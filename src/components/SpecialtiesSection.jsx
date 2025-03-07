const SpecialtiesSection = () => {
  const specialties = [
    "Medicina General",
    "Pediatria",
    "Ginecologia y Obstetricia",
    "Odontologia",
    "Cirugias Abdominales",
    "Traumatologia",
    "Cardiologia",
    "Rayos X",
    "Cirugias Oncologicas",
    "Urologia",
    "Farmacia",
    "Otras Especialidades",
  ];

  return (
    <section id="especialidades" className="py-12 mb-12">
      <h2 className="text-center text-display-2 font-display text-azul-oscuro">Nuestras Especialidades</h2>
      <div className="mt-8 mx-auto max-w-[992px] h-auto sm:h-[516px] px-4 text-body font-caption">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-center">
          {specialties.map((specialty, index) => (
            <div key={index} className="text-center p-6">
              <img src="Resources/especialidades-icon.svg" alt={specialty} className="mx-auto w-10 h-10" />
              <p className="mt-4 font-caption">{specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
