import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
          alt="Modista trabajando"
          className={styles.heroImage}
        />
        <div className={styles.heroText}>
          <h1>Modista a Medida</h1>
          <p>
            Ropa personalizada, arreglos y confección con pasión y experiencia.<br />
            ¡Haz realidad la prenda de tus sueños!
          </p>
          <a
            href="#contacto"
            className={styles.ctaButton}
          >
            Solicita tu prenda
          </a>
        </div>
      </section>

      {/* Sobre mí */}
      <section className={styles.sobreMi}>
        <h2>Sobre mí</h2>
        <p>
          Soy modista profesional con más de 30 años de experiencia en corte, confección y arreglos de ropa. Mi pasión es crear prendas únicas y ayudar a que cada persona se sienta especial con lo que viste.
        </p>
      </section>

      {/* Servicios */}
      <section className={styles.servicios}>
        <h2>Servicios</h2>
        <ul>
          <li>Confección de ropa a medida</li>
          <li>Personalización de prendas (bordados, detalles únicos)</li>
          <li>Arreglos y ajustes (cierres, dobladillos, entalles, etc.)</li>
          <li>Trajes y vestidos para ocasiones especiales</li>
        </ul>
      </section>

      {/* Galería */}
      <section className={styles.galeria}>
        <h2>Galería de trabajos</h2>
        <div className={styles.galeriaGrid}>
          <img src="https://images.unsplash.com/photo-1469398715555-76331a6c7df2?auto=format&fit=crop&w=400&q=80" alt="Vestido a medida" />
          <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80" alt="Detalle de costura" />
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80" alt="Arreglo de traje" />
        </div>
      </section>

      {/* Testimonios */}
      <section className={styles.testimonios}>
        <h2>Testimonios</h2>
        <div className={styles.testimoniosGrid}>
          <blockquote>
            "Excelente trabajo, mi vestido quedó perfecto y único. ¡Muy recomendable!"
            <footer>- Ana G.</footer>
          </blockquote>
          <blockquote>
            "Siempre confío mis arreglos y prendas especiales, la calidad es insuperable."
            <footer>- Laura M.</footer>
          </blockquote>
        </div>
      </section>

      {/* Contacto */}
      <section className={styles.contacto} id="contacto">
        <h2>Contacto</h2>
        <form
          action="https://api.whatsapp.com/send"
          method="get"
          target="_blank"
          className={styles.formulario}
        >
          <input type="hidden" name="phone" value="59895220063" />
          <label>
            Nombre
            <input type="text" name="text" placeholder="Tu nombre" required />
          </label>
          <label>
            Mensaje
            <textarea name="text" placeholder="¿En qué puedo ayudarte?" required />
          </label>
          <button type="submit" className={styles.ctaButton}>
            Enviar mensaje por WhatsApp
          </button>
        </form>
        <div className={styles.redes}>
          <a href="https://wa.me/59895220063" target="_blank" rel="noopener noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={32} height={32} />
          </a>
          {/* Puedes agregar más redes aquí */}
        </div>
      </section>
    </div>
  );
}
