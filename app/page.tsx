'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
          alt="Modista trabajando"
          className={styles.heroImage}
        />
        <motion.div 
          className={styles.heroText}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1>Modista a Medida</h1>
          <p>
            Ropa personalizada, arreglos y confección con pasión y experiencia.<br />
            ¡Haz realidad la prenda de tus sueños!
          </p>
          <motion.a
            href="#contacto"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicita tu prenda
          </motion.a>
        </motion.div>
      </section>

      {/* Sobre mí */}
      <motion.section 
        className={styles.sobreMi}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Sobre mí</h2>
        <p>
          Soy modista profesional con más de 30 años de experiencia en corte, confección y arreglos de ropa. Mi pasión es crear prendas únicas y ayudar a que cada persona se sienta especial con lo que viste.
        </p>
      </motion.section>

      {/* Servicios */}
      <motion.section 
        className={styles.servicios}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Mis Servicios</h2>
        <div className={styles.serviciosGrid}>
          {[
            {
              title: 'Diseño a Medida',
              description: 'Creación de prendas únicas adaptadas a tu estilo y medidas',
              icon: '✂️'
            },
            {
              title: 'Alteraciones',
              description: 'Ajustes y modificaciones para que tus prendas te queden perfectas',
              icon: '🪡'
            },
            {
              title: 'Asesoría de Imagen',
              description: 'Guía profesional para realzar tu estilo personal',
              icon: '👗'
            }
          ].map((servicio, index) => (
            <motion.div 
              key={servicio.title}
              className={styles.servicioCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className={styles.servicioIcon}>{servicio.icon}</span>
              <h3>{servicio.title}</h3>
              <p>{servicio.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Galería */}
      <motion.section 
        className={styles.gallerySection}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.galleryHeader}>
          <h2>Galería de Trabajos</h2>
          <p>Descubre algunas de mis creaciones más destacadas</p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/trabajos" className={styles.ctaButton}>
              Ver mis trabajos
            </Link>
          </motion.div>
        </div>
        <div className={styles.galeriaGrid}>
          {[
            "https://images.unsplash.com/photo-1469398715555-76331a6c7df2?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
            "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
          ].map((src, index) => (
            <motion.img
              key={src}
              src={src}
              alt={`Trabajo ${index + 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </motion.section>

      {/* Testimonios */}
      <motion.section 
        className={styles.testimonios}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Testimonios</h2>
        <div className={styles.testimoniosGrid}>
          {[
            {
              text: "Excelente trabajo, mi vestido quedó perfecto y único. ¡Muy recomendable!",
              author: "Ana G."
            },
            {
              text: "Siempre confío mis arreglos y prendas especiales, la calidad es insuperable.",
              author: "Laura M."
            }
          ].map((testimonio, index) => (
            <motion.blockquote
              key={testimonio.author}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {testimonio.text}
              <footer>- {testimonio.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </motion.section>

      {/* Contacto */}
      <motion.section 
        className={styles.contacto} 
        id="contacto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contacto</h2>
        <motion.form
          action="https://api.whatsapp.com/send"
          method="get"
          target="_blank"
          className={styles.formulario}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <input type="hidden" name="phone" value="59895220063" />
          <motion.label
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Nombre
            <input type="text" name="text" placeholder="Tu nombre" required />
          </motion.label>
          <motion.label
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Mensaje
            <textarea name="text" placeholder="¿En qué puedo ayudarte?" required />
          </motion.label>
          <motion.button
            type="submit"
            className={styles.ctaButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enviar mensaje por WhatsApp
          </motion.button>
        </motion.form>
        <motion.div 
          className={styles.redes}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://wa.me/59895220063" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" width={32} height={32} />
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
}
