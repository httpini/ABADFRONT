import React, { useState } from 'react'
import { equipos } from '../../utils/constants'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function InformacionEquipo({ equipo, fairPlay, goleadores, tabla, sancionados }) {
    return (
        <div className='bg-blue-500 p-5 w-[100%]'>
            <h1 className='underline'>Nombre de equipo</h1>
            <div>
                <h2>Torneo Amateur</h2>
                <h2>Datos de tabla</h2>
                <ul className='ml-10'>
                    <li>Posición: #{tabla.pos}</li>
                    <li>Posición fair play: #4</li>
                    <li>Puntos: {2}</li>
                    <li>Partidos jugados: 5</li>
                    <li>Partidos ganados: 4</li>
                    <li>Partidos empatados: 1</li>
                    <li>Partidos perdidos: 0</li>
                    <li>Goles a favor: 5</li>
                    <li>Goles en contra: 2</li>
                    <li>Diferencia de gol: 3</li>
                </ul>
                <h2>Goleadores</h2>
                <ul className='ml-10'>
                    <li>Juan: 2</li>
                    <li>Pedro: 2</li>
                    <li>Raquel: 1</li>
                </ul>
            </div>
        </div >
    )
}
