import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import palestinaImg from '../assets/yo.jpg'

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.cardBox}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>
              Hola, soy <span>Luis Palestina</span>
            </h1>
            <p className={styles.subtitle}>
              Estudiante de Ingeniería en Sistemas Computacionales en la Escuela Superior de Cómputo, desarrollador en proceso, apasionado por la tecnología, crear experiencias modernas y funcionales.
            </p>
            <Link to="/projects" className={styles.button}>Ver proyectos</Link>
          </div>
          <div className={styles.imageWrapper}>
            <img src={palestinaImg} alt="Luis Palestina" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
