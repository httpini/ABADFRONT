import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

export default function Torneo({id}) {
  console.log(id);
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

export const getServerSideProps = async ({params: { id }}) => {
  return {
    props: {
      id
    }
  }
}