import { useState } from 'react';
import { NAV_LINKS, CONTACT_DATA } from '../../constants';
import type { NavLink } from '../../types';

/**
 * Navbar Component
 * Implementa diseño responsive con menú lateral (Sidebar) para móviles.
 * Utiliza la paleta: Midnight (#0D1126) y Gold (#A68B5B). 
 */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-pureWhite/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo y Nombre */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img 
              src="/icon2.png" 
              alt="Logo C.P. Laureana Reyes" 
              className="h-12 w-auto object-contain" 
            />
            <div className="flex flex-col leading-tight hidden sm:block">
              <span className="text-midnight font-serif font-bold text-lg uppercase tracking-wider">
                C.P. Laureana Reyes
              </span>
              <span className="text-professionalGray text-xs font-sans italic">
                {CONTACT_DATA.matricula} 
              </span>
            </div>
          </div>

          {/* Escritorio: Menú de Navegación */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.label}
                href={link.href}
                className="text-midnight hover:text-gold font-sans font-semibold transition-colors duration-300 tracking-wide text-sm"
              >
                {link.label} 
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-midnight text-pureWhite px-6 py-2 rounded-md font-sans font-bold hover:bg-gold transition-all duration-300 shadow-lg"
            >
              Agendar Cita
            </a>
          </div>

          {/* Móvil: Botón Hamburguesa */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-midnight p-2 focus:outline-none"
              aria-label="Abrir menú"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* --- SIDEBAR MÓVIL --- */}
      {/* Overlay de fondo */}
      <div 
        className={`fixed inset-0 bg-midnight/50 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />

      {/* Menú lateral */}
      <div className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-pureWhite shadow-2xl transform transition-transform duration-300 ease-in-out z-[60] md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full p-6">
          
          {/* Cabecera Sidebar */}
          <div className="flex justify-between items-center mb-10">
            <img src="/icon2.png" alt="Logo" className="h-10 w-auto" />
            <button onClick={toggleMenu} className="text-midnight p-2">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Enlaces Sidebar */}
          <div className="flex flex-col space-y-6 flex-grow">
            {NAV_LINKS.map((link: NavLink) => (
              <a
                key={link.label}
                href={link.href}
                onClick={toggleMenu}
                className="text-midnight text-xl font-serif font-bold border-b border-gray-100 pb-2 active:text-gold"
              >
                {link.label} 
              </a>
            ))}
          </div>

          {/* Footer del Sidebar (Lo que pediste) */}
          <div className="mt-auto pt-6 border-t border-gray-100">
            <p className="text-professionalGray text-sm font-sans mb-4">
              {CONTACT_DATA.email} 
            </p>
            <div className="flex space-x-4">
              <a 
                href={`https://wa.me/${CONTACT_DATA.phone}`} 
                target="_blank" 
                rel="noreferrer"
                className="text-midnight font-bold"
              >
                WhatsApp
              </a>
            </div>
            <p className="text-[10px] text-gray-400 mt-4 uppercase tracking-widest">
              © 2026 Estudio Contable Reyes
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;