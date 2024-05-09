import { ImageType } from '@/types/type';
import styles from '@/app.module.css';

function FallbackImage({ image }: { image: ImageType }) {
  return (
    <img
      src={image.cover}
      alt={image.title}
      title={image.title}
      className={styles.image}
      loading='lazy'
      onError={(e) => {
        e.currentTarget.src =
          'https://alozano-clas.media.uconn.edu/wp-content/uploads/sites/490/2017/01/deadlink.png';
      }}
    />
  );
}

export default FallbackImage;
