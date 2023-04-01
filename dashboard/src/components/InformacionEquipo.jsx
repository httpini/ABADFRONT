import React, { useState } from 'react'
import { equipos } from '../../utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function InformacionEquipo({ nombreEquipo, nombreTorneo, equipo, torneo, fairPlay, goleadores, tabla, sancionados }) {
    const [visible, setVisible] = useState(false)
    return (
        <div className='bg-blue-500 p-5 w-[100%]'>
            <h1 className='underline'>{nombreEquipo}</h1>
            <div>
                <h2>Torneo: {nombreTorneo}</h2>
                <h2>Datos de tabla</h2>
                <ul className='ml-10'>
                    <li>Posición: {tabla.posicion}</li>
                    <li>Puntos: {tabla.puntos}</li>
                    <li>Partidos jugados: {tabla.partidosJugados}</li>
                    <li>Partidos ganados: {tabla.partidosGanados}</li>
                    <li>Partidos empatados: {tabla.partidosEmpatados}</li>
                    <li>Partidos perdidos: {tabla.partidosPerdidos}</li>
                    <li>Goles a favor: {tabla.golesFavor}</li>
                    <li>Goles en contra: {tabla.golesContra}</li>
                    <li>Diferencia de gol: {tabla.diferenciaGol}</li>
                </ul>
                <h2>Fair play</h2>
                <ul className='ml-10'>
                    <li>Posición fair play: {fairPlay.posicion}</li>
                    <li>Puntos: {fairPlay.puntos}</li>
                    <li>Amarillas: {fairPlay.tarjetasAmarillas}</li>
                    <li>Rojas: {fairPlay.tarjetasRojas}</li>
                    <li>Rojas: {fairPlay.tarjetasRojas}</li>
                    <li>Amonestaciones: {fairPlay.amonestaciones}</li>
                </ul>
                <h2>Goleadores</h2>
                <ul className='ml-10'>
                    {goleadores.map(g => <li>{g.name}: {g.goles} goles</li>)}
                </ul>
                <h2>Sanciones</h2>
                <ul className='ml-10'>
                    {sancionados.map(s =>
                        <li>
                            <div className='flex gap-5 relative'>
                                <h3 className='inline'>{s.name}</h3>
                                <span onMouseEnter={() => setVisible(!visible)} onMouseLeave={() => setVisible(!visible)}>+</span>
                                {
                                    // visible &&
                                    <div className='flex gap-3 flex-wrap'>
                                        <h3 className='inline'>inicio: {s.f_sancion}</h3>
                                        <h3 className='inline'>duracion: {s.sancion}</h3>
                                        <h3 className='inline'>finalizacion: {s.f_vuelta}</h3>
                                    </div>
                                }
                            </div>
                        </li>)}
                </ul>
            </div>
        </div >
    )
}
