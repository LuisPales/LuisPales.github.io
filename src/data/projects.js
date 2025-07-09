const projects = [
  {
    title: 'AJOLONAUTA',
    images: [
      '/images/metro-app.jpg',
      '/images/metro-app2.jpg',
      '/images/metro-app3.jpg',
      '/images/metro-app4.jpg',
      '/images/metro-app5.jpg',
      '/images/metro-app6.jpg',
      '/images/metro-app7.jpg',
    ],

    description:
      'Ajolonauta(Aplicación interactiva para visualizar rutas del metro de la CDMX. Permite seleccionar estaciones y ver conexiones en tiempo real.)',
    technologies: ['React', 'CSS', 'JavaScript', 'Firebase'],
    repo: 'https://github.com/LuisPales/Ajolonauta',
  },
  {
    title: 'Sistema de Compras en Java',
    images: [
      '/images/sistema-compras.png',
      '/images/sistema-compras2.png',
    ],
      description:
      'Aplicación de escritorio desarrollada con Java Swing para gestionar compras, productos y usuarios. Incluye interfaz gráfica y persistencia de datos.',
    technologies: ['Java', 'Swing', 'POO'],
    repo: 'https://github.com/LuisPales/SistemaCompras',
  },
  {
    title: 'Codificador de Voltaje con ESP32',
    images: [
      '/images/esp32-codificador.png',
    ],
    description:
      'Proyecto de electrónica con ESP32 que mide voltaje analógico y lo codifica digitalmente para transmisión serial.',
    technologies: ['ESP32', 'Arduino IDE', 'C++'],
    repo: 'https://github.com/LuisPales/CodificadorVoltaje',
  },
  {
    title: 'Portafolio Personal',
    images: [
      '/images/portafolio.png', 
    ],
    description:
      'Mi sitio personal desarrollado con React, Firebase y CSS Modules. Incluye formulario de contacto con EmailJS, animaciones, validación de correo y presentación de mis proyectos.',
    technologies: ['React', 'Firebase', 'CSS Modules', 'EmailJS'],
    live: 'https://tusitio.com', 
    repo: 'https://github.com/LuisPales/Portafolio-sin-tail', 
  },
  
  {
    title: 'Sensor de Luz con PCB de Voltaje Variable',
    images: [
      '/images/sensor-luz-pcb.jpg',
      '/images/sensor-luz-pcb2.PNG',
      '/images/sensor-luz-pcb3.PNG',
      '/images/sensor-luz-pcb4.PNG',
    ],
     description:
      'Diseñé una PCB que integra una fuente de voltaje variable para alimentar un circuito de detección de luz. Cuando el sensor detecta oscuridad, activa automáticamente una lámpara. Todo el comportamiento se logra con componentes electrónicos sin programación.',
    technologies: ['PCB Design', 'Sensores LDR', 'Electrónica Analógica'],
  },
]

export default projects
