import React from 'react'
import { equipos } from '../../utils/constants'


export default function Goleadores() {
    return (
        <div className='bg-green-300 '>
            <h1>Goleadores</h1>
            <table className='w-full'>
                <thead className='bg-white'>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Puntaje</th>
                        <th>Ganados</th>
                        <th>Empatados</th>
                        <th>Perdidos</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        equipos && equipos.map((e, i) => (
                            <tr key={i}>
                                <th>{i}</th>
                                <th>{e.nombre}</th>
                                <th>{e.puntaje}</th>
                                <th>{e.partidos.ganado}</th>
                                <th>{e.partidos.empate}</th>
                                <th>{e.partidos.perdido}</th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
