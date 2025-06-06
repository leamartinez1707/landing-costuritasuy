'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logo}>
          Modista a Medida
        </Link>
        
        <div className={styles.links}>
          <Link 
            href="/" 
            className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
          >
            Inicio
          </Link>
          <Link 
            href="/trabajos" 
            className={`${styles.link} ${pathname === '/trabajos' ? styles.active : ''}`}
          >
            Trabajos
          </Link>
        </div>
      </div>
    </nav>
  );
} 