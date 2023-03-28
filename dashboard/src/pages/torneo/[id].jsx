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

export default function Torneo({ allTorneos, id, torneos, partidos, tabla, goleadores, fair_play, sanciones }) {
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
        <h1 className='text-center font-bold text-2xl mt-5'>Torneo - {title}</h1>
        <div className='grid md:grid-cols-2 w-full flex-wrap gap-10 justify-around p-10'>
          <TablaPuntajes tabla={tabla} />
          <Fechas partidos={partidos} />
          <Goleadores goleadores={goleadores} />
          <FairPlay fair_play={fair_play} />
          <Sanciones sanciones={sanciones} />
        </div>
      </section>
      <Footer />
    </div>
  )
}

export const getServerSideProps = async ({ params: { id } }) => {
  try {
    // console.time('separado')
    // console.time('torneos')
    // let torneos2 = await axios.post('http://localhost:3500/api/torneo-equipos', { torneo: id })
    // console.timeEnd('torneos')
    // // let torneoTable = await axios.post('http://localhost:3500/api/torneo-tabla', { torneo: id  SE PUEDE BORRAR?})
    // console.time('partidos')
    // let partidos2 = await axios.post('http://localhost:3500/api/partidos', { torneo: id })
    // console.timeEnd('partidos')
    // console.time('allTorneos')
    // let allTorneos2 = await axios.get('http://localhost:3500/api/torneos')
    // console.timeEnd('allTorneos')
    // console.time('torneo')
    // let torneo2 = await axios.post('http://localhost:3500/api/torneo-tabla', { torneo: id })
    // console.timeEnd('torneo')
    // console.timeEnd('separado')
    console.time('apis')

    let results = await Promise.all([
      axios.post('http://localhost:3500/api/torneo-equipos', { torneo: id }),
      axios.post('http://localhost:3500/api/partidos', { torneo: id }),
      axios.get('http://localhost:3500/api/torneos'),
      axios.post('http://localhost:3500/api/torneo-tabla', { torneo: id })
    ])
    console.timeEnd('apis')
    
    let torneos = results[0]
    let partidos = results[1]
    let allTorneos = results[2]
    let torneo = results[3]

    return {
      props: {
        id,
        torneos: torneos.data,
        partidos: partidos.data.partidos,
        tabla: torneo.data.tabla,
        goleadores: torneo.data.goleadores,
        fair_play: torneo.data.fair_play,
        sanciones: torneo.data.sanciones,
        allTorneos: allTorneos.data.torneos
      }
    }
  } catch (error) {

  }
}