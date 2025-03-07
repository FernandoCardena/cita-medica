import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormularioCita = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    genero: "masculino",
    email: "",
    celular: "",
    fecha: "",
    hora: "",
    especialidad: "medicina-general",
    mensaje: "",
  });

  const handleGoBack = () => {
    navigate("/");
  };

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar datos a json-server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5001/citas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Cita agendada con éxito");
        setFormData({
          nombre: "",
          genero: "masculino",
          email: "",
          celular: "",
          fecha: "",
          hora: "",
          especialidad: "medicina-general",
          mensaje: "",
        });
      }
    } catch (error) {
      console.error("Error al agendar la cita:", error);
    }
  };

  return (
    <section className="bg-[url('/Resources/bg-citas.png')] bg-cover bg-center text-white h-[600px] flex items-center justify-center mt-12">
      <div className="container mx-auto flex flex-col sm:flex-row items-center sm:items-start">
        {/* Contenedor izquierdo (Texto) */}
        <div className="w-full sm:w-1/2 pr-4 sm:pr-16 text-center sm:text-left">
          <h1 className="text-verde text-display-1 font-display mt-2">Agenda una Cita</h1>
          <h2 className="text-azul-oscuro font-body mt-4 leading-relaxed">
            Por favor, completa el formulario con tus datos para agendar tu cita. Nos pondremos en contacto contigo para confirmar la fecha y hora.
          </h2>
        </div>

        {/* Contenedor derecho (Formulario) */}
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0">
          <form onSubmit={handleSubmit} className="bg-azul p-4 sm:p-8 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-azul-oscuro">Nombre</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="w-full p-2 mt-1 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-azul-oscuro">Género</label>
              <select name="genero" value={formData.genero} onChange={handleChange} className="w-full p-2 mt-1 border rounded">
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-azul-oscuro">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 mt-1 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-azul-oscuro">Celular</label>
              <input type="tel" name="celular" value={formData.celular} onChange={handleChange} className="w-full p-2 mt-1 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-azul-oscuro">Fecha</label>
              <input type="date" name="fecha" value={formData.fecha} onChange={handleChange} className="w-full p-2 mt-1 border rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-azul-oscuro">Hora</label>
              <input type="time" name="hora" value={formData.hora} onChange={handleChange} className="w-full p-2 mt-1 border rounded" required />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm font-medium text-azul-oscuro">Especialidad</label>
              <select name="especialidad" value={formData.especialidad} onChange={handleChange} className="w-full p-2 mt-1 border rounded">
                <option value="medicina-general">Medicina General</option>
                <option value="pediatria">Pediatría</option>
                <option value="ginecologia">Ginecología y Obstetricia</option>
                <option value="odontologia">Odontología</option>
                <option value="traumatologia">Traumatología</option>
                <option value="cardiologia">Cardiología</option>
                <option value="urologia">Urología</option>
              </select>
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label className="block text-sm font-medium text-azul-oscuro">Mensaje (opcional)</label>
              <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} className="w-full p-2 mt-1 border rounded"></textarea>
            </div>
            <div className="col-span-1 sm:col-span-2 flex justify-between">
              <button type="button" onClick={handleGoBack} className="bg-azul-oscuro text-white px-4 py-2 rounded mr-2">
                Regresar
              </button>
              <button type="submit" className="bg-celeste text-white px-4 py-2 rounded hover:bg-celeste-oscuro">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormularioCita;
