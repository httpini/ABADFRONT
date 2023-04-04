import Fechas from '@/components/Fechas'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InformacionEquipo from '@/components/InformacionEquipo'
import LinksTorneos from '@/components/LinksTorneos'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import FechasEquipo from '@/components/FechasEquipo'
import Link from 'next/link'
import { useRouter } from 'next/router'
import LinksEquipos from '@/components/LinksEquipos'
import LinksTorneoEquipo from '@/components/LinksTorneoEquipo'
import { redirect } from 'next/navigation';
import ColoresEquipo from '@/components/ColoresEquipo'


export default function ClubId({ id, club, equipos, torneos, equipo }) {
  const [query, setQuery] = useState({})
  const [equ, setEqu] = useState({})
  const [torn, setTorn] = useState({})
  let router = useRouter();
  console.log(equipo.equipo.colores);

  useEffect(() => {
    if (router.query.equipo) setEqu(equipos.find(e => e.name_url === router.query.equipo));
    if (router.query.torneo) setTorn(torneos.find(t => t.name_url === router.query.torneo));
    setQuery(router.query)
  }, [equipos, torneos, query])

  return (
    <div>
      <Header />
      {/* <ColoresEquipo colores={equipo.equipo.colores} width={100} height={100}/> */}
      <section className='w-full'>
        {/* <LinksTorneos torneos={torneos} id={id} /> */}
        <h2 className='text-2xl text-center mt-5'>Equipos</h2>
        <div className='flex flex-wrap w-full justify-around'>
          {
            equipos && equipos.map(e => (
              <LinksEquipos key={e.name_url} id={id} query={query} equipo={e} categoria={e.categoria} torneo={query.torneo}/>
            ))
          }
        </div>
        {
          torneos &&
          <div>
            <h2 className='text-2xl text-center mt-5'>Torneos</h2>
            <div className='flex flex-wrap w-full justify-around'>
              {
                torneos.map(t => (
                  <LinksTorneoEquipo key={t.name_url} query={query} torneo={t} />
                ))
              }
            </div>
          </div>
        }

        {
          equipo && (
            <div className='grid md:grid-cols-2 w-full flex-wrap gap-10 justify-around p-10'>
              <InformacionEquipo nombreTorneo={torn.name} nombreEquipo={equ.name} equipo={equipo.equipo} fairPlay={equipo.fair_play} goleadores={equipo.goleadores} tabla={equipo.tabla} sancionados={equipo.sancionados} />
              <FechasEquipo partidos={equipo.partidos} />
            </div>
          )
        }
      </section>
      <Footer />
    </div>
  )
}


export const getServerSideProps = async ({ params: { id }, query: { torneo, equipo } }) => {
  try {

    let clubData = await axios.post('http://localhost:3500/api/club-url', { club: id })
    // console.log('club', clubData);
    if (!clubData) {
      return redirect('/');
    }
    // console.log(torneo, equipo);
    let equipoData
    if (torneo && equipo) equipoData = await axios.post(`http://localhost:3500/api/equipo-torneo`, { torneo, equipo })

    if (clubData == null) redirect('/')
    // console.log(equipoData.data);
    // let dataEquipo = calls[1]
    // console.log(dataClub.data.club.equipos, equipo);
    let torneos
    if (equipo) {
      torneos = clubData.data.club.equipos.find(e => e.name_url === equipo).torneos
    }

    let props = {
      id,
      club: clubData.data.club.club,
      equipos: clubData.data.club.equipos
    }

    if (torneos) props.torneos = torneos
    // console.log(equipoData.data);
    if (equipoData) props.equipo = equipoData.data.equipos


    return {
      props
    }
  } catch (error) {
    return {
      redirect: {
        permanent: false,
        destination: "/club",
      }
    };
  }
}