import Footer from '@/components/Footer'
import Header from '@/components/Header'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import TarjetaClub from '@/components/TarjetaClub'
import {GiCheckedShield} from 'react-icons/gi'

export default function Club({ clubes }) {
    return (
        <div>
            <Header />
            <section className='flex flex-wrap flex-col'>
                <h1 className='text-center font-medium text-4xl w-full mt-5 text-oscuro0'><div className='flex justify-center items-center'><GiCheckedShield className='text-2xl'></GiCheckedShield>Clubes<GiCheckedShield className='text-2xl'></GiCheckedShield></div></h1>

                <div className='w-full flex md:flex-1 flex-col md:grid md:grid-cols-2 break:grid-cols-3 2xl:grid-cols-4 grid-flow-row p-10 gap-5 break:gap-10 justify-center items-stretch'>
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
    console.log(clubes.data);
    return {
        props: {
            clubes: clubes.data.clubes
        }
    }
}