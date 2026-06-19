import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import styles from './Projects.module.css';

const PROJECTS = [
  {
    name: 'DevLore',
    description:
      'An interactive quiz platform that tracks quiz history, user progress, and learning performance.',
    stack: ['React', 'JavaScript', 'CSS'],
    live: 'https://devlore-nine.vercel.app/',
    github: 'https://github.com/srikrushnadibyadarshini/devlore',
  },
  {
    name: 'Iron Temple Fitness',
    description:
      'A modern gym and fitness website designed with a professional UI and mobile responsiveness.',
    stack: ['React', 'CSS'],
    live: 'https://iron-temple-fitness-five.vercel.app/',
    github: 'https://github.com/srikrushnadibyadarshini/iron-temple-fitness',
  },
  {
    name: 'The Royal Feast',
    description:
      'A luxury restaurant website featuring elegant design, menu presentation, and responsive layouts.',
    stack: ['React', 'CSS'],
    live: 'https://the-royal-feast.vercel.app/',
    github: 'https://github.com/srikrushnadibyadarshini/the-royal-feast',
  },
  {
    name: 'StudyAI',
    description:
      'An AI-powered learning platform focused on helping students study more efficiently and effectively.',
    stack: ['React', 'JavaScript'],
    live: 'https://studyai-two-psi.vercel.app/',
    github: 'https://github.com/srikrushnadibyadarshini/studyai',
  },
];

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured projects
      </motion.p>

      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        Things I've shipped
      </motion.h2>

      <div className={styles.grid}>
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.name}
            className={styles.card}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
          >
            <div className={styles.cardTop}>
              <h3 className={styles.name}>{project.name}</h3>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.name} on GitHub`}
                className={styles.iconLink}
              >
                <FiGithub size={18} />
              </a>
            </div>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.stack}>
              {project.stack.map((tech) => (
                <span key={tech} className={styles.stackTag}>{tech}</span>
              ))}
            </div>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveLink}
            >
              View live <FiArrowUpRight size={16} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
