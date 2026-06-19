import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiGithub, FiArrowUpRight } from 'react-icons/fi';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.p>

      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        Let's build something
      </motion.h2>

      <motion.p
        className={styles.sub}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Have a project in mind or just want to say hi? My inbox is open.
      </motion.p>

      <motion.div
        className={styles.cards}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <a href="mailto:srikrushna.dev@gmail.com" className={styles.card}>
          <FiMail size={20} className={styles.icon} />
          <div>
            <span className={styles.label}>Email</span>
            <span className={styles.value}>srikrushna.dev@gmail.com</span>
          </div>
          <FiArrowUpRight className={styles.arrow} size={16} />
        </a>

        <a
          href="https://github.com/srikrushnadibyadarshini"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <FiGithub size={20} className={styles.icon} />
          <div>
            <span className={styles.label}>GitHub</span>
            <span className={styles.value}>@srikrushnadibyadarshini</span>
          </div>
          <FiArrowUpRight className={styles.arrow} size={16} />
        </a>

        <div className={styles.card}>
          <FiMapPin size={20} className={styles.icon} />
          <div>
            <span className={styles.label}>Location</span>
            <span className={styles.value}>Bhubaneswar, Odisha, India</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
