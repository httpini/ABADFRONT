import React, { useState } from 'react'
import { equipos } from '../../utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function InformacionEquipo({ nombreEquipo, nombreTorneo, fairPlay, goleadores, tabla, sancionados, torneo }) {
    const [visible, setVisible] = useState(false)
    return (
        <div className='tarjeta bg-oscuro3 shadow-md shadow-oscuro3 p-5 w-[100%]'>
            <h1 className='underline font-bold'>{nombreEquipo}</h1>
            <h2 className=''>Torneo: {nombreTorneo}</h2>
            <div className='grid grid-cols-2'>
                <div className=''>
                    <h2 className='border-b-2'>Datos de tabla</h2>
                    <ul className='ml-10'>
                        <li className=''>Posición: <h3 className='inline font-bold'>{tabla.posicion}</h3></li>
                        <li className=''>Puntos: <h3 className='inline font-bold'>{tabla.puntos}</h3></li>
                        <li className=''>Partidos jugados: <h3 className='inline font-bold'>{tabla.partidosJugados}</h3></li>
                        <li className=''>Partidos ganados: <h3 className='inline font-bold'>{tabla.partidosGanados}</h3></li>
                        <li className=''>Partidos empatados: <h3 className='inline font-bold'>{tabla.partidosEmpatados}</h3></li>
                        <li className=''>Partidos perdidos: <h3 className='inline font-bold'>{tabla.partidosPerdidos}</h3></li>
                        <li className=''>Goles a favor: <h3 className='inline font-bold'>{tabla.golesFavor}</h3></li>
                        <li className=''>Goles en contra: <h3 className='inline font-bold'>{tabla.golesContra}</h3></li>
                        <li className=''>Diferencia de gol: <h3 className='inline font-bold'>{tabla.diferenciaGol}</h3></li>
                    </ul>
                </div>
                <div>
                    <h2 className='border-b-2'>Fair play</h2>
                    <ul className='ml-10'>
                        <li className=''>Posición fair play: <h3 className='inline font-bold'>{fairPlay.posicion}</h3></li>
                        <li>Puntos: <h3 className='inline font-bold'>{fairPlay.puntos}</h3></li>
                        <li>Amarillas: <h3 className='inline font-bold'>{fairPlay.tarjetasAmarillas}</h3></li>
                        <li>Rojas: <h3 className='inline font-bold'>{fairPlay.tarjetasRojas}</h3></li>
                        <li>Amonestaciones: <h3 className='inline font-bold'>{fairPlay.amonestaciones}</h3></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
