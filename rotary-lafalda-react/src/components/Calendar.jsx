import React from 'react';

export const Calendar = () => {
    const events = [
        { date: "PRIMER Y TERCER MARTES DE CADA MES", title: "Reunión Semanal de Socios", location: "Sede del Club (Dirección a confirmar)", description: "Planificamos nuestros proyectos y compartimos ideas. ¡Nuevos miembros son bienvenidos a contactarnos!", icon: faMapMarkerAlt },
        { date: "AGOSTO 2025 (Fecha a confirmar)", title: "Lanzamiento Concurso Literario", location: "Anuncio en redes y medios locales", description: "Apertura de la 32ª edición de nuestro tradicional concurso de cuento breve. ¡Prepara tu obra!", icon: faBullhorn },
        { date: "SEPTIEMBRE 2025 (Fecha a confirmar)", title: "Jornada de Reforestación", location: "Zona de las Siete Cascadas", description: "Actividad comunitaria para plantar especies nativas y cuidar nuestro entorno natural. ¡Súmate!", icon: faTree }
    ];

    return (
        <section id="calendario" className="py-16 md:py-24 bg-gray-100">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-rotary-blue mb-12">Calendario de Actividades</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-left transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="text-rotary-gold text-sm font-bold mb-2">{event.date}</div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                            <p className="text-gray-600 mb-4"><FontAwesomeIcon icon={event.icon} className="mr-2" />{event.location}</p>
                            <p className="text-gray-600">{event.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};