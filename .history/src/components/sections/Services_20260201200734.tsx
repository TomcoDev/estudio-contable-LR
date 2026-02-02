import { SERVICES_DATA } from '../../constants';
import { Service } from '../../types';

/**
 * Services Section
 * Renderiza los 4 pilares de servicios contables definidos en las constantes.
 * Diseño de cuadrícula responsive con efectos de hover.
 */
const Services = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Encabezado de la Sección */}
      <div className="text-center mb-16">
        <h2 className="text-gold font-sans font-bold text-sm uppercase tracking-[0.3em] mb-4">
          Nuestras Soluciones
        </h2>
        <p className="text-3xl md:text-5xl text-midnight font-serif font-bold">
          Especialidades Contables y Tributarias
        </p>
        <div className="w-24 h-1 bg-gold mx-auto mt-6 rounded-full" />
      </div>

      {/* Grid de Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES_DATA.map((service: Service) => (
          <div 
            key={service.id}
            className="group bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Cabecera de la Card */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-midnight text-gold rounded-lg flex items-center justify-center font-serif text-2xl font-bold group-hover:bg-gold group-hover:text-midnight transition-colors duration-300">
                {service.title.charAt(0)}
              </div>
              <h3 className="text-xl md:text-2xl text-midnight font-serif font-bold group-hover:text-gold transition-colors">
                {service.title}
              </h3>
            </div>

            {/* Descripción */}
            <p className="text-professionalGray font-sans leading-relaxed mb-8">
              {service.description}
            </p>

            {/* Lista de Características (Features) */}
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 text-sm text-midnight/80 font-sans">
                  <svg 
                    className="w-5 h-5 text-gold flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Nota pie de servicios extraída de los anuncios */}
      <div className="mt-16 p-8 bg-midnight rounded-2xl text-center">
        <p className="text-pureWhite font-sans italic text-lg">
          "Contabilidad para empresas unipersonales y sociedades con rigor técnico y transparencia."
        </p>
      </div>
    </div>
  );
};

export default Services;