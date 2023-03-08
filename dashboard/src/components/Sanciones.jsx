import React from 'react'
import { equipos } from '../../utils/constants'

export default function Sanciones() {
  return (
    <div className='md:col-span-2 flex flex-wrap justify-center w-full'>
      <h1>Sanciones</h1>
      <div className='bg-yellow-300 w-full md:w-auto'>
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
    </div>
  )
}
