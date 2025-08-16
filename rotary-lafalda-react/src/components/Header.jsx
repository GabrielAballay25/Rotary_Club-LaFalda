import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: '#quienes-somos', label: 'Quiénes Somos' },
        { href: '#calendario', label: 'Calendario' },
        { href: '#banco-ortopedico', label: 'Banco Ortopédico' },
        { href: '#concursos', label: 'Concursos Literarios' },
        { href: '#intercambio', label: 'Intercambio de Jóvenes' },
    ];

    return (
        <header className="bg-white shadow-md fixed w-full top-0 z-50">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="#inicio" className="flex items-center space-x-2">
                    <img src="https://placehold.co/40x40/005daa/f7a81b?text=R" alt="Logo Rotary" className="rounded-full" />
                    <span className="text-xl font-bold text-rotary-blue font-lato">Rotary Club <span className="text-gray-600">La Falda</span></span>
                </a>

                <div className="hidden lg:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-gray-600 hover:text-rotary-blue transition font-lato">{link.label}</a>
                    ))}
                </div>

                <a href="https://wa.me/5493548000000?text=Hola!%20Me%20contacto%20desde%20la%20página%20web%20del%20Rotary%20Club%20La%20Falda." target="_blank" rel="noopener noreferrer" className="hidden lg:flex items-center justify-center bg-rotary-gold text-white font-bold py-2 px-4 rounded-full hover:bg-yellow-500 transition-transform transform hover:scale-105 shadow-lg">
                    Contacto
                </a>

                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-rotary-blue focus:outline-none">
                        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="2x" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200">
                    {navLinks.map((link) => (
                         <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="block py-3 px-6 text-gray-600 hover:bg-gray-100 hover:text-rotary-blue">{link.label}</a>
                    ))}
                    <div className="p-4">
                        <a href="https://wa.me/5493548000000?text=Hola!%20Me%20contacto%20desde%20la%20página%20web%20del%20Rotary%20Club%20La%20Falda." target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-rotary-gold text-white font-bold py-3 px-4 rounded-full hover:bg-yellow-500 transition shadow-lg">
                            Contactar por WhatsApp
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};