import React, { useState } from 'react';
import { CONTACT_DATA, SERVICES_DATA } from '../../constants';
import { ContactFormData } from '../../types';
import { generateWhatsAppLink } from '../../lib/utils';

/**
 * Contact Section
 * Permite a los usuarios enviar una consulta directa vía WhatsApp.
 * Utiliza los colores Midnight (#0D1126) y Gold (#A68B5B) para el formulario.
 */
const Contact = () => {
  // Estado para manejar los campos del formulario
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
    // Generar el link de WhatsApp con los datos del formulario
    const link = generateWhatsAppLink(
      CONTACT_DATA.phone,
      formData.name,
      formData.service || "Consulta General",
      formData.message
    );
    // Abrir en una nueva pestaña
    window.open(link, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Columna 1: Información de Contacto Directo */}
        <div className="space-y-8">
          <div>
            <h2 className="text-gold font-sans font-bold text-sm uppercase tracking-widest mb-2">
              Contacto Directo
            </h2>
            <p className="text-4xl md:text-5xl text-pureWhite font-serif font-bold">
              ¿Listo para ordenar sus finanzas?
            </p>
            <p className="mt-4 text-professionalGray text-lg font-sans">
              Estamos listos para asesorarle en la apertura de su RUC, 
              liquidación de impuestos y gestión administrativa integral.
            </p>
          </div>

          <div className="space-y-6">
            {/* Ítem: Teléfono */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-midnight transition-all">
                <span className="text-xl">📞</span>
              </div>
              <div>
                <p className="text-sm text-professionalGray font-sans">Llámanos o escríbenos</p>
                <p className="text-pureWhite font-bold text-lg">{CONTACT_DATA.phoneDisplay}</p>
              </div>
            </div>

            {/* Ítem: Email */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-midnight transition-all">
                <span className="text-xl">✉️</span>
              </div>
              <div>
                <p className="text-sm text-professionalGray font-sans">Correo electrónico</p>
                <p className="text-pureWhite font-bold text-lg">{CONTACT_DATA.email}</p>
              </div>
            </div>

            {/* Ítem: Ubicación */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-midnight transition-all">
                <span className="text-xl">📍</span>
              </div>
              <div>
                <p className="text-sm text-professionalGray font-sans">Ubicación</p>
                <p className="text-pureWhite font-bold text-lg">{CONTACT_DATA.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna 2: Formulario Interactivo */}
        <div className="bg-pureWhite p-8 rounded-2xl shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo Nombre */}
            <div>
              <label htmlFor="name" className="block text-midnight font-bold font-serif mb-2 text-sm">Nombre Completo</ts-ignore>
              <input
                required
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ej: Juan Pérez"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-midnight focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all"
              />
            </div>

            {/* Campo Servicio */}
            <div>
              <label htmlFor="service" className="block text-midnight font-bold font-serif mb-2 text-sm">Servicio de Interés</label>
              <select
                required
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-midnight focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all bg-white"
              >
                <option value="">Seleccione un servicio</option>
                {SERVICES_DATA.map(s => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
              </select>
            </div>

            {/* Campo Mensaje */}
            <div>
              <label htmlFor="message" className="block text-midnight font-bold font-serif mb-2 text-sm">Consulta Adicional (Opcional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="¿En qué podemos ayudarle hoy?"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 text-midnight focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all resize-none"
              ></textarea>
            </div>

            {/* Botón de Envío */}
            <button
              type="submit"
              className="w-full py-4 bg-midnight text-pureWhite font-sans font-bold text-lg rounded-lg hover:bg-gold transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              <span>Enviar a WhatsApp</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
          </form>
        </div>

      </div>
    </div>