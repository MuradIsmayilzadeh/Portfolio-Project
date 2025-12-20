import styles from './page.module.css'
import ScrollAnimation from '../components/ScrollAnimation'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-hover>Game Developer</h1>
      <p className={styles.subtitle}>
        Unreal Engine • Unity • C++ • Custom Engines • Game Design
      </p>
      
      <ScrollAnimation>
        <p className={styles.description}>
          I design and develop immersive games across multiple engines and platforms.
          From high-end 3D experiences in Unreal Engine to flexible systems in Unity
          and custom-built engines, I focus on solid gameplay mechanics, performance,
          and clean architecture. My goal is to turn ideas into polished, engaging
          interactive experiences.
        </p>
      </ScrollAnimation>

      <ScrollAnimation>
        <Link href="/projects" className={styles.cta} data-hover>
          View My Projects
        </Link>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Game Development</h3>
            <p className={styles.featureDesc}>
              Unreal Engine, Unity, Custom C++ Engines
            </p>
          </div>

          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Programming</h3>
            <p className={styles.featureDesc}>
              C++, Blueprints, Gameplay Systems, Tools
            </p>
          </div>

          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Design & Optimization</h3>
            <p className={styles.featureDesc}>
              Mechanics, Level Design, Performance, Scalability
            </p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}
