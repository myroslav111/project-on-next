import React from 'react';
import Heading from '../components/Heading';
import Head from 'next/head';
import myImg from '../public/photo1636474282.jpeg';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Socials from '../components/Socials';

export const getStaticProps = async () => {
  try {
    const response = await fetch(`${process.env.API_HOST}/socials/`);
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: { socials: data },
    };
  } catch {
    return {
      props: { socials: null },
    };
  }
};

const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text={'Home'} />
      <Image
        src={myImg}
        width={300}
        height={350}
        alt="my photo"
        placeholder="blur"
      />
      <Socials socials={socials} />
    </div>
  );
};

export default Home;
