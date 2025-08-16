import React from 'react';

export const OrthopedicBank = () => {
    const items = ["Sillas de ruedas", "Andadores y bastones", "Muletas", "Camas ortopédicas", "Botas Walker y otros"];

    return (
        <section id="banco-ortopedico" className="py-16 md:py-24 bg-white">
             <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="md:w-1/2">
                        <img src="https://placehold.co/600x400/d4e09b/333333?text=Banco+Ortopédico" alt="Banco ortopédico" className="rounded-lg shadow-xl w-full" />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-rotary-blue mb-4">Banco Ortopédico Solidario</h2>
                        <p className="text-gray-600 mb-4">
                           Facilitamos el acceso a equipamiento ortopédico de forma gratuita y temporal a quienes lo necesiten en nuestra comunidad. Nuestro objetivo es brindar apoyo y mejorar la calidad de vida durante los procesos de recuperación.
                        </p>
                        <h4 className="font-bold text-lg text-gray-800 mb-3">¿Qué elementos disponemos?</h4>
                        <ul className="list-none space-y-2">
                            {items.map((item, index) => (
                                <li key={index} className="flex items-center"><FontAwesomeIcon icon={faCheckCircle} className="text-rotary-gold mr-3" />{item}</li>
                            ))}
                        </ul>
                         <p className="text-gray-600 mt-6">
                           Si necesitas un elemento o deseas donar equipamiento en buen estado, no dudes en contactarnos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
