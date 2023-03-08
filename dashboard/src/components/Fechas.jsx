import React, { useState } from 'react'
import { equipos } from '../../utils/constants'

let partidos = 24

export default function Fechas() {
    const [fecha, setFecha] = useState(1)
    const activeTopicStyle = 'underline font-bold'

    let cambioFecha = (i) => {
        return setFecha(i.target.innerHTML)
    }

    return (
        <div className='bg-blue-500'>
            <h1>Fechas</h1>
            <div className={`cursor-pointer flex flex-wrap gap-2 `}>
                {Array(partidos).fill(0).map((x, i) =>
                    <div key={i + 1} onClick={cambioFecha} className={`${i == fecha - 1 ? activeTopicStyle : ''}`}>{i + 1}</div>
                )}
            </div>
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
        </div >
    )
}
