import styles from './page.module.css'
import ScrollAnimation from '../../components/ScrollAnimation'

export default function Projects() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <ScrollAnimation>
        <div className={styles.content}>
          <p>
            <strong>E-Commerce Platform</strong><br />
            A full-stack e-commerce solution with real-time inventory management,
            payment integration, and advanced analytics dashboard.
          </p>
          <p>
            <strong>Social Media Dashboard</strong><br />
            A comprehensive analytics platform for managing multiple social media
            accounts with real-time metrics and automated reporting.
          </p>
          <p>
            <strong>Task Management App</strong><br />
            A collaborative project management tool with team features, time
            tracking, and seamless integration with popular development tools.
          </p>
        </div>
      </ScrollAnimation>
    </div>
  )
}
