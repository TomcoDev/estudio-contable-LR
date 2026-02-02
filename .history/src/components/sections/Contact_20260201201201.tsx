import React, { useState } from 'react';
import { CONTACT_DATA, SERVICES_DATA } from '../../constants';
import { ContactFormData } from '../../types';
import { generateWhatsAppLink } from '../../lib/utils';

/**
 * Contact Section
 * Permite a los usuarios enviar una consulta directa vía WhatsApp.
 */
const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = generateWhatsAppLink(
      CONTACT_DATA.phone,
      formData.name,
      formData.service || "Consulta General",
      formData.message
    );
    window.open(link, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Información de Contacto */}
        <div className="space-y-8">
          <div>
            <h2 className="text-gold font-sans font-bold text-sm uppercase tracking-widest mb-2">
              Contacto Directo
            </h2>
            <p className="text-4xl md:text-5xl text-pureWhite font-serif font-bold">
              ¿Listo para ordenar sus finanzas?
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <span>📞</span>
              </div>
              <div>
                <p className="text-sm text-professionalGray font-sans">Llámanos o escríbenos</p>
                <p className="text-pureWhite font-bold text-lg">{CONTACT_DATA.phoneDisplay}</p>
              </div>
            </div>
            {/* ... Otros items de contacto ... */}
          </div>
        </div>

        {/* Formulario */}
        <div className="bg-pureWhite p-8 rounded-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              {/* CORRECCIÓN 1: Se cambió </ts-ignore> por </label> */}
              <label htmlFor="name" className="block text-midnight font-bold font-serif mb-2 text-sm">
                Nombre Completo
              </label>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej: Juan Pérez"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-midnight focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-midnight font-bold font-serif mb-2 text-sm">
                Servicio de Interés
              </label>
              <select
                required
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-midnight focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold bg-white"
              >
                <option value="">Seleccione un servicio</option>
                {SERVICES_DATA.map(s => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-midnight font-bold font-serif mb-2 text-sm">
                Consulta Adicional
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-midnight focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-midnight text-pureWhite font-sans font-bold text-lg rounded-lg hover:bg-gold transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              Enviar a WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
  ); // CORRECCIÓN 2: Se cerró correctamente el paréntesis del return
};

export default Contact;