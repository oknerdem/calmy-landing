import { ImageType } from '@/types/type';
import LoadingPlaceholder from '@/components/LoadingPlaceholder';
import FallbackImage from '@/components/FallbackImage';
import styles from '@/app.module.css';

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
            <FallbackImage
              key={i}
              image={image}
            />
          ))}
        </>
      )}
    </section>
  );
}

export default ImageSection;
