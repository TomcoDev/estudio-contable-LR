import { CONTACT_DATA } from '../../constants';
import { generateWhatsAppLink } from '../../lib/utils';

/**
 * Hero Section
 * Primera impresión del sitio. Presenta la propuesta de valor y 
 * un Call to Action (CTA) directo a WhatsApp.
 */
const Hero = () => {
  // Generamos el link de WhatsApp usando nuestra utilidad
  const whatsappUrl = generateWhatsAppLink(
    CONTACT_DATA.phone,
    "un cliente potencial",
    "Asesoría Contable Integral",
    "Hola Lic. Laureana, vi su página web y me gustaría agendar una consulta."
  );

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-pureWhite">
      {/* Decoración de fondo sutil (Círculo Gold desenfocado) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-midnight/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Bloque de Texto */}
          <div className="order-2 lg:order-1 text-center lg:text-left space-y-8">
            <div className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-sans font-bold text-xs uppercase tracking-widest border border-gold/20">
              {CONTACT_DATA.matricula}
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-midnight leading-tight">
              Excelencia en <br />
              <span className="text-gold italic">Gestión Contable</span>
            </h1>

            <p className="text-professionalGray text-lg md:text-xl font-sans max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Servicio de Contabilidad en General y Asesoría Tributaria. 
              Brindamos soluciones precisas para empresas unipersonales, 
              sociedades y personas físicas en Paraguay.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-midnight text-pureWhite px-8 py-4 rounded-lg font-sans font-bold text-lg hover:bg-gold hover:-translate-y-1 transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                <span>Agendar Consulta</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a 
                href="#servicios"
                className="px-8 py-4 rounded-lg font-sans font-bold text-lg text-midnight border-2 border-midnight/10 hover:border-gold hover:text-gold transition-all duration-300 flex items-center justify-center"
              >
                Ver Servicios
              </a>
            </div>

            {/* Datos rápidos debajo de los botones */}
            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-professionalGray font-sans">
                <span className="text-gold font-bold">✓</span> IVA, IRE, IRP
              </div>
              <div className="flex items-center gap-2 text-sm text-professionalGray font-sans">
                <span className="text-gold font-bold">✓</span> Apertura de RUC
              </div>
              <div className="flex items-center gap-2 text-sm text-professionalGray font-sans">
                <span className="text-gold font-bold">✓</span> Gestión de IPS
              </div>
            </div>
          </div>

          {/* Bloque de Imagen / Logo */}
          <div className="order-1 lg:order-2 flex justify-center items-center relative">
            {/* El logo principal que me pasaste */}
            <div className="relative p-8 bg-white/50 rounded-2xl backdrop-blur-sm border border-gray-100 shadow-2xl">
              <img 
                src="/iconmain.png" 
                alt="Logo Laureana Reyes" 
                className="max-h-[300px] md:max-h-[450px] w-auto object-contain transform hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;