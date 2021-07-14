import Head from 'next/head';
import Hero from '@fragments/home/Hero';
import Destinations from '@fragments/home/Destinations';
import Gallery from '@fragments/home/Gallery';

export default function Home() {
  return (
    <>
      <Head>
        <title>Meila Travel</title>
        <meta name="description" content="Explore the world with Meila Travel" />
      </Head>
      <Hero />
      <Destinations />
      <Gallery />
    </>
  );
}
