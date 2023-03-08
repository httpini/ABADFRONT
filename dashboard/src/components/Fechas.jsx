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
            <div className={`cursor-pointer flex flex-wrap gap-2 `}>
                {Array(partidos).fill(0).map((x, i) =>
                    <div key={i + 1} onClick={cambioFecha} className={`${i == fecha - 1 ? activeTopicStyle : ''}`}>{i + 1}</div>
                )}
            </div>
            <div className=''>
                {
                    equipos && equipos.map((e, i) => (
                        <div key={i} className={`flex w-full gap-4`}>
                            <p>{i}</p>
                            <p>{e.nombre}</p>
                            <p>{e.puntaje}</p>
                            <p>ganados: {e.partidos.ganado}</p>
                            <p>empatados: {e.partidos.empatado}</p>
                            <p>perdidos: {e.partidos.perdido}</p>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
