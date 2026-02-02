import { NAV_LINKS, CONTACT_DATA, SERVICES_DATA } from '../../constants';
import type { NavLink, Service } from '../../types';

/**
 * Footer Component
 * Provee un cierre profesional con acceso rápido a servicios y contacto.
 * Estilizado con Midnight (#0D1126) y acentos en Gold (#A68B5B).
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-midnight text-pure-white pt-16 pb-8 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Columna 1: Branding y Propósito */}
          <div className="flex flex-col space-y-4">
            <img 
              src="/iconmain.png" 
              alt="Logo Completo Laureana Reyes" 
              className="h-full w-auto object-contain" 
            />
            <p className="text-professional-gray text-sm font-sans leading-relaxed">
              Excelencia contable y asesoría tributaria integral en Paraguay. 
              Comprometidos con la transparencia y el crecimiento de su empresa o patrimonio personal.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-gold font-serif font-bold text-lg mb-6">Navegación</h4>
            <ul className="flex flex-col space-y-3">
              {NAV_LINKS.map((link: NavLink) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-pure-white hover:translate-x-1 transition-all duration-200 inline-block text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Servicios Destacados */}
          <div>
            <h4 className="text-gold font-serif font-bold text-lg mb-6">Servicios</h4>
            <ul className="flex flex-col space-y-3">
              {SERVICES_DATA.slice(0, 4).map((service: Service) => (
                <li key={service.id} className="text-gray-300 text-sm">
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Información de Contacto */}
          <div>
            <h4 className="text-gold font-serif font-bold text-lg mb-6">Contacto Directo</h4>
            <ul className="flex flex-col space-y-4 text-sm text-gray-300 font-sans">
              <li className="flex items-start gap-3">
                <span className="text-gold">📍</span>
                {CONTACT_DATA.address} 
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">📞</span>
                <a href={`tel:${CONTACT_DATA.phone}`} className="hover:text-pure-white">
                  {CONTACT_DATA.phoneDisplay} 
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-gold">✉️</span>
                <a href={`mailto:${CONTACT_DATA.email}`} className="hover:text-pure-white">
                  {CONTACT_DATA.email} 
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea Divisoria y Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-professionalGray uppercase tracking-widest">
          <p>
            © {currentYear} {CONTACT_DATA.name}. Todos los derechos reservados. 
          </p>
          <p className="font-sans text-pure-white">
            Desarrollado por 
            <a 
              href="https://github.com/TomcoDev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:underline ml-1"
            >
              Néstor Martínez
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;