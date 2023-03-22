import React, { useState, useEffect } from 'react'
// import { equipos } from '../../utils/constants'
import Link from 'next/link'

let cantPartidos = 24

export default function Fechas({ partidos }) {
    const [fecha, setFecha] = useState(1)
    const [partidosFecha, setPartidosFecha] = useState([])
    const activeTopicStyle = 'underline font-bold'

    let cambioFecha = (i) => {
        return setFecha(i.target.innerHTML)
    }

    useEffect(() => {
        if (partidos.length) {
            let parts = partidos.filter(p => p.nro == fecha);
            return setPartidosFecha(parts);
        }

    }, [partidos, fecha])


    return (
        <div className='bg-blue-500'>
            <h1>Fechas y Partidos</h1>
            <div className={`cursor-pointer flex flex-wrap gap-2 `}>
                {Array(cantPartidos).fill(0).map((x, i) =>
                    <div key={i + 1} onClick={cambioFecha} className={`${i == fecha - 1 ? activeTopicStyle : ''}`}>{i + 1}</div>
                )}
            </div>
            {partidosFecha.length > 0 ?
                (<table className='w-full'>
                    <thead className='bg-white'>
                        <tr>
                            <th>Estado</th>
                            <th>Local</th>
                            <th></th>
                            <th></th>
                            <th>Visitante</th>
                            <th>Dia</th>
                            <th>Hora</th>
                            <th>Predio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            partidosFecha.map((e, i) => (
                                <tr key={i}>
                                    <th>{e.local_name}</th>
                                    <th>{e.local_name}</th>
                                    <th>{e.g_local}</th>
                                    <th>{e.g_visitante}</th>
                                    <th>{e.visitante_name}</th>
                                    <th>{e.dia ? e.dia : 'a confirmar'}</th>
                                    <th>{e.hora ? e.hora : 'a confirmar'}</th>
                                    <th><Link href={e.predio_url ? e.predio_url : '#'} target={e.predio_url ? "_blank" : ''} style={e.predio_url ? { cursor: 'pointer' } : { cursor: 'default' }} >{e.predio_name ? e.predio_name : 'a confirmar'}</Link></th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>) : <h3 className='text-center p-6 font-black text-red-900'>a confirmar</h3>
            }
        </div >
    )
}
