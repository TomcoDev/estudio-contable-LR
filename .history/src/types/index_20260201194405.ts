/**
 * Definición de interfaces para el proyecto C.P. Laureana Reyes.
 * Siguiendo la metodología de Tipado Estricto.
 */

// Define la estructura de los enlaces de navegación del Navbar
export interface NavLink {
  label: string;
  href: string;
}

// Define la estructura de cada servicio contable
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[]; // Lista de puntos clave (ej: "IVA", "IRE", etc.)
}

// Define la estructura para los datos del formulario de contacto
export interface ContactFormData {
  name: string;
  service: string;
  message: string;
}

// Define la estructura de la información de contacto global
export interface ContactInfo {
  phone: string;
  phoneDisplay: string; // Formato legible (595) 981...
  email: string;
  address: string;
  name: string;
  matricula?: string; // Opcional por si queremos mostrarla
}