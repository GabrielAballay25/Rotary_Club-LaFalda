import React from 'react';

export  const AboutUs = () => {
    return (
        <section id="quienes-somos" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-rotary-blue mb-4">Quiénes Somos</h2>
                    <p className="max-w-3xl mx-auto text-lg text-gray-600">Somos una red de líderes que trabajamos para abordar los desafíos más urgentes de nuestra comunidad, promoviendo la paz, la educación y la salud.</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img src="https://placehold.co/600x400/eeeeee/333333?text=Nuestro+Equipo" alt="Miembros del club" className="rounded-lg shadow-xl w-full" />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Nuestro Compromiso en La Falda</h3>
                        <p className="text-gray-600 mb-4">
                            En el corazón del Valle de Punilla, el Rotary Club La Falda se dedica a desarrollar proyectos que tienen un impacto directo y positivo en nuestra gente. Desde campañas de salud hasta el fomento de la cultura local, nuestra misión es servir.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Nos enorgullece colaborar con instituciones locales, como en nuestro reciente proyecto de reciclaje de residuos electrónicos (RAEE) junto al Centro de Innovación Tecnológica, demostrando nuestro compromiso con el medio ambiente y un futuro sostenible.
                        </p>
                        <a href="#intercambio" className="bg-rotary-gold text-white font-bold py-3 px-6 rounded-full hover:bg-yellow-500 transition shadow-lg">
                            Únete a la Causa
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};