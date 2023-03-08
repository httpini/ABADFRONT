import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link';
import React from 'react';
import axios from 'axios';
import Fechas from '@/components/Fechas';
import TablaPuntajes from '@/components/TablaPuntajes';
import Goleadores from '@/components/Goleadores';
import FairPlay from '@/components/FairPlay';
import Sanciones from '@/components/Sanciones';

export default function Torneo({ id, torneos }) {
  const activeTopicStyle = 'underline font-bold'
  const topicStyle = ''
  return (
    <div>
      <Header />
      <section>
        <div className='flex w-[50%] justify-around m-auto mt-3'>
          {torneos && torneos.map(t => (
            <Link key={t} href={`/torneo/${t}`} className={id == t ? activeTopicStyle : topicStyle}>{t}</Link>
          ))}
        </div>
        <div className='grid md:grid-cols-2 w-full flex-wrap gap-10 justify-around p-10'>
          <TablaPuntajes />
          <Fechas />
          <Goleadores />
          <FairPlay />
          <Sanciones />
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