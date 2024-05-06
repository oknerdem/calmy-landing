import { useEffect, useState } from 'react';
import { ImageType } from './types/type';
import Box from './components/Box';
import Hero from './components/Hero';
import ImageSection from './components/ImageSection';
import getGallery from './lib/raindrop';

function App() {
  const [images, setImages] = useState<ImageType[]>([]);

  useEffect(() => {
    getGallery().then((items) => {
      setImages(items);
    });
  }, []);

  return (
    <Box>
      <Hero />
      <ImageSection images={images} />
    </Box>
  );
}

export default App;
