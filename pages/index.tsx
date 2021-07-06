import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meila Travel</title>
        <meta name="description" content="Explore the world with Meila Travel" />
      </Head>
    </div>
  );
}
