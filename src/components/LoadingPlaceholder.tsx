import styles from '@/app.module.css';

function LoadingPlaceholder() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className={styles.placeholder}
        />
      ))}
    </>
  );
}

export default LoadingPlaceholder;
