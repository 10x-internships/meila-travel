import Container from '@components/Container';
import Typography, { TypographyTag, TypographyVariants } from '@components/Typography';
import DestinationsSlider from './DestinationsSlider';

import styles from './styles/Destinations.module.css';

const Destinations = () => {
  return (
    <section className={styles.destinations}>
      <Container>
        <Typography tagName={TypographyTag.H2} variant={TypographyVariants.SubHeading}>
          Destinations
        </Typography>
        <DestinationsSlider />
        <div className={styles.destinationsDesc}>
          <p>
            Travelling to Europe is a true adventure! The continent is filled with diverse countries, cultures,
            cuisines, history and languages making a trip to Europe educational, inspiring and just plain fun!
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Destinations;
