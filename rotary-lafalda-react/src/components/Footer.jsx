import React from 'react';

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-rotary-gold">Rotary Club La Falda</h4>
                        <p className="text-gray-400">Gente de acción, comprometida con el servicio en nuestra comunidad y el mundo.</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-rotary-gold">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#quienes-somos" className="text-gray-400 hover:text-white">Quiénes Somos</a></li>
                            <li><a href="#calendario" className="text-gray-400 hover:text-white">Calendario</a></li>
                            <li><a href="#intercambio" className="text-gray-400 hover:text-white">Intercambio</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-rotary-gold">Contacto</h4>
                        <p className="text-gray-400"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />La Falda, Córdoba, Argentina</p>
                        <p className="text-gray-400"><FontAwesomeIcon icon={faEnvelope} className="mr-2" /><a href="mailto:contacto@rotarylafalda.org" className="hover:text-white">contacto@rotarylafalda.org</a></p>
                        <div className="mt-4 flex justify-center md:justify-start space-x-4">
                            {/* <a href="#" className="text-gray-400 hover:text-white text-2xl"><FontAwesomeIcon icon={faFacebookSquare} /></a> */}
                            {/* <a href="#" className="text-gray-400 hover:text-white text-2xl"><FontAwesomeIcon icon={faInstagramSquare} /></a> */}
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
                    <p>&copy; 2025 Rotary Club La Falda. Todos los derechos reservados. Diseñado con <FontAwesomeIcon icon={faHeart} className="text-rotary-gold" />.</p>
                </div>
            </div>
        </footer>
    );
};
