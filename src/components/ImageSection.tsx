import { ImageType } from '../types/type';
import styles from '../app.module.css';

function ImageSection({ images }: { images: ImageType[] }) {
  return (
    <section className={styles.imageSec}>
      {images.map((image, i) => (
        <img
          key={i}
          src={image.cover}
          alt={image.title}
          title={image.title}
          className={styles.image}
        />
      ))}
    </section>
  );
}

export default ImageSection;
