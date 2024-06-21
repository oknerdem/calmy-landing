import { useEffect, useState } from 'react';
import { ImageType } from '@/types/type';
import Box from '@/components/Box';
import Hero from '@/components/Hero';
import ImageSection from '@/components/ImageSection';
import BottomShadow from '@/components/BottomShadow';
import getGallery from '@/lib/raindrop';

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
      <Hero
        title='Sites that inspire.'
        info='Go from design to world-class site with Framer, the web builder for creatives.'
        helper='Unlimited Access'
      />
      <ImageSection
        images={images}
        loading={loading}
      />
      <BottomShadow />
    </Box>
  );
}

export default App;
