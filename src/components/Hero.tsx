import { DefaultButton } from './Buttons';
import { HeroType } from '../types/type';
import styles from '../app.module.css';

function Hero({ title, info, helper }: HeroType) {
  return (
    <section className={styles.heroSec}>
      <span className={styles.heroHelper}>{helper}</span>
      <h1 className={styles.heroTitle}>{title}</h1>
      <p className={styles.heroInfo}>{info}</p>
      <DefaultButton text='Try for free' />
    </section>
  );
}

export default Hero;
