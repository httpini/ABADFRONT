import React from 'react'
import { equipos } from '../../utils/constants'

export default function FairPlay() {
  return (
    <div className='bg-orange-300'>
            <h1>Fair Play</h1>

            {
                equipos && equipos.map((e, i) => (
                    <div key={i} className='flex w-full gap-4'>
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
  )
}
