import { useState } from 'react'
import styles from './Contact.module.css'
import { db } from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import emailjs from '@emailjs/browser'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('enviando')

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(form.email)) {
      setStatus('correo-invalido')
      return
    }

    try {
     
      await addDoc(collection(db, 'mensajes'), {
        ...form,
        timestamp: Timestamp.now(),
      })

     
      await emailjs.send(
        'service_nxbkqxs', 
        'template_hfkzb17',
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        'm3p57Ev1u2lxuGlpb'
      )


      setStatus('enviado')
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error al enviar mensaje:', error)
      setStatus('error')
    }
  }

  return (
    <section className={styles.contact}>
      <h2 className={styles.title}>Contáctame</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={form.email}
          onChange={handleChange}
          required
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          title="Ingresa un correo válido como ejemplo@correo.com"
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>

        {status === 'enviado' && (
          <p className={styles.success}>¡Mensaje enviado!, Recibiras un correo de enterado. 📬</p>
        )}
        {status === 'correo-invalido' && (
          <p className={styles.error}>Correo inválido. Verifica el formato.</p>
        )}
        {status === 'error' && (
          <p className={styles.error}>Hubo un error. Intenta de nuevo.</p>
        )}
      </form>
    </section>
  )
}

export default Contact

