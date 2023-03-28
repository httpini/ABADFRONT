import Footer from '@/components/Footer'
import Header from '@/components/Header'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import TarjetaClub from '@/components/TarjetaClub'

export default function Club({ clubes }) {
    return (
        <div>
            <Header />
            <section className='flex flex-wrap flex-col'>
                <h1 className='text-center font-bold text-2xl w-full mt-5'>Clubes</h1>

                <div className='w-full flex-1 grid grid-cols-2  lg:grid-cols-4 grid-flow-row p-10 items-center justify-center'>
                    {
                        clubes && clubes.map(c => <TarjetaClub key={c.name} club={c} />)
                    }
                </div>
            </section>
            <Footer />
        </div>
    )
}


export const getServerSideProps = async () => {
    // let torneos = await axios.post('http://localhost:3500/api/torneo-equipos', { torneo: id })
    let clubes = await axios.get('http://localhost:3500/api/clubes')
    return {
        props: {
            clubes: clubes.data.clubes
        }
    }
}