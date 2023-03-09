import React, { useState } from 'react'
// import { equipos } from '../../utils/constants'
import Link from 'next/link'

let equipos = [1, 2, 3, 4, 5, 6, 7]

export default function Fechas() {
    return (
        <div className='bg-blue-500 w-full'>
            <h1>Fechas</h1>
            <table className='w-full'>
                <thead className='bg-white'>
                    <tr>
                        <th>Día</th>
                        <th>Fecha</th>
                        <th>L/V</th>
                        <th>Oponente</th>
                        <th>Resultado</th>
                        <th>Puntos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        equipos && equipos.map((e, i) => (
                            <tr key={i}>
                                <th>1/3/2023</th>
                                <th>{i + 1}</th>
                                <th>L</th>
                                <th>Ferro</th>
                                <th>1-0</th>
                                <th>3</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}
