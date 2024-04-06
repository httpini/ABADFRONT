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

export const getServerSideProps = async ({ params: { id } }) => {
  try {

    return {
      props: {
        id
      }
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      }
    };
  }
}