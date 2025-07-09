import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: 'transparent' },
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        },
        particles: {
          number: { value: 50 },
          color: { value: '#38bdf8' },
          links: {
            enable: true,
            color: '#38bdf8',
            distance: 150,
            opacity: 0.3,
            width: 1,
          },
          move: { enable: true, speed: 1 },
          size: { value: { min: 1, max: 3 } },
          opacity: { value: 0.4 },
        },
      }}
    />
  )
}

export default ParticlesBackground
