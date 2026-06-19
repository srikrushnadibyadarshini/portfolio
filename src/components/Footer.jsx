import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>© {year} Srikrushna Dibyadarshini Behera</p>
      <p className={styles.built}>Built with React</p>
    </footer>
  );
}
