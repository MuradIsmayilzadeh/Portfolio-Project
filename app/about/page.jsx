import styles from './page.module.css'
import ScrollAnimation from '../../components/ScrollAnimation'

export default function About() {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Next.js',
    'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'Docker', 'AWS', 'Git', 'Figma'
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-hover>About Me</h1>
      
      <ScrollAnimation>
        <p className={styles.intro}>
          I'm a passionate full-stack developer with 5+ years of experience building
          digital products that users love. Based in San Francisco, I work with
          startups and enterprises to bring their visions to life.
        </p>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className={styles.content}>
          <p>
            My journey in tech started with a curiosity for how things work. That curiosity
            evolved into a career building everything from small business websites to
            large-scale enterprise applications serving millions of users.
          </p>
          <p>
            I believe in writing clean, maintainable code and creating intuitive user
            experiences. Every project is an opportunity to learn something new and
            push the boundaries of what's possible on the web.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing
            to open-source projects, mentoring aspiring developers, or enjoying a good
            cup of coffee while reading about the latest in tech.
          </p>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>Technologies I Work With</h2>
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
