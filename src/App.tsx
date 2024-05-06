import { useEffect, useState } from 'react';
import { ImageType } from './types/type';
import Box from './components/Box';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import getGallery from './lib/raindrop';

function App() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getGallery().then((items) => {
      setImages(items);
      setLoading(false);
    });
  }, []);

  return (
    <Box>
      <Hero />
      <ImageSection
        images={images}
        loading={loading}
      />
    </Box>
  );
}

export default App;
