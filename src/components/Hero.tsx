import styles from '../app.module.css';

function Hero() {
  return (
    <section className={styles.heroSec}>
      <h1 className={styles.heroTitle}>Sites that inspire.</h1>
      <p className={styles.heroInfo}>
        Go from design to world-class site with Framer, the web builder for
        creatives.
      </p>
      <button className={styles.defaultButton}>Try for free</button>
    </section>
  );
}

export default Hero;
