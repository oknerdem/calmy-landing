import styles from '@/app.module.css';

function Box({ children }: { children: React.ReactNode }) {
  return <main className={styles.box}>{children}</main>;
}

export default Box;
