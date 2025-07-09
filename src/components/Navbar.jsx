import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../assets/logo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo} onClick={closeMenu}>
        <img src={logo} alt="Luis Palestina Logo" className={styles.logoImage} />
      </Link>

      <button className={styles.menuButton} onClick={toggleMenu}>
        {menuOpen ? '✖' : '☰'}
      </button>

      <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <Link to="/" className={styles.link} onClick={closeMenu}>Inicio</Link>
        <Link to="/about" className={styles.link} onClick={closeMenu}>Sobre mí</Link>
        <Link to="/projects" className={styles.link} onClick={closeMenu}>Proyectos</Link>
        <Link to="/contact" className={styles.link} onClick={closeMenu}>Contacto</Link>
      </div>
    </nav>
  )
}

export default Navbar

