import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <img 
                src="/rotarylogo1.png"   
                    alt="Rotary Logo" 
                    width="225" 
                    height="70" 
                className="d-inline-block align-text-top"
                />
            
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <button type="button" class="btn btn-underline-hover">Inicio</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" class="btn btn-underline-hover">Quienes somos</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" class="btn btn-underline-hover">Calendario de Actividades</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" class="btn btn-underline-hover">Banco Ortopedico</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" class="btn btn-underline-hover">Concurso Literario</button>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            Intercambio de Jovenes
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Largo plazo</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Corto plazo</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Nuevas generaciones</a></li>
                        </ul>
                    </li>
                </ul>
                <button className="btn btn-outline-warning" type="submit">Contactanos</button>
            </div>
        </div>
    </nav>
);

export default Header;