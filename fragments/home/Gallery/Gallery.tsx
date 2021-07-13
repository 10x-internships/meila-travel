import Container from '@components/Container';
import Typography, { TypographyTag, TypographyVariants } from '@components/Typography';
import useIntersection from 'hooks/useIntersection';
import { useRef } from 'react';

import styles from './Gallery.module.css';

const Gallery = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(divRef, { root: null, threshold: 0.1 });

  return (
    <section className={styles.gallery}>
      <Container>
        <Typography tagName={TypographyTag.H2} variant={TypographyVariants.SubHeading}>
          Gallery
        </Typography>
      </Container>
      <div className={styles.galleryImage} ref={divRef}>
        {/* eslint-disable */}
        {!isVisible && <div>Loading images</div>}
        {isVisible && (
          <>
            <figure className={styles.galleryItem1}>
              <img src="images/gallery-1.jpg" alt="Gallery 1" />
            </figure>
            <figure className={styles.galleryItem2}>
              <img src="images/gallery-2.jpg" alt="Gallery 2" />
            </figure>
            <figure className={styles.galleryItem3}>
              <img src="images/gallery-3.jpg" alt="Gallery 3" />
            </figure>
            <figure className={styles.galleryItem4}>
              <img src="images/gallery-4.jpg" alt="Gallery 4" />
            </figure>
            <figure className={styles.galleryItem5}>
              <img src="images/gallery-5.jpg" alt="Gallery 5" />
            </figure>
            <figure className={styles.galleryItem6}>
              <img src="images/gallery-6.jpg" alt="Gallery 6" />
            </figure>
            <figure className={styles.galleryItem7}>
              <img src="images/gallery-7.jpg" alt="Gallery 7" />
            </figure>
            <figure className={styles.galleryItem8}>
              <img src="images/gallery-8.png" alt="Gallery 8" />
            </figure>
          </>
        )}
      </div>
    </section>
  );
};

export default Gallery;
