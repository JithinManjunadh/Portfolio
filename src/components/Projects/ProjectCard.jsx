import { motion } from 'framer-motion';
import styles from './Projects.module.css';

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
    },
  },
};


const hover = {
  y: -6,
  transition: {
    type: 'spring',
    stiffness: 260,
    damping: 20,
  },
};

const btnHover = {
  y: -2,
  transition: {
    type: 'spring',
    stiffness: 400,
    damping: 22,
  },
};

function ProjectCard({ project }) {
  return (
    <motion.article
      className={styles.project}
      variants={item}
      whileHover={hover}
    >
      <div className={styles.projectNo}>
        PROJECT {project.id}
      </div>

      <h3 className={styles.projectTitle}>
        <span>{project.accent}</span>
        {project.rest}
      </h3>

      <p className={styles.projectText}>
        {project.description}
      </p>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <div key={tag} className={styles.tag}>
            {tag}
          </div>
        ))}
      </div>

      <div className={styles.actions}>

        <motion.a
          whileHover={btnHover}
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className={`${styles.button} ${styles.primary}`}
        >
          View Project
        </motion.a>

        <motion.a
          whileHover={btnHover}
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className={`${styles.button} ${styles.secondary}`}
        >
          GitHub
        </motion.a>

      </div>
    </motion.article>
  );
}

export default ProjectCard;