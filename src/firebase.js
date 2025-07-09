import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore' // 👈 agrega esto

const firebaseConfig = {
  apiKey: 'AIzaSyAGtRCYKF01bvNpuJrZ4EPJRDxIwCV9kb8',
  authDomain: 'miportafolio-5b2f1.firebaseapp.com',
  projectId: 'miportafolio-5b2f1',
  storageBucket: 'miportafolio-5b2f1.firebasestorage.app',
  messagingSenderId: '548528929157',
  appId: '1:548528929157:web:c7df97ea8300992e002cec',
  measurementId: 'G-F6328CCFKX',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app) 

export { db } 