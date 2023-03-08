import React from 'react'
import { equipos } from '../../utils/constants'

export default function Sanciones() {
  return (
    <div className='md:col-span-2 flex flex-wrap justify-center w-full'>
      <div className='bg-yellow-300 w-full md:w-auto'>
        {
          equipos && equipos.map((e, i) => (
            <div key={i} className='flex w-full gap-4 justify-center'>
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
    </div>
  )
}
