import React from 'react';
import Heading from '../../components/Heading';
import Head from 'next/head';
import ContyactInfo from '../../components/ContyactInfo';

export const getServerSideProps = async context => {
  const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  //   const data = null;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contact: data,
    },
  };
};

const Contact = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContyactInfo contact={contact} />
    </>
  );
};

export default Contact;
