import Footer from '@/components/Footer'
import Header from '@/components/Header'
import axios from 'axios'
import React from 'react'

export default function equipos({ clubes = [1, 2] }) {
  return (
    <div className='relative h-[100vh]'>
      <Header />
      <section>
        <h1>Clubes participantes de torneos</h1>
        <div className='flex flex-wrap gap-5'>
          {
            clubes && clubes.map((c, i) => (
              <div>h</div>
            ))
          }
        </div>
      </section>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  // let torneos = await axios.post('http://localhost:3500/api/torneo-equipos')
  return {
    props: {
      // id,
      // torneos: torneos.data.torneos
    }
  }
}