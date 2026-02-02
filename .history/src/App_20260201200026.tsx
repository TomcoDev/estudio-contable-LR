import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Contact from './components/sections/Contact';

/**
 * Componente Principal - Landing Page C.P. Laureana Reyes
 * Orquesta la estructura de la página utilizando los colores y fuentes
 * definidos en tailwind.config.js.
 */
function App() {
  return (
    <div className="min-h-screen bg-pureWhite font-sans text-midnight selection:bg-gold selection:text-white">
      {/* Navegación fija en la parte superior */}
      <Navbar />

      <main>
        {/* Sección de Bienvenida e Impacto Visual */}
        <section id="inicio">
          <Hero />
        </section>

        {/* Sección de los 4 pilares de servicios definidos en constants */}
        <section id="servicios" className="py-20 bg-gray-50">
          <Services />
        </section>

        {/* Perfil profesional de la Lic. Laureana */}
        <section id="sobre-mi" className="py-20">
          <About />
        </section>

        {/* Formulario y enlaces de contacto/WhatsApp */}
        <section id="contacto" className="py-20 bg-midnight text-pureWhite">
          <Contact />
        </section>
      </main>

      {/* Pie de página con datos legales y redes */}
      <Footer />
    </div>
  );
}

export default App;