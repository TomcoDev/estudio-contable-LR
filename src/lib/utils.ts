/**
 * Funciones de utilidad para el proyecto C.P. Laureana Reyes.
 * Centralizamos la lógica de procesamiento aquí para mantener los componentes limpios.
 */

/**
 * Genera una URL de WhatsApp válida con un mensaje pre-formateado.
 * @param phone Número de teléfono con código de área (ej: 595981730053)
 * @param name Nombre del cliente interesado
 * @param service Servicio por el cual consulta
 * @param message Consulta o mensaje adicional
 * @returns String con la URL completa para redirección
 */
export const generateWhatsAppLink = (
  phone: string,
  name: string,
  service: string,
  message: string
): string => {
  const intro = `Hola Lic. Laureana Reyes, soy ${name}.`;
  const subject = `Me pongo en contacto para consultar sobre el servicio de: *${service}*.`;
  const body = message ? `\n\nMi consulta es: ${message}` : "";

  // Unimos todo y codificamos para URL para evitar problemas con espacios y caracteres especiales
  const fullMessage = `${intro} ${subject}${body}`;
  const encodedMessage = encodeURIComponent(fullMessage);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

/**
 * Función opcional para formatear números de teléfono si vienen con caracteres extraños
 */
export const cleanPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, ""); // Remueve todo lo que no sea un dígito
};