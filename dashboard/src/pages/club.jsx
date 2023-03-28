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
import LinksClubes from '@/components/LinksClubes'

export default function Equipo({ dataEquipo }) {
  const [query, setQuery] = useState({})
  let router = useRouter();
  console.log(query);
  useEffect(() => {
    setQuery(router.query)
  }, [])

  return (
    <div>
      <Header />
      <section className='w-full'>
        {/* <LinksTorneos torneos={torneos} id={id} /> */}
        <LinksClubes query={query} equipo={'hola'} torneo={query.torneo} />
        <LinksClubes query={query} equipo={'chau'} torneo={query.torneo} />
        <div className='grid md:grid-cols-2 w-full flex-wrap gap-10 justify-around p-10'>
          {/* <Link href={{ pathname: `/club/${id}`, query: { torneo: 'chau', equipo: query.equipo } }}>chau</Link> */}
          <InformacionEquipo />
          <FechasEquipo />
        </div>
      </section>
      <Footer />
    </div>
  )
}


export const getServerSideProps = async ({ query: { torneo, equipo } }) => {
  // let torneos = await axios.post('http://localhost:3500/api/torneo-equipos', { torneo: id })
  let dataEquipo = await axios.post('http://localhost:3500/api/torneo-equipos', { torneo, equipo })

  return {
    props: {
      dataEquipo: dataEquipo.data.torneos
    }
  }
}