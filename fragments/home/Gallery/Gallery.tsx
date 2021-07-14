import Container from '@components/Container';
import Typography, { TypographyTag, TypographyVariants } from '@components/Typography';
import { useRef } from 'react';
import GalleryImage from './GalleryImage';

import styles from './styles/Gallery.module.css';
import galleryData from './galleryData';

const Gallery = () => {
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.gallery}>
      <Container>
        <Typography tagName={TypographyTag.H2} variant={TypographyVariants.SubHeading}>
          Gallery
        </Typography>
      </Container>
      <div className={styles.galleryImage} ref={divRef}>
        {galleryData.map((image, i) => (
          <figure key={image.id} className={styles[`galleryItem${i + 1}`]}>
            <GalleryImage src={image.src} alt={image.alt} blur_hash={image.blur_hash} />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
