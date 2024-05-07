import styles from '../app.module.css';

export const DefaultButton = ({ text }: { text: string }) => {
  return <button className={styles.defaultButton}>{text}</button>;
};
