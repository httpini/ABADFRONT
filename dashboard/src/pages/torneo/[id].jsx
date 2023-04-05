import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios, { all } from 'axios';
import Fechas from '@/components/Fechas';
import TablaPuntajes from '@/components/TablaPuntajes';
import Goleadores from '@/components/Goleadores';
import FairPlay from '@/components/FairPlay';
import Sanciones from '@/components/Sanciones';
import LinksTorneos from '@/components/LinksTorneos';

export default function Torneo({ allTorneos, id, partidos, tabla, goleadores, fair_play, sanciones }) {
  const [title, setTitle] = useState('Torneo')
  useEffect(() => {
    let nombreTorneo = allTorneos.find(t => t.name_url == id)
    return setTitle(nombreTorneo.name);
  }, [id])

  return (
    <div className='relative'>
      <Header allTorneos={allTorneos} />
      <section>
        <LinksTorneos torneos={allTorneos} id={id} />
        <h1 className='text-center font-bold text-2xl mt-10 underline'>Torneo - {title}</h1>
        <div className='flex flex-col break:grid grid-cols-2 justify w-full gap-7 justify-around py-10 sm:px-10'>
          <TablaPuntajes tabla={tabla} />
          <Fechas partidos={partidos} />
          <FairPlay fair_play={fair_play} />
          <Goleadores goleadores={goleadores} />
          <Sanciones sanciones={sanciones} />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async ({ params: { id } }) => {
  try {
    console.time('apis')

    let results = await Promise.all([
      axios.post('http://localhost:3500/api/partidos', { torneo: id }),
      axios.get('http://localhost:3500/api/torneos'),
      axios.post('http://localhost:3500/api/torneo-tabla', { torneo: id })
    ])
    console.timeEnd('apis')

    let partidos = results[0]
    let allTorneos = results[1]
    let torneo = results[2]

    return {
      props: {
        id,
        partidos: partidos.data.partidos,
        tabla: torneo.data.tabla,
        goleadores: torneo.data.goleadores,
        fair_play: torneo.data.fair_play,
        sanciones: torneo.data.sanciones,
        allTorneos: allTorneos.data.torneos
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