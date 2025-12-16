import styles from './page.module.css'
import ScrollAnimation from '../../components/ScrollAnimation'

export default function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact</h1>
      <ScrollAnimation>
        <div className={styles.content}>
          <p>
            Ready to start a project or have a question? I'd love to hear from you!
            Feel free to reach out through any of the channels below.
          </p>
          <p>
            <strong>Email:</strong> your.email@example.com<br />
            <strong>LinkedIn:</strong> linkedin.com/in/yourprofile<br />
            <strong>GitHub:</strong> github.com/yourusername
          </p>
          <p>
            I typically respond within 24 hours. Looking forward to connecting
            with you!
          </p>
        </div>
      </ScrollAnimation>
    </div>
  )
}
