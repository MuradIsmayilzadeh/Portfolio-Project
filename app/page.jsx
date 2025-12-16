import styles from './page.module.css'
import ScrollAnimation from '../components/ScrollAnimation'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <ScrollAnimation>
        <p className={styles.description}>
          This is the home page of your Next.js portfolio application.
          Explore the sections above to learn more about my work, projects, and how to get in touch.
        </p>
      </ScrollAnimation>
    </div>
  )
}
