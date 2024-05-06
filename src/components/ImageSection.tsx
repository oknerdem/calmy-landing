import { ImageType } from '../types/type';
import styles from '../app.module.css';
import LoadingPlaceholder from './LoadingPlaceholder';

function ImageSection({
  images,
  loading,
}: {
  images: ImageType[];
  loading: boolean;
}) {
  return (
    <section className={styles.imageSec}>
      {loading ? (
        <LoadingPlaceholder />
      ) : (
        <>
          {images.map((image, i) => (
            <img
              key={i}
              src={image.cover}
              alt={image.title}
              title={image.title}
              loading='lazy'
              className={styles.image}
            />
          ))}
        </>
      )}
    </section>
  );
}

export default ImageSection;
