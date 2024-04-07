import React from 'react'
// import { equipos } from '../../utils/constants'
import Link from 'next/link'

export default function Fechas({ partidos }) {
    console.log('partidos', partidos);
    return (
        <div className='tarjeta bg-oscuro3 shadow-oscuro3 shadow-md w-full'>
            <h2 className='font-bold text-xl text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 pb-1 mb-1'>Fechas</h2>
            <table className='w-full'>
                <thead className='bg-white ba '>
                    <tr>
                        <th className='text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>#</th>
                        <th className='text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>Día</th>
                        <th className='text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>L/V</th>
                        <th className='text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>Resultado</th>
                        <th className='text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>Rival</th>
                        <th className='text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>Puntos</th>
                    </tr>
                </thead>
                <tbody className=''>
                    {
                        partidos.map((e, i) => (
                            <tr key={i} className={`${i % 2 == 0 ? 'par' : ''}`}>
                                <th className='text-center'>{e.fecha}</th>
                                <th className='text-center'>{e.dia}</th>
                                <th className='text-center'>{e.localVisitante}</th>
                                <th className='text-center'>{e.goles.equipo} - {e.goles.rival}</th>
                                <th className='text-center'>{e.rival}</th>
                                <th className='text-center'>{e.puntos != null ? e.puntos : '-'}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}
