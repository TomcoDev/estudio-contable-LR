// Agregamos la palabra clave 'type' para que Vite sepa que solo son interfaces
import type { NavLink, Service, ContactInfo } from '../types';

/**
 * Enlaces de navegación para el Navbar y Footer
 */
export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
];

/**
 * Información de contacto oficial
 */
export const CONTACT_DATA: ContactInfo = {
  name: 'Lic. Laureana Reyes',
  phone: '595981730053',
  phoneDisplay: '(595) 981 730053',
  email: 'laureyes0407@gmail.com',
  address: 'Asunción, Paraguay',
  matricula: 'C.P. Matriculada'
};

/**
 * Listado de servicios profesionales
 */
export const SERVICES_DATA: Service[] = [
  {
    id: 'gestion-ruc-ips',
    title: 'Gestión de RUC & IPS',
    description: 'Trámites integrales ante la DNIT y entes reguladores para el inicio de sus actividades.',
    features: [
      'Apertura de RUC',
      'Inscripción en IPS',
      'Ministerio del Trabajo, Empleo y Seguridad Social',
      'Desbloqueos y Cancelación de RUC'
    ]
  },
  {
    id: 'declaraciones-juradas',
    title: 'Declaraciones Juradas',
    description: 'Liquidación y presentación experta de impuestos nacionales para evitar multas.',
    features: [
      'IVA (Impuesto al Valor Agregado)',
      'IRE (Impuesto a la Renta Empresarial)',
      'IDU (Impuesto a los Dividendos y Utilidades)',
      'IRP (Impuesto a la Renta Personal)'
    ]
  },
  {
    id: 'contabilidad-integral',
    title: 'Contabilidad Integral',
    description: 'Llevado de libros y estados financieros con rigor técnico y transparencia.',
    features: [
      'Empresas Unipersonales',
      'Sociedades Comerciales',
      'Balances Anuales',
      'Libros Contables Obligatorios'
    ]
  },
  {
    id: 'administrativo-fiscal',
    title: 'Gestión Administrativa',
    description: 'Mantenimiento preventivo y correctivo de su situación fiscal ante la DNIT.',
    features: [
      'Actualización de datos (Persona Física y Jurídica)',
      'Baja de Timbrados',
      'Gestión de Documentos Fiscales',
      'Asesoría Tributaria Permanente'
    ]
  }
];