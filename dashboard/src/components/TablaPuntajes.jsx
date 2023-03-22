import React from 'react'
import Link from 'next/link'

export default function TablaPuntajes({ equipos, nico }) {
    return (
        <div className='bg-red-300'>
            <h1>Puntajes</h1>
            <table className='w-full'>
                <thead className='bg-white'>
                    <tr>
                        <th>#</th>
                        <th>Equipo</th>
                        <th>PTS</th>
                        <th>PJ</th>
                        <th>PG</th>
                        <th>PE</th>
                        <th>PP</th>
                        <th>GF</th>
                        <th>GC</th>
                        <th>DG</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        equipos && equipos.map((e, i) => (
                            <tr key={i}>
                                <th>{i}</th>
                                <th><Link href={`/equipo/${e.nombre}`}>{e.nombre}</Link></th>
                                <th>{e.puntaje}</th>
                                <th>{e.partidos.ganado}</th>
                                <th>{e.partidos.empate}</th>
                                <th>{e.partidos.perdido}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}

export const getServerSideProps = async ({ params: { id } }) => {
    let torneos = await axios.post('http://localhost:3500/api/torneo-tabla', { torneo: id })
    let equipos = await axios.post('http://localhost:3500/api/torneo-equipos', { torneo: id })
    return {
        props: {
            id,
            torneos: torneos.data.torneos,
            equipos: equipos.data,
        }
    }
}