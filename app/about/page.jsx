import styles from './page.module.css'
import ScrollAnimation from '../../components/ScrollAnimation'

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <ScrollAnimation>
        <div className={styles.content}>
          <p>
            Welcome to my portfolio! I'm a passionate developer who loves creating
            amazing digital experiences with cutting-edge technology.
          </p>
          <p>
            With expertise in modern web development, I specialize in building
            fast, responsive, and visually stunning applications that leave a
            lasting impression.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
        </div>
      </ScrollAnimation>
    </div>
  )
}
