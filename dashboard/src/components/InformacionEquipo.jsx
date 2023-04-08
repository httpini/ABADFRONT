import React, { useState } from 'react'
import { equipos } from '../../utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {BsArrowUpRightCircle } from "react-icons/bs"

export default function InformacionEquipo({ nombreEquipo, nombreTorneo, fairPlay, goleadores, tabla, sancionados, torneo, equipo}) {
    const [visible, setVisible] = useState(false)
    return (
        <div className='tarjeta bg-oscuro3 shadow-md shadow-oscuro3 p-5 w-[100%]'>
            <h1 className='font-bold text-xl text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50 pb-1 mb-1'>{nombreEquipo}</h1>
            <h2 className='par'>Torneo: <Link className=' hover:text-amarillo hover:font-bold' href={`/torneo/${torneo.name_url}`}>{torneo.name}</Link></h2>
            <h2 className=''>Predio: {equipo.predio_name ? <Link className=' hover:text-amarillo hover:font-bold' target="_blank" href={equipo.predio_url}>{equipo.predio_name}</Link>: "No especificado"}</h2>
            <h2 className='par'>Hora: {equipo.horario_local? equipo.horario_local : "No especificada"}</h2>


            <div className='grid grid-cols-2 mt-5'>
                <div className=' border-r-2 border-oscuro1 border-opacity-40'>
                    <h2 className='text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>Datos de tabla</h2>
                    <ul className=''>
                        <li className='text-center par'>Posición: <h3 className='inline font-bold'>{tabla.posicion}</h3></li>
                        <li className='text-center '>Puntos: <h3 className='inline font-bold'>{tabla.puntos}</h3></li>
                        <li className='text-center par'>P. Jugados: <h3 className='inline font-bold'>{tabla.partidosJugados}</h3></li>
                        <li className='text-center '>P. Ganados: <h3 className='inline font-bold'>{tabla.partidosGanados}</h3></li>
                        <li className='text-center par'>P. Empatados: <h3 className='inline font-bold'>{tabla.partidosEmpatados}</h3></li>
                        <li className='text-center '>P. Perdidos: <h3 className='inline font-bold'>{tabla.partidosPerdidos}</h3></li>
                        <li className='text-center par'>Goles a favor: <h3 className='inline font-bold'>{tabla.golesFavor}</h3></li>
                        <li className='text-center '>Goles en contra: <h3 className='inline font-bold'>{tabla.golesContra}</h3></li>
                        <li className='text-center par'>Gol dif.: <h3 className='inline font-bold'>{tabla.diferenciaGol}</h3></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-center border-b-2 border-oscuro1 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'>Fair play</h2>
                    <ul className='text-center '>
                        <li className='par'>Posición: <h3 className='inline font-bold'>{fairPlay.posicion}</h3></li>
                        <li>Puntos: <h3 className='inline font-bold '>{fairPlay.puntos}</h3></li>
                        <li className='par'>Amarillas: <h3 className='inline font-bold'>{fairPlay.tarjetasAmarillas}</h3></li>
                        <li>Rojas: <h3 className='inline font-bold'>{fairPlay.tarjetasRojas}</h3></li>
                        <li className='par'>Amones.: <h3 className='inline font-bold'>{fairPlay.amonestaciones}</h3></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}
