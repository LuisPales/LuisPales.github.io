import styles from './About.module.css'
import escuelaImg from '../assets/Escuela.png'
import futbolImg from '../assets/fut.png'
import pyImg from '../assets/Py.png'
import cImg from '../assets/C.png'
import asmImg from '../assets/asm.png'
import htmlImg from '../assets/html.png'
import JavaScriptImg from '../assets/JavaScript.png'
import ReactImg from '../assets/React.png'
import GitHubImg from '../assets/Github.png'
import NodejsImg from '../assets/Nodejs.png'

function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.sectionTitle}>Sobre mí</h2>

      <div className={styles.cardBox}>
        <div className={styles.cards}>
          <div className={styles.card}>
            <img src={escuelaImg} alt="Estudios" className={styles.cardImage} />
            <div className={styles.cardOverlay}>
              <p>
                <strong>Estudios:</strong><br />
                - Técnico en Sistemas Digitales (CECyT 3)<br />
                - Estudiante de Ingeniería en Sistemas (ESCOM)
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <img src={futbolImg} alt="Hobbies" className={styles.cardImage} />
            <div className={styles.cardOverlay}>
              <p>
                <strong>Hobbies:</strong><br />
                - Fútbol 11 y rápido<br />
                - Hardware<br />
                - Videojuegos<br />
                - Programación
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Tecnologías manejadas</h2>
      <div className={styles.cardBox}>
        <div className={styles.languages}>
          {[ 
            [pyImg, 'Python'],
            [cImg, 'C'],
            [asmImg, 'Assembler'],
            [htmlImg, 'HTML'],
            [JavaScriptImg, 'JavaScript'],
            [ReactImg, 'React'],
            [GitHubImg, 'GitHub'],
            [NodejsImg, 'Node.js']
          ].map(([img, label]) => (
            <div key={label} className={styles.language}>
              <img src={img} alt={label} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <h2 className={styles.sectionTitle}>Habilidades Blandas</h2>
      <div className={styles.cardBox}>
        <div className={styles.skills}>
          {[
            ['Comunicación', 100],
            ['Liderazgo', 80],
            ['Inteligencia emocional', 95],
            ['Resolución de problemas', 85],
            ['Trabajo bajo presión', 90],
            ['Flexibilidad', 85],
            ['Positividad y curiosidad', 90],
          ].map(([name, percent]) => (
            <div key={name} className={styles.skill}>
              <div className={styles.skillLabel}>{name} [{percent}%]</div>
              <div className={styles.skillBar}>
                <div className={styles.skillFill} style={{ width: `${percent}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
