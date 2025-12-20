import styles from './page.module.css'
import ScrollAnimation from '../../components/ScrollAnimation'
import { FiMail, FiGithub } from 'react-icons/fi'
import { SiCodecademy } from 'react-icons/si'

export default function Contact() {
  const contacts = [
    {
      title: 'Email',
      value: 'muradismayilzadehh@gmail.com',
      href: 'mailto:muradismayilzadehh@gmail.com',
      icon: <FiMail />
    },
    {
      title: 'Code Academy',
      value: 'Murad Ismayilzadeh',
      href: 'https://www.codecademy.com/profiles/dev9934992760',
      icon: <SiCodecademy />
    },
    {
      title: 'GitHub',
      value: 'github.com/MuradIsmayilzadeh',
      href: 'https://github.com/MuradIsmayilzadeh/',
      icon: <FiGithub />
    }
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title} data-hover>Get In Touch</h1>

      <ScrollAnimation>
        <p className={styles.intro}>
          Have a project in mind or just want to chat? I'm always open to
          discussing new opportunities and ideas.
        </p>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className={styles.contactGrid}>
          {contacts.map((contact, index) => (
          <a
            href={contact.href}
            className={styles.cardLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div key={index} className={styles.contactCard} data-hover>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>
                  {contact.icon}
                </span>
                <h3 className={styles.cardTitle}>
                  {contact.title}
                </h3>
              </div>

                {contact.value}
            </div>
              </a>
          ))}
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className={styles.message}>
          <p className={styles.messageText}>
            I typically respond within 24 hours. Whether you have a question,
            a project proposal, or just want to say hi, I'd love to hear from you.
            Let's create something amazing together.
          </p>
        </div>
      </ScrollAnimation>
    </div>
  )
}
