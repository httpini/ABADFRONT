import Footer from '@/components/Footer'
import Header from '@/components/Header'
import axios from 'axios'
import React from 'react'

export default function Equipos({ clubes = [] }) {
  return (
    <div className='relative h-[100vh]'>
      <Header />
      <section>
        <h1>Clubes participantes de torneos</h1>
        <div className='flex flex-wrap gap-5'>
          {clubes.map((club, index) => (
            <div key={index}>{club.nombre}</div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  try {
    const response = await axios.get('http://localhost:3500/api/torneo-equipos')
    const clubes = response.data.clubes
    return {
      props: {
        clubes: clubes || [],
      },
    }
  } catch (error) {
    console.error('Error fetching clubes:', error)
    return {
      props: {
        clubes: [],
      },
    }
  }
}
