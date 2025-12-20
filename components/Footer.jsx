import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Identity */}
        <div className={styles.brand}>
          <h3 className={styles.name}>Murad Ismayilzada</h3>
          <p className={styles.role}>
            Game Developer · Engine Programmer · Full-Stack Developer · Low Level Coder
          </p>
        </div>

        {/* Contact */}
        <div className={styles.contact}>
          <span className={styles.title}>Contact</span>

          {/* GitHub */}
          <a
            href="https://github.com/MuradIsmayilzadeh"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            GitHub
          </a>

          <a
            href="https://vk.com/mismayilzade"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            VK
          </a>

          <a
            href="muradismayilzadehh@gmail.com"
            className={styles.link}
          >
            muradismayilzadehh@gmail.com
          </a>

          <span className={styles.phone}>
            +994 51 455 05 45
          </span>
        </div>

      </div>

      <div className={styles.bottom}>
        © {new Date().getFullYear()} Murad Ismayilzada. All rights reserved.
      </div>
    </footer>
  )
}
