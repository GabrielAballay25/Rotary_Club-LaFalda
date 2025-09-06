import React from "react";
import CalendarioHero from "./CalendarioHero";


const Hero = () => {
  return (
    <section className="hero">
      {/* Encabezado */}
      <div className="hero-header">
        <h1>
          Unidos para <span>transformar</span> comunidades
        </h1>
        <p>
          Creamos oportunidades, inspiramos cambios y construimos un futuro más
          justo y solidario.
        </p>
        
      </div>

      {/* Bloque misión */}
      <div className="mission-box">
        <div className="mission-text">
          <h2>Nuestra mision</h2>
          <div className="underline"></div>
          <p>
            Rotary es una red mundial compuesta por más de 1,2 millones de vecinos, amigos, líderes y personas dedicadas a solucionar problemas,
            quienes ven un planeta en que las personas se unen y toman acción para generar un cambio perdurable en el mundo, 
            sus comunidades y en sí mismos.
          </p>
          <p>
            <em>Nuestra misión es brindar servicio a los demás, promover la integridad y fomentar la comprensión, la buena voluntad y 
            la paz entre las naciones a través de las actividades de compañerismo de nuestros líderes empresariales, profesionales y cívicos.</em>
          </p>
          <div className="underline"></div>
        </div>
        <div className="mission-image">
          <img
            src="/Img1Hero.jpg"
            alt="Nuestra misión"
          />
        </div>

        {/* Calendario de actividades */}
        
        <div className="calendariohero">
            <CalendarioHero />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
