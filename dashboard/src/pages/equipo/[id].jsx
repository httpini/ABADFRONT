import React from 'react'

export default function Equipo({ id }) {
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
  return {
    props: {
      id
    }
  }
}