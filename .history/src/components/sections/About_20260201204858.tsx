import { CONTACT_DATA } from '../../constants';

/**
 * About Section - Perfil Profesional
 * Resalta la trayectoria y valores de la Lic. Laureana Reyes.
 * Utiliza Midnight (#0D1126) y Gold (#A68B5B) para transmitir prestigio. 
 */
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Columna de Imagen/Visual */}
        <div className="w-full lg:w-1/2 relative">
          {/* Marco decorativo */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold z-0" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-midnight z-0" />
          
          <div className="relative z-10 bg-gray-100 rounded-2xl overflow-hidden aspect-square flex items-center justify-center shadow-2xl">
            {/* Si tienes una foto de ella, reemplaza este <img>. Si no, el logo queda genial */}
            <img 
              src="/icon2.png" 
              alt="Perfil Profesional" 
              className="w-2/3 h-auto opacity-20 grayscale" 
            />
            <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
              <p className="text-midnight font-serif italic text-xl md:text-2xl">
                "Compromiso con la transparencia y el crecimiento de su patrimonio."
              </p>
            </div>
          </div>
        </div>

        {/* Columna de Texto */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-2">
            <h2 className="text-gold font-sans font-bold text-sm uppercase tracking-widest">
              Trayectoria y Confianza
            </h2>
            <p className="text-4xl md:text-5xl text-midnight font-serif font-bold">
              {CONTACT_DATA.name}
            </p>
            <p className="text-xl text-gold font-sans font-semibold italic">
              Contadora Pública - {CONTACT_DATA.matricula}
            </p>
          </div>

          <div className="space-y-4 text-professionalGray font-sans leading-relaxed text-lg">
            <p>
              Con una sólida formación en Análisis y Gestión Contable, me dedico a brindar 
              soluciones integrales en el ámbito tributario y administrativo en Paraguay.
            </p>
            <p>
              Mi enfoque se centra en la precisión técnica y el cumplimiento normativo, 
              asegurando que tanto empresas unipersonales como sociedades operen con 
              total tranquilidad ante la SET y otros entes reguladores.
            </p>
          </div>

          {/* Valores Clave */}
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="border-l-2 border-gold pl-4">
              <h4 className="text-midnight font-bold font-serif">Ética Profesional</h4>
              <p className="text-sm text-professionalGray">Manejo confidencial y riguroso de su información.</p>
            </div>
            <div className="border-l-2 border-gold pl-4">
              <h4 className="text-midnight font-bold font-serif">Actualización</h4>
              <p className="text-sm text-professional-gray">Al día con las últimas normativas tributarias (IRE, IRP, IVA).</p>
            </div>
          </div>

          <div className="pt-8">
             <p className="text-midnight font-bold flex items-center gap-2">
               <span className="w-10 h-[1px] bg-midnight inline-block"></span>
               Excelencia en Asesoría Tributaria
             </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;