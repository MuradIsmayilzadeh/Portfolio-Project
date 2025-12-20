import styles from './page.module.css'
import ScrollAnimation from '../../components/ScrollAnimation'
import img from '../../components/images/me.jpeg'
export default function About() {
  const skills = [
    'Unreal Engine', 'Unity', 'C++', 'Bluepr  ints',
    'Gameplay Systems', 'Custom Engines',
    'Web Development', 'Low-Level Programming',
    'Mobile Development', 'Performance Optimization',
    'Multiplayer Systems', 'Game Design'
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-hover>About Me</h1>

      {/* Top section: Photo + Intro */}
      <ScrollAnimation>
        <div className={styles.topSection}>
          <div className={styles.photoWrapper}>
            {/* Replace src with your photo */}
            <img
              src={img.src}
              alt="My photo"
              className={styles.photo}
            />
          </div>

          <div className={styles.introWrapper}>
            <p className={styles.intro}>
              I’m an ADA student and a multi-disciplinary developer with a strong focus on game development,
              but my experience goes far beyond games. I’ve built projects in web
              development, low-level systems, and mobile applications, which gives me
              a deep understanding of software from both high-level and low-level
              perspectives.
            </p>
          </div>
        </div>
      </ScrollAnimation>

      {/* Main content */}
      <ScrollAnimation>
        <div className={styles.content}>
          <p>
            My journey started with curiosity about how games and software work under
            the hood. That curiosity led me into game engines like Unreal Engine and
            Unity, where I design gameplay systems, tools, and performance-focused
            architectures. At the same time, I explored web technologies, mobile
            platforms, and low-level programming to understand software at every layer.
          </p>

          <p>
            Working across different fields has shaped the way I approach development.
            I focus on clean architecture, scalability, and performance, whether I’m
            building a real-time game system, a backend service, or a low-level engine
            component. I enjoy solving complex problems and turning ideas into
            reliable, polished products.
          </p>

          <p>
            Outside of active development, I experiment with new technologies, study
            existing systems, and analyze games and applications to understand what
            makes them efficient, scalable, and enjoyable to use.
          </p>
        </div>
      </ScrollAnimation>

      {/* Skills */}
      <ScrollAnimation>
        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>Skills & Technologies</h2>
          <div className={styles.skillGrid}>
            {skills.map((skill, index) => (
              <div key={index} className={styles.skill} data-hover>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  )
}
