import styles from './page.module.css'
import ScrollAnimation from '../../components/ScrollAnimation'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, Stripe payment integration, and an advanced analytics dashboard for business insights.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe']
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive analytics platform for managing multiple social media accounts with real-time metrics, automated reporting, and AI-powered content suggestions.',
      tech: ['React', 'Python', 'Redis', 'Chart.js']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with team features, time tracking, Kanban boards, and seamless integration with popular development tools.',
      tech: ['React', 'Firebase', 'Tailwind', 'WebSocket']
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered platform that generates marketing copy, blog posts, and social media content using advanced language models and custom fine-tuning.',
      tech: ['Next.js', 'OpenAI', 'MongoDB', 'AWS']
    }
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-hover>Projects</h1>
      
      <ScrollAnimation>
        <p className={styles.intro}>
          A selection of projects I've worked on. Each one represents a unique
          challenge and an opportunity to create something meaningful.
        </p>
      </ScrollAnimation>

      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ScrollAnimation key={index}>
            <div className={styles.project} data-hover>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <div className={styles.techStack}>
                {project.tech.map((tech, i) => (
                  <span key={i} className={styles.tech}>{tech}</span>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  )
}
