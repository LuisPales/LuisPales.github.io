import { useState } from 'react'
import styles from './Projects.module.css'
import projects from '../data/projects'
import Modal from 'react-modal'

Modal.setAppElement('#root')

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (project) => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setSelectedProject(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (!selectedProject) return
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    if (!selectedProject) return
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    )
  }

  return (
    <section className={styles.projects}>
      <h2 className={styles.title}>Mis Proyectos</h2>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.card} onClick={() => openModal(project)}>
            <img
              src={project.images[0]}
              alt={project.title}
              className={styles.image}
              loading="lazy"
            />
            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <ul className={styles.tech}>
              {project.technologies.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
            <div className={styles.links}>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Ver proyecto
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Código fuente
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.modalContent}
        overlayClassName={styles.modalOverlay}
      >
        <button className={styles.closeBtn} onClick={closeModal}>✖</button>

        {selectedProject && (
          <>
            <img
              src={selectedProject.images[currentImageIndex]}
              alt={`Vista ${currentImageIndex + 1}`}
              className={styles.modalImage}
            />
            {selectedProject.images.length > 1 && (
              <div className={styles.controls}>
                <button className={styles.navBtn} onClick={prevImage}>←</button>
                <button className={styles.navBtn} onClick={nextImage}>→</button>
              </div>
            )}
          </>
        )}
      </Modal>
    </section>
  )
}

export default Projects
