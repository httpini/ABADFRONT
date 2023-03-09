import Fechas from '@/components/Fechas'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InformacionEquipo from '@/components/InformacionEquipo'
import LinksTorneos from '@/components/LinksTorneos'
import axios from 'axios'
import React from 'react'

export default function Equipo({ id, torneos }) {
  return (
    <div>
      <Header />
      <section>
        {/* <LinksTorneos torneos={torneos} id={id} /> */}
        <div className='grid md:grid-cols-2 w-full flex-wrap gap-10 justify-around p-10'>
          <InformacionEquipo />
          <Fechas />
        </div>
      </section>
      <Footer />
    </div>
  )
}


export const getServerSideProps = async ({ params: { id } }) => {
  let torneos = await axios.post('http://localhost:3500/api/torneo-equipos', { torneo: id })
  return {
    props: {
      id,
      torneos: torneos.data.torneos
    }
  }

}