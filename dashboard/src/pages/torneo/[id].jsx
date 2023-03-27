import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link';
import React from 'react';
import axios, { all } from 'axios';
import Fechas from '@/components/Fechas';
import TablaPuntajes from '@/components/TablaPuntajes';
import Goleadores from '@/components/Goleadores';
import FairPlay from '@/components/FairPlay';
import Sanciones from '@/components/Sanciones';
import LinksTorneos from '@/components/LinksTorneos';

export default function Torneo({ allTorneos, id, torneos, partidos, tabla, goleadores, fair_play, sanciones }) {
  const activeTopicStyle = 'underline font-bold'
  const topicStyle = ''
  return (
    <div className='relative'>
      <Header allTorneos={allTorneos} />
      <section>
        <LinksTorneos torneos={allTorneos} id={id} />
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
    console.time('torneos')
    let torneos = await axios.post('http://localhost:3500/api/torneo-equipos', { torneo: id })
    console.timeEnd('torneos')
    // let torneoTable = await axios.post('http://localhost:3500/api/torneo-tabla', { torneo: id  SE PUEDE BORRAR?})
    console.time('partidos')
    let partidos = await axios.post('http://localhost:3500/api/partidos', { torneo: id })
    console.timeEnd('partidos')
    console.time('allTorneos')
    let allTorneos = await axios.get('http://localhost:3500/api/torneos')
    console.timeEnd('allTorneos')
    console.time('torneo')
    let torneo = await axios.post('http://localhost:3500/api/torneo-tabla', { torneo: id })
    console.timeEnd('torneo')
    // let goleadores = await axios.post('http://localhost:3500/api/torneo-goleadores', { torneo: id })

    // let fair_play = await axios.post('http://localhost:3500/api/torneo-fairplay', { torneo: id })

    // let sanciones = await axios.post('http://localhost:3500/api/torneo-sanciones', { torneo: id })
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