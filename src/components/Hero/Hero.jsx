import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const btnHover = {
  y: -3,
  transition: {
    duration: 0.25,
    ease: 'easeOut',
  },
};

const linkHover = {
  y: -2,
  transition: {
    duration: 0.2,
    ease: 'easeOut',
  },
};

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrap}>


        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className={styles.eyebrow}>
            <div className={styles.dot}></div>
            Open to full-time opportunities and internships
          </div>

          <h1>
            Full-Stack
            <br />
            Developer
            <br />
            <em>who builds.</em>
          </h1>

          <p className={styles.text}>
            Worked across modern web technologies, building scalable applications and AI-integrated workflows while continuously learning and improving through projects.
          </p>

          <div className={styles.cta}>

            <motion.a
              whileHover={btnHover} href="https://github.com/JithinManjunadh"
              target="_blank"
              rel="noreferrer"
              className={styles.mainBtn}
            >
              GitHub
            </motion.a>

            <motion.a
              whileHover={btnHover} href="/resume/resume.pdf" target="_blank" rel="noreferrer"  
              className={styles.ghostBtn}
            >
              Download Resume
            </motion.a>

          </div>
        </motion.div>


        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >

          <div className={styles.cardTop}>
            <span className={styles.cardTag}>
              FEATURED BUILD
            </span>

            <span className={styles.cardStatus}>
              ● DEPLOYED
            </span>
          </div>

          <div className={styles.projectNo}>
            PROJECT 01
          </div>

          <h2 className={styles.projectTitle}>
            <span>Rent</span>Now
          </h2>

          <p className={styles.projectText}>
            Full-stack vacation rental platform with CRUD functionality,
            authentication, authorization logic and AI-powered review summarization.
          </p>

          <div className={styles.stack}>
            <div className={styles.stackTag}>Node.js</div>
            <div className={styles.stackTag}>Express.js</div>
            <div className={styles.stackTag}>MongoDB</div>
            <div className={styles.stackTag}>Gemini API</div>
          </div>

          <div className={styles.cardBottom}>

            <div className={styles.links}>

              <motion.a
                whileHover={linkHover}
                href="https://tripeasy-fullstack.onrender.com"
                target="_blank"
                rel="noreferrer"
                className={styles.primaryLink}
              >
                Live Demo →
              </motion.a>

              <motion.a
                whileHover={linkHover}
                href="https://github.com/JithinManjunadh/TripEasy-fullstack"
                target="_blank"
                rel="noreferrer"
                className={styles.secondaryLink}
              >
                GitHub
              </motion.a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;