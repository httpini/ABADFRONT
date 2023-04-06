import React from 'react'
// import { equipos } from '../../utils/constants'
import Link from 'next/link'

export default function Fechas({ partidos }) {
    return (
        <div className='tarjeta bg-oscuro3 shadow-oscuro3 shadow-md w-full'>
            <h2 className='font-bold underline'>Fechas</h2>
            <table className='w-full'>
                <thead className='bg-white ba bg-claro1 bg-opacity-50'>
                    <tr>
                        <th>#</th>
                        <th>Día</th>
                        <th>L/V</th>
                        <th>Resultado</th>
                        <th>Rival</th>
                        <th>Puntos</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        partidos.map((e, i) => (
                            <tr key={i} className={`${i % 2 == 0 ? 'par' : ''}`}>
                                <th>{e.fecha}</th>
                                <th>{e.dia}</th>
                                <th>{e.localVisitante}</th>
                                <th>{e.goles.equipo} - {e.goles.rival}</th>
                                <th>{e.rival}</th>
                                <th>{e.puntos != null ? e.puntos : '-'}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}
