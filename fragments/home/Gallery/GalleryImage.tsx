import { useState, useRef } from 'react';
import useIntersection from 'hooks/useIntersection';
import { Blurhash } from 'react-blurhash';
import clsx from 'clsx';

import styles from './styles/GalleryImage.module.css';

type GalleryImageProps = {
  src: string;
  alt: string;
  blur_hash: string;
};

const GalleryImage = (props: GalleryImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(imageRef, { root: null, threshold: 0.1 });

  const handleLoadImage = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imageRef} className={clsx(styles.GalleryImageWrapper, isLoaded && styles.isLoaded)}>
      {/* eslint-disable */}
      <Blurhash hash={props.blur_hash} width="100%" height="100%" className={styles.imageBlurHash} />
      {isVisible && <img src={props.src} alt={props.alt} onLoad={handleLoadImage} />}
    </div>
  );
};

export default GalleryImage;
