import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function Copa({ id }) {
  return (
    <div>
      <Header />
      <section>
        <h1>{id}</h1>
      </section>
      <Footer />
    </div>
  )
}

export async function getStaticProps({ params: { id } }) {
  try {
    return {
      props: {
        id
      },
      revalidate: 60 * 60, 
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
}
