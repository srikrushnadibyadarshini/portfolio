import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const SKILLS = [
  'HTML5',
  'CSS3',
  'JavaScript (ES6+)',
  'React.js',
  'Git',
  'GitHub',
  'Responsive Design',
  'Vercel Deployment',
];

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.p>

      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        Tools I reach for
      </motion.h2>

      <div className={styles.grid}>
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill}
            className={styles.card}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
            <span className={styles.name}>{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
