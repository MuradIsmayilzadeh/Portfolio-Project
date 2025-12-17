import styles from './page.module.css'
import ScrollAnimation from '../components/ScrollAnimation'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-hover>Welcome to My Portfolio</h1>
      <p className={styles.subtitle}>Full-Stack Developer & Creative Technologist</p>
      
      <ScrollAnimation>
        <p className={styles.description}>
          I craft digital experiences that blend cutting-edge technology with stunning design.
          Specializing in modern web applications, I transform complex ideas into elegant,
          user-friendly solutions that make an impact.
        </p>
      </ScrollAnimation>

      <ScrollAnimation>
        <Link href="/projects" className={styles.cta} data-hover>
          View My Work
        </Link>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className={styles.features}>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Frontend</h3>
            <p className={styles.featureDesc}>React, Next.js, TypeScript</p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Backend</h3>
            <p className={styles.featureDesc}>Node.js, Python, APIs</p>
          </div>
          <div className={styles.feature}>
            <h3 className={styles.featureTitle}>Design</h3>
            <p className={styles.featureDesc}>UI/UX, Figma, Motion</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}
