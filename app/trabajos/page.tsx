'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './trabajos.module.css';
import { motion, AnimatePresence } from 'framer-motion';

interface Trabajo {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

// Datos de ejemplo - En un caso real, estos vendrían de una API o base de datos
const trabajos: Trabajo[] = [
  {
    id: 1,
    title: 'Vestido de Novia',
    description: 'Vestido de novia con encaje y detalles en pedrería',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    category: 'Vestidos de Novia'
  },
  {
    id: 2,
    title: 'Traje Ejecutivo',
    description: 'Traje a medida para ocasiones formales',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    category: 'Trajes'
  },
  {
    id: 3,
    title: 'Vestido de Gala',
    description: 'Vestido de gala con detalles en seda',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
    category: 'Vestidos de Gala'
  },
  {
    id: 4,
    title: 'Conjunto Casual',
    description: 'Conjunto casual para el día a día',
    image: 'https://images.unsplash.com/photo-1469398715555-76331a6c7df2?auto=format&fit=crop&w=800&q=80',
    category: 'Casual'
  },
  {
    id: 5,
    title: 'Vestido de Coctel',
    description: 'Vestido de coctel con detalles en tul',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    category: 'Vestidos de Coctel'
  },
  {
    id: 6,
    title: 'Traje de Baile',
    description: 'Traje de baile con detalles en lentejuelas',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80',
    category: 'Trajes de Baile'
  }
];

export default function TrabajosPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedImage, setSelectedImage] = useState<Trabajo | null>(null);

  const categories = ['Todos', ...new Set(trabajos.map(trabajo => trabajo.category))];
  
  const filteredTrabajos = selectedCategory === 'Todos' 
    ? trabajos 
    : trabajos.filter(trabajo => trabajo.category === selectedCategory);

  return (
    <div className={styles.container}>
      <motion.header 
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Mis Trabajos</h1>
        <p>Una selección de mis mejores creaciones</p>
      </motion.header>

      <motion.div 
        className={styles.categories}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            className={`${styles.categoryButton} ${selectedCategory === category ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <motion.div 
        className={styles.gallery}
        layout
      >
        <AnimatePresence>
          {filteredTrabajos.map((trabajo, index) => (
            <motion.div 
              key={trabajo.id} 
              className={styles.galleryItem}
              onClick={() => setSelectedImage(trabajo)}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              layout
            >
              <div className={styles.imageWrapper}>
                <img
                  src={trabajo.image}
                  alt={trabajo.title}
                  className={styles.image}
                />
                <motion.div 
                  className={styles.overlay}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3>{trabajo.title}</h3>
                  <p>{trabajo.description}</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            className={styles.modal}
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={styles.modalContent}
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <motion.button 
                className={styles.closeButton}
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
              <motion.img
                src={selectedImage.image}
                alt={selectedImage.title}
                className={styles.modalImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.div 
                className={styles.modalInfo}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2>{selectedImage.title}</h2>
                <p>{selectedImage.description}</p>
                <motion.span 
                  className={styles.category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {selectedImage.category}
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 