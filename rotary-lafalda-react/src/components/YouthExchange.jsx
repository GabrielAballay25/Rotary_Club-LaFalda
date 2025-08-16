import React from 'react';
export const YouthExchange = () => {
    return (
        <section id="intercambio" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-rotary-blue mb-4">Comité de Intercambio de Jóvenes</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">Abrimos las puertas del mundo a los jóvenes de nuestra comunidad, fomentando la paz y el entendimiento cultural a través de experiencias inolvidables.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg border-t-4 border-rotary-blue"><h3 className="text-2xl font-bold text-gray-800 mb-4">Intercambios Largos</h3><p className="text-gray-600">Vive un año escolar completo en otro país. Asiste a clases, aprende un nuevo idioma y conviértete en un ciudadano del mundo. Una experiencia que cambiará tu vida para siempre.</p></div>
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg border-t-4 border-rotary-gold"><h3 className="text-2xl font-bold text-gray-800 mb-4">Intercambios Cortos</h3><p className="text-gray-600">Participa en campamentos, pasantías o estadías familiares de varias semanas a tres meses. Ideal para vivir una inmersión cultural durante las vacaciones.</p></div>
                    <div className="bg-gray-50 p-8 rounded-lg shadow-lg border-t-4 border-rotary-blue"><h3 className="text-2xl font-bold text-gray-800 mb-4">Nuevas Generaciones</h3><p className="text-gray-600">Para jóvenes de 18 a 30 años. Programas personalizados enfocados en el desarrollo profesional, servicio humanitario y capacitación en liderazgo a nivel internacional.</p></div>
                </div>
                <div className="text-center mt-12">
                     <a href="https://wa.me/5493548000000?text=Hola!%20Quisiera%20más%20información%20sobre%20los%20programas%20de%20intercambio." target="_blank" rel="noopener noreferrer" className="bg-rotary-blue text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-800 transition-transform transform hover:scale-105 shadow-xl">
                        Consultar sobre Intercambios
                    </a>
                </div>
            </div>
        </section>
    );
};