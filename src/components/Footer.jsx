const Footer = () => {
    return (
      <footer className="bg-azul-oscuro text-white py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
            <div className="text-center md:text-left">
              <h3 className="font-title mb-4">Ubícanos en:</h3>
              <p className="mb-2 font-body">
                Calle Ladislao Cabrera,<br />
                Valdez N° 42 Urb.<br />
                Pablo VI
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-title mb-4">Contáctanos</h3>
              <p className="mb-2 font-body">WhatsApp: <strong>978 262 167</strong></p>
              <p className="mb-2 font-body">Email: <a href="mailto:informes@medisur.com.pe" className="text-celeste hover:text-celeste-claro">informes@medisur.com.pe</a></p>
            </div>
            <div className="text-center md:text-right">
              <h3 className="font-title mb-4">Síguenos en:</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="#" className="hover:text-celeste">
                  <img src="Resources/icon-facebook.svg" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="#" className="hover:text-celeste">
                  <img src="Resources/icon-instagram.svg" alt="Instagram" className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center border-t border-azul pt-4">
            <p className="font-body">&copy; 2025 MEDISUR Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;